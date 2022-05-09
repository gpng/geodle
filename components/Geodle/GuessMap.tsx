import { Box, Text } from '@chakra-ui/react';
import { lineString } from '@turf/turf';
import maplibregl from 'maplibre-gl';
import Guess from 'models/guess';
import Location from 'models/location';
import Rainbow from 'rainbowvis.js';
import React, { FC, useEffect, useRef, useState } from 'react';
import Map, { Layer, MapRef, Marker, Source } from 'react-map-gl';

const getColor = (score: number): string => {
  const min = '#fddb4f';
  const max = '#00b100';
  const rainbow = new Rainbow();
  rainbow.setSpectrum(min, max);
  return rainbow.colourAt(score);
};

interface Props {
  guesses: Guess[];
  answer: Location;
  isVisible: boolean;
}

const GuessMap: FC<Props> = ({ guesses, answer, isVisible }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // once the map has been set to visible before, set hasLoaded so that we don't reload the map
    // if the map is hidden and then shown again
    if (isVisible) {
      setHasLoaded(true);
    }
  }, [isVisible]);

  const boxRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapRef>(null);

  const fitBounds = (): void => {
    const coordinates = guesses.map((guess) => guess.location.coordinates);
    coordinates.push(answer.coordinates);
    const southwest = coordinates.reduce((acc, curr) => {
      return [Math.min(acc[0], curr[0]), Math.min(acc[1], curr[1])];
    });
    const northeast = coordinates.reduce((acc, curr) => {
      return [Math.max(acc[0], curr[0]), Math.max(acc[1], curr[1])];
    });
    mapRef.current?.fitBounds([southwest, northeast], {
      padding: 48,
      linear: true,
    });
  };

  const handleMapLoad = (): void => {
    fitBounds();
  };

  if (!hasLoaded && !isVisible) return null;

  return (
    <Box
      ref={boxRef}
      width="full"
      height="300px"
      display={!isVisible && hasLoaded ? 'none' : 'block'}
    >
      <Map
        mapLib={maplibregl}
        initialViewState={{
          latitude: 1.3528246962995887,
          longitude: 103.80871128739545,
          zoom: 9,
        }}
        mapStyle={{
          version: 8,
          name: 'Grey',
          sprite: 'mapbox://sprites/sla/cj7u5gsz51v7n2ss6fx5nt4bt?refresh=true',
          glyphs: 'mapbox://fonts/sla/{fontstack}/{range}.pbf?refresh=true',
          sources: {
            Grey: {
              type: 'raster',
              tiles: [
                'https://maps-a.onemap.sg/v3/Grey_HD/{z}/{x}/{y}.png?fresh=true',
                'https://maps-b.onemap.sg/v3/Grey_HD/{z}/{x}/{y}.png?fresh=true',
                'https://maps-c.onemap.sg/v3/Grey_HD/{z}/{x}/{y}.png?fresh=true',
              ],
              tileSize: 128,
              bounds: [103.596, 1.1443, 104.4309, 1.4835],
            },
          },
          layers: [
            {
              id: 'Grey',
              type: 'raster',
              source: 'Grey',
            },
          ],
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        onLoad={handleMapLoad}
        ref={mapRef}
      >
        <Source
          id="line-string"
          type="geojson"
          data={
            guesses.length > 1
              ? lineString(guesses.map((guess) => guess.location.coordinates))
              : undefined
          }
        >
          <Layer
            id="line-string"
            type="line"
            layout={{
              'line-join': 'round',
              'line-cap': 'round',
            }}
            paint={{
              'line-color': '#5b8572',
              'line-width': 4,
            }}
          />
        </Source>
        {guesses.map((guess, i) => {
          return (
            <Marker
              key={`${i}${guess.location.id}`}
              longitude={guess.location.coordinates[0]}
              latitude={guess.location.coordinates[1]}
            >
              <Box pos="relative">
                <Box
                  borderRadius="50%"
                  background={`#${getColor(guess.score)}`}
                  height={6}
                  width={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                >
                  <Text>{guess.isCorrect ? '🎉' : i + 1}</Text>
                </Box>
                <Text
                  color="black"
                  pos="absolute"
                  top="100%"
                  left="50%"
                  whiteSpace="nowrap"
                  transform="translateX(-50%)"
                >
                  {guess.location.name}
                </Text>
              </Box>
            </Marker>
          );
        })}
        {!guesses.find((guess) => guess.isCorrect) && (
          <Marker longitude={answer.coordinates[0]} latitude={answer.coordinates[1]}>
            <Box pos="relative">
              <Box
                borderRadius="50%"
                background="red"
                height={6}
                width={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
              >
                <Text>:(</Text>
              </Box>
              <Text
                color="black"
                pos="absolute"
                top="100%"
                left="50%"
                whiteSpace="nowrap"
                transform="translateX(-50%)"
              >
                {answer.name}
              </Text>
            </Box>
          </Marker>
        )}
      </Map>
    </Box>
  );
};

export default GuessMap;

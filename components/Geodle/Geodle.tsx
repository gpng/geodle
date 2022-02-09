import { CopyIcon } from '@chakra-ui/icons';
import { Button, Container, Heading, Link, Text, useToast, VStack } from '@chakra-ui/react';
import { bearing, distance, point } from '@turf/turf';
import Countdown from 'components/Geodle/Countdown';
import Guess from 'components/Geodle/Guess';
import Header from 'components/Geodle/Header';
import { differenceInDays, isSameDay } from 'date-fns';
import format from 'date-fns/format';
import { range } from 'lodash';
import GameState from 'models/game-state';
import GuessType from 'models/guess';
import Location from 'models/location';
import Statistics from 'models/statistics';
import { NextSeo } from 'next-seo';
import NextLink from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import seedrandom from 'seedrandom';
import { getGameState, getStatistics } from 'utils';

interface Props {
  title: string;
  description: string;
  maxGuesses: number;
  locations: Location[];
  startDate: Date;
}

const Geodle: FC<Props> = ({ title, description, maxGuesses, locations, startDate }) => {
  const [guesses, setGuesses] = useState<GuessType[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [maxDistance, setMaxDistance] = useState(0);

  const guessRefs = useRef<HTMLElement[]>([]);
  const answer = useRef<Location>(null);

  const toast = useToast();

  useEffect(() => {
    const newGame = (): void => {
      const RNG = seedrandom(format(new Date(), 'yyyyMMdd'));
      const ANSWER_INDEX = Math.floor(RNG() * locations.length);
      answer.current = locations[ANSWER_INDEX];

      let newMaxDistance = 0;
      locations.forEach((mrt) => {
        const dist = distance(point(mrt.coordinates), point(answer.current?.coordinates), {
          units: 'kilometers',
        });
        if (dist > newMaxDistance) {
          newMaxDistance = dist;
        }
      });
      setMaxDistance(newMaxDistance);
      setActiveIndex(0);
    };

    //check game history, if played today, then restore history
    const today = new Date();
    const gameStateString = localStorage.getItem(getGameState(title));
    if (gameStateString) {
      const gameState = JSON.parse(gameStateString) as GameState;
      // check if it is today
      if (isSameDay(new Date(gameState.updatedDate), today)) {
        // restore game state
        setGuesses(gameState.guesses);
        setMaxDistance(gameState.maxDistance);
        answer.current = gameState.answer;
        // if not success and more guesses, activate row
        if (
          !gameState.guesses[gameState.guesses.length - 1].isCorrect &&
          gameState.guesses.length < maxGuesses
        ) {
          setActiveIndex(gameState.guesses.length);
        }
        return;
      }
    }

    newGame();
  }, [answer, locations, maxGuesses, title]);

  useEffect(() => {
    guessRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  const submitGuess = (value: string): void => {
    const mrt = locations.find((mrt) => mrt.name === value);
    const from = point(mrt.coordinates);
    const to = point(answer.current?.coordinates);

    const dist = distance(from, to, { units: 'kilometers' });
    const bear = bearing(from, to);
    const isCorrect = mrt.id === answer.current?.id;
    const newGuesses = [
      ...guesses,
      {
        location: mrt,
        distance: dist,
        bearing: bear,
        score: 100 - Math.floor(100 * (dist / maxDistance)),
        isCorrect,
      },
    ];
    setGuesses(newGuesses);
    if (!isCorrect) {
      setActiveIndex(activeIndex + 1);
    }
    // save game state
    const gameState = {
      updatedDate: new Date(),
      guesses: newGuesses,
      answer: answer.current,
      maxDistance,
    };
    localStorage.setItem(getGameState(title), JSON.stringify(gameState));

    // update stats if finished game
    if (newGuesses.length === maxGuesses || isCorrect) {
      const statsString = localStorage.getItem(getStatistics(title));
      const stats = statsString
        ? (JSON.parse(statsString) as Statistics)
        : {
            played: 0,
            win: 0,
            streak: 0,
            maxStreak: 0,
          };
      stats.played += 1;
      if (isCorrect) {
        stats.win += 1;
        stats.streak += 1;
      } else {
        stats.streak = 0;
      }
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
      localStorage.setItem(getStatistics(title), JSON.stringify(stats));
    }
  };

  const copyResults = (): void => {
    const daysSinceStart = differenceInDays(new Date(), startDate);
    let text = `Geodle :: ${title}\n`;
    text += `Puzzle ${daysSinceStart + 1} ${guesses.length}/${maxGuesses}\n\n`;
    guesses.forEach((guess) => {
      const blocks = [];
      let score = guess.score;
      while (score > 0) {
        if (score >= 20) {
          blocks.push('🟩');
          score -= 20;
        } else if (score >= 10) {
          blocks.push('🟨');
          score -= 10;
        } else {
          break;
        }
      }
      range(0, 5 - blocks.length).forEach(() => {
        blocks.push('⬜');
      });
      text += `${blocks.join('')}\n`;
    });
    navigator?.clipboard?.writeText(text);
    toast({
      title: 'Results copied to clipboard',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container>
      <NextSeo title={`Geodle :: ${title}`} description={description} />
      <Header title={title} />
      <Heading as="h2" textAlign="center" w="full" pt={4}>
        {title}
      </Heading>
      <VStack py={8}>
        {range(0, maxGuesses).map((_, i) => (
          <Guess
            key={i}
            index={i}
            submitGuess={submitGuess}
            ref={(el) => (guessRefs.current[i] = el)}
            active={i === activeIndex}
            guess={guesses[i]}
            locations={locations}
          />
        ))}
      </VStack>
      {guesses.length === maxGuesses && !guesses[guesses.length - 1]?.isCorrect && (
        <Text mb={8}>:( The answer is {answer.current?.name}</Text>
      )}
      {(guesses[guesses.length - 1]?.isCorrect || guesses.length === maxGuesses) && (
        <>
          <Button
            onClick={copyResults}
            bg="green.400"
            color="white"
            _hover={{
              bg: 'green.300',
            }}
            _active={{
              bg: 'green.300',
            }}
            rightIcon={<CopyIcon />}
          >
            Share!
          </Button>
          <Countdown />
          <Text textAlign="center" mt={4}>
            <NextLink href="/" passHref>
              <Link textDecor="underline">Can&apos;t wait? Click here to try other Geodles!</Link>
            </NextLink>
          </Text>
        </>
      )}
    </Container>
  );
};

export default React.memo(Geodle);

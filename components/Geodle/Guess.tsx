import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Center, HStack, Progress, Text } from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import GuessType from 'models/guess';
import Location from 'models/location';
import React, { useEffect, useState } from 'react';

interface Props {
  submitGuess: (value: string) => void;
  active: boolean;
  guess?: GuessType;
  locations: Location[];
  index: number;
}

// eslint-disable-next-line react/display-name
const Guess = React.forwardRef<HTMLInputElement, Props>(
  ({ submitGuess, active, guess, locations, index }, ref) => {
    const [value, setValue] = useState('');

    useEffect(() => {
      if (guess) {
        setValue(guess.location.name);
      }
    }, [guess]);

    return (
      <Box w="full" pos="relative">
        <AutoComplete onChange={(value) => submitGuess(value)}>
          <AutoCompleteInput
            variant="filled"
            placeholder={`Guess ${index + 1}`}
            ref={ref}
            disabled={!active || guess?.isCorrect}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
          />
          <AutoCompleteList>
            {locations.map((mrt) => (
              <AutoCompleteItem
                key={`option-${mrt.id}`}
                value={mrt.name}
                textTransform="capitalize"
              >
                {mrt.name}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
        {guess && (
          <Box pos="absolute" top={0} left={0} right={0} bottom={0}>
            <Progress value={guess.score} height="100%" colorScheme="green" opacity={0.5} />
            <HStack pos="absolute" top={0} left={0} right={0} bottom={0} justifyContent="flex-end">
              {!guess.isCorrect && (
                <>
                  <Text>{guess.distance.toFixed(2)} km</Text>
                  <Center flex="0 0 28px">
                    <ArrowUpIcon
                      w={6}
                      h={6}
                      transform={`rotate(${guess.bearing}deg)`}
                      transformOrigin="center center"
                    />
                  </Center>
                </>
              )}
              {guess.isCorrect && <Text pr={6}>🎉</Text>}
            </HStack>
          </Box>
        )}
      </Box>
    );
  },
);

export default Guess;

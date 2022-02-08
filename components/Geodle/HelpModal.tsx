import {
  Box,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import Guess from 'components/Geodle/Guess';
import React, { FC } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>How to play</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <VStack alignItems="flex-start">
            <Text>Guess the daily location in 6 tries.</Text>
            <Text>Each guess must be from the options given.</Text>
            <Text>
              After each guess, the distance and direction towards the daily location will be shown
            </Text>
            <Box w="full" borderTop="1px solid black" />
            <Text fontWeight="bold">Example</Text>
            <Guess
              submitGuess={() => null}
              active={false}
              guess={{
                location: {
                  id: 0,
                  name: 'Ang Mo Kio',
                  coordinates: [0, 0],
                },
                bearing: 97.5479,
                distance: 11.82,
                score: 67,
                isCorrect: false,
              }}
              locations={[]}
              index={0}
            />
            <Text>The daily location is 11.82 km away and to the East of Ang Mo Kio</Text>
            <Box w="full" borderTop="1px solid black" />
            <Text fontWeight="bold">Credits</Text>
            <Text>
              Inspired by{' '}
              <Link
                href="https://www.powerlanguage.co.uk/wordle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wordle
              </Link>{' '}
              and{' '}
              <Link href="https://worldle.teuteuf.fr/" target="_blank" rel="noopener noreferrer">
                Worldle
              </Link>
              .<br />
              MRT and LRT station data from{' '}
              <Link
                href="https://github.com/cheeaun/railrouter-sg"
                target="_blank"
                rel="noopener noreferrer"
              >
                RailRouter SG
              </Link>
              .
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HelpModal;

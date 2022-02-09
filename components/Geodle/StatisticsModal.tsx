import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  Link,
} from '@chakra-ui/react';
import Countdown from 'components/Geodle/Countdown';
import Statistics from 'models/statistics';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';
import { getStatistics } from 'utils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const StatisticsModal: FC<Props> = ({ isOpen, onClose, title }) => {
  const [stats, setStats] = useState<Statistics>({
    played: 0,
    win: 0,
    streak: 0,
    maxStreak: 0,
  });

  useEffect(() => {
    if (isOpen) {
      const statsString = localStorage.getItem(getStatistics(title));
      const newStats = statsString
        ? (JSON.parse(statsString) as Statistics)
        : {
            played: 0,
            win: 0,
            streak: 0,
            maxStreak: 0,
          };
      setStats(newStats);
    }
  }, [isOpen, title]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Statistics</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <VStack spacing={8}>
            <HStack alignItems="flex-start">
              <Stat>
                <StatNumber textAlign="center">{stats.played}</StatNumber>
                <StatLabel textAlign="center">Played</StatLabel>
              </Stat>
              <Stat>
                <StatNumber textAlign="center">
                  {stats.played > 0 ? Math.floor((stats.win / stats.played) * 100) : 0}
                </StatNumber>
                <StatLabel textAlign="center">Win %</StatLabel>
              </Stat>
              <Stat>
                <StatNumber textAlign="center">{stats.streak}</StatNumber>
                <StatLabel textAlign="center">Current Streak</StatLabel>
              </Stat>
              <Stat>
                <StatNumber textAlign="center">{stats.maxStreak}</StatNumber>
                <StatLabel textAlign="center">Max Streak</StatLabel>
              </Stat>
            </HStack>
            <Countdown />
            <Link href="https://www.buymeacoffee.com/gpng" isExternal>
              <Image
                src="/static/images/coffee.png"
                alt="Buy Me A Coffee"
                width={145}
                height={40}
              />
            </Link>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StatisticsModal;

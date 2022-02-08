import { Icon, QuestionIcon } from '@chakra-ui/icons';
import { Center, Heading, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import HelpModal from 'components/Geodle/HelpModal';
import StatisticsModal from 'components/Geodle/StatisticsModal';
import React, { FC } from 'react';
import { MdLeaderboard } from 'react-icons/md';

interface Props {
  title?: string;
}

const Header: FC<Props> = ({ title }) => {
  const { isOpen: isOpenHelp, onOpen: onOpenHelp, onClose: onCloseHelp } = useDisclosure();
  const {
    isOpen: isOpenStatistics,
    onOpen: onOpenStatistics,
    onClose: onCloseStatistics,
  } = useDisclosure();

  return (
    <HStack
      as="header"
      borderBottom="1px solid black"
      py={2}
      pos="relative"
      justifyContent="space-between"
    >
      <IconButton icon={<QuestionIcon />} aria-label="help" variant="ghost" onClick={onOpenHelp} />
      <HStack spacing={0}>
        {title && (
          <IconButton
            icon={<Icon as={MdLeaderboard} />}
            aria-label="history"
            variant="ghost"
            onClick={onOpenStatistics}
          />
        )}
        {/* <IconButton icon={<SettingsIcon />} aria-label="settings" variant="ghost" /> */}
      </HStack>
      <Center w="full" pos="absolute" top={0} left={0} py={2} pointerEvents="none">
        <Heading as="h1" textAlign="center">
          GEODLE
        </Heading>
      </Center>
      <HelpModal isOpen={isOpenHelp} onClose={onCloseHelp} />
      {title && (
        <StatisticsModal isOpen={isOpenStatistics} onClose={onCloseStatistics} title={title} />
      )}
    </HStack>
  );
};

export default Header;

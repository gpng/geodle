import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { Duration, intervalToDuration, startOfTomorrow } from 'date-fns';
import React, { FC, useEffect, useState } from 'react';

const StatisticsModal: FC = () => {
  const [countDown, setCountdown] = useState<Duration>();

  useEffect(() => {
    const getCountdown = (): void => {
      const tomorrow = startOfTomorrow();
      setCountdown(
        intervalToDuration({
          start: new Date(),
          end: tomorrow,
        }),
      );
    };

    getCountdown();
    const interval = setInterval(getCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stat>
      <StatLabel textAlign="center">Next Daily Location</StatLabel>
      <StatNumber textAlign="center">
        {countDown?.hours?.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        }) || '00'}
        :
        {countDown?.minutes?.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        }) || '00'}
        :
        {countDown?.seconds?.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
        }) || '00'}
      </StatNumber>
    </Stat>
  );
};

export default StatisticsModal;

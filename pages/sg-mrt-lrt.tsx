import Geodle from 'components/Geodle/Geodle';
import MRTs from 'constants/mrt';
import { parseISO } from 'date-fns';
import React, { FC } from 'react';

const SgMrtLrt: FC = () => {
  return (
    <Geodle
      locations={MRTs}
      title="Singapore MRT & LRT Stations"
      description="How familiar are you with Singapore MRT & LRT stations?"
      maxGuesses={6}
      startDate={parseISO('2022-02-08')}
    />
  );
};

export default SgMrtLrt;

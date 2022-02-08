import Geodle from 'components/Geodle/Geodle';
import MRTs, { LRT_NAMES } from 'constants/mrt';
import { parseISO } from 'date-fns';
import React, { FC } from 'react';

const SgMrtLrt: FC = () => {
  return (
    <Geodle
      locations={MRTs.filter((x) => !LRT_NAMES.includes(x.name))}
      title="Singapore MRT Stations"
      description="How familiar are you with Singapore MRT stations?"
      maxGuesses={6}
      startDate={parseISO('2022-02-08')}
    />
  );
};

export default SgMrtLrt;

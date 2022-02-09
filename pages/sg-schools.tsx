import Geodle from 'components/Geodle/Geodle';
import SCHOOLS from 'constants/schools';
import { parseISO } from 'date-fns';
import React, { FC } from 'react';

const SgSchools: FC = () => {
  return (
    <Geodle
      locations={SCHOOLS}
      title="Singapore Schools"
      description="How familiar are you with Singapore Schools?"
      maxGuesses={6}
      startDate={parseISO('2022-02-09')}
    />
  );
};

export default SgSchools;

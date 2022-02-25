import Geodle from 'components/Geodle/Geodle';
import { PARKS } from 'constants/parks';
import { parseISO } from 'date-fns';
import React, { FC } from 'react';

const SgSchools: FC = () => {
  return (
    <Geodle
      locations={PARKS}
      title="Singapore Parks"
      description="How familiar are you with Singapore Parks?"
      maxGuesses={6}
      startDate={parseISO('2022-02-25')}
    />
  );
};

export default SgSchools;

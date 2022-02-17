import Geodle from 'components/Geodle/Geodle';
import SHOPPING_MALLS from 'constants/shoping-malls';
import { parseISO } from 'date-fns';
import React, { FC } from 'react';

const SgShoppingMalls: FC = () => {
  return (
    <Geodle
      locations={SHOPPING_MALLS}
      title="Singapore Shopping Malls"
      description="How familiar are you with Singapore Shopping Malls?"
      maxGuesses={6}
      startDate={parseISO('2022-02-09')}
      message="Today's (17 Feb) answer location was inaccurate, corrected at 10am."
    />
  );
};

export default SgShoppingMalls;

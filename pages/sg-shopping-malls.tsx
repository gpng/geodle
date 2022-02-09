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
      message="Daily location was changed between 10 Feb 000h to 0010h as the mall closed down."
    />
  );
};

export default SgShoppingMalls;

import React from 'react';

import Text from '../../components/Text/Text';
import classes from './portfolio.module.scss';

const Portfolio = () => {
  const { portfolio } = classes;

  return (
    <div className={portfolio}>
      <Text
        size="md"
        display="inline-block"
        family="fontSF"
        color="navy"
        weight="bold"
        width="fit-content"
        margin="1%"
      >
        02.
      </Text>
      <Text
        size="lg"
        display="inline-block"
        family="fontCalibre"
        color="defaultColor"
        weight="bold"
        width="fit-content"
      >
        Some things from me
      </Text>
    </div>
  );
};

export default Portfolio;

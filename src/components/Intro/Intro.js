import React from 'react';

import styles from './intro.module.scss';
import Text from '../Text/Text';

const Intro = () => {
  const { intro } = styles;
  return (
    <div className={intro}>
      <Text size="md" color="navy">
        Hi, my name is
      </Text>
      <Text size="extra-lg" margin='3% 0' family='fontCalibre'>
        Roman Lebedenko
      </Text>
      <Text size="extra-lg" margin='3% 0' family='fontCalibre'>
        I create web applications
      </Text>
    </div>
  );
}

export default Intro;

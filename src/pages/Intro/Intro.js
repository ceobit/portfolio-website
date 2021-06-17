import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './intro.module.scss';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import { mailto } from '../../aux/config';

const Intro = () => {
  const { intro, intro_anim } = styles;

  const mailTo = (e) => {
    window.location = mailto;
    e.preventDefault();
  };

  return (
    <CSSTransition className={intro_anim} timeout={1000} in={true}>
      <div className={intro}>
        <Text size="md" color="navy">
          Hi, my name is
        </Text>
        <Text size="extra-lg" margin="4% 0" family="fontCalibre" weight="bold">
          Roman Lebedenko.
        </Text>
        <Text size="extra-lg" margin="4% 0" family="fontCalibre" color="grey" weight="bold">
          I create web applications.
        </Text>
        <Text size="md" margin="5% 0" width="50%" family="fontCalibre" color="grey">
          I'm a full-stack developer based in Hamburg. Goal oriented enthusiast with a can-do
          attitude and creative thinking.
        </Text>
        <Button title="Get in touch" size="lg" handleButton={mailTo} />
      </div>
    </CSSTransition>
  );
};

export default Intro;

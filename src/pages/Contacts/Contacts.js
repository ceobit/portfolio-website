import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Text from '../../components/Text/Text';
import classes from './contacts.module.scss';
import Button from '../../components/Button/Button';
import { mailto } from '../../aux/config';

const Contacts = () => {
  const { contacts } = classes;

  const mailTo = (e) => {
    window.location = mailto;
    e.preventDefault();
  };

  return (
    <CSSTransition className={contacts} timeout={1000} in={true}>
      <div className={contacts}>
        <Text
          size="md"
          display="inline-block"
          family="fontSF"
          color="navy"
          weight="bold"
          width="fit-content"
          margin="1%"
        >
          04.
        </Text>
        <Text
          size="lg"
          display="inline-block"
          family="fontCalibre"
          color="defaultColor"
          weight="bold"
          width="fit-content"
        >
          Are you interested?
        </Text>
        <Text size="extra-lg" margin="4% 0" family="fontCalibre" weight="bold">
          Connect With me.
        </Text>
        <Text size="md" margin="5% 0" width="50%" family="fontCalibre" color="grey">
          I am currently looking for new opportunities. If you have any positions or questions just
          let me know.
        </Text>
        <Button title="Get in touch" size="lg" handleButton={mailTo} />
      </div>
    </CSSTransition>
  );
};

export default Contacts;

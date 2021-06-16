import React from 'react';

import Text from '../../components/Text/Text';
import classes from './about.module.scss';

const About = () => {
  const { about } = classes;

  return (
    <div className={about}>
      <Text
        size="md"
        display="inline-block"
        family="fontSF"
        color="navy"
        weight="bold"
        width="fit-content"
        margin="1%"
      >
        01.
      </Text>
      <Text
        size="lg"
        display="inline-block"
        family="fontCalibre"
        color="defaultColor"
        weight="bold"
        width="fit-content"
      >
        About Me
      </Text>
      <Text size="md" margin="3% 0" width="50%" family="fontCalibre" color="grey">
        Originally, I am from Russia. Before moving to Germany, I had already worked as a software
        engineer for about 10 years and web development was a hobby of mine. For the last two years,
        I have really focused on Web development.
      </Text>
      <Text size="md" margin="3% 0" width="50%" family="fontCalibre" color="grey">
        A self-motivated Web developer with Bachelor’s degree in Computer Science with skills and
        ability in writing clean and efficient code.
      </Text>
      <Text size="md" margin="0" width="50%" family="fontCalibre" color="grey">
        Here are a few technologies I've been working with recently:
      </Text>
    </div>
  );
};

export default About;

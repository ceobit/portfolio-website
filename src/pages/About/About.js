import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Text from '../../components/Text/Text';
import classes from './about.module.scss';
import { techology } from '../../aux/config';
import Photo from '../../assets/images/photo.png';

const About = () => {
  const { about, about_text, about_list, about_list_item, about_photo, about_img } = classes;

  return (
    <CSSTransition className={about} timeout={300} in={true}>
      <div className={about}>
        <div className={about_text}>
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
            About Me
          </Text>
          <Text size="md" margin="3% 0" family="fontCalibre" color="grey">
            Originally, I am from Russia. Before moving to Germany, I had already worked as a
            software engineer for about 10 years and web development was a hobby of mine. For the
            last two years, I have really focused on Web development.
          </Text>
          <Text size="md" margin="3% 0" family="fontCalibre" color="grey">
            A self-motivated Web developer with Bachelor’s degree in Computer Science with skills
            and ability in writing clean and efficient code.
          </Text>
          <Text size="md" margin="0" family="fontCalibre" color="grey">
            Here are a few technologies I've been working with recently:
          </Text>
          <ul className={about_list}>
            {techology.map(({ name }, i) => (
              <li className={about_list_item} key={i}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className={about_photo}>
          <div className={about_img} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default About;

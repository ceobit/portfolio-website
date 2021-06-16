import React from 'react';

import Text from '../Text/Text';
import classes from './project-description.module.scss';

const ProjectDescription = () => {
  const {description, text_block } = classes;

  return (
    <div className={description}>
      <Text size="sm" color="navy">
        Featured Project
      </Text>
      <Text size="md" margin="1% 0" family="fontCalibre" weight="bold">
        The movie library.
      </Text>
      <div className={text_block}>
        <Text size="sm" family='fontCalibre'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eaque, explicabo
          laborum maiores molestiae officiis perspiciatis porro rerum saepe, tempore veritatis? Autem
          cupiditate doloremque eum minus veniam. Mollitia, officiis.
        </Text>
      </div>
      <Text size="extra-sm" margin="2% 0" weight="bold" color='grey'>
        Vanilla JS, SCSS, HTML
      </Text>
    </div>
  );
};

export default ProjectDescription;

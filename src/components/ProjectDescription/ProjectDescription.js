import React from 'react';
import classNames from 'classnames';

import Text from '../Text/Text';
import classes from './project-description.module.scss';
import Icon from '../Icon/Icon';

const ProjectDescription = ({ name, stack, children, align, link }) => {
  const { description, text_block, description_links, description_social } = classes;

  const descriptionClass = classNames(description, classes[`description_${align}`]);

  const textBlockClass = classNames(text_block, classes[`text_block_${align}`]);

  return (
    <div className={descriptionClass}>
      <Text size="sm" color="navy">
        Featured Project
      </Text>
      <Text size="md" margin="1% 0" family="fontCalibre" weight="bold">
        {name}
      </Text>
      <div className={textBlockClass}>
        <Text size="sm" family="fontCalibre">
          {children}
        </Text>
      </div>
      <div className={description_links}>
        <Text size="extra-sm" margin="0" weight="bold" color="grey">
          {stack}
        </Text>
        <a className={description_social} href={link} target="_blank">
          <Icon name="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default ProjectDescription;

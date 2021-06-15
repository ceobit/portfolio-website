import React from 'react';
import classNames from 'classnames';

import classes from './text.module.scss';

const Text = ({ size, color, family, children, ...props }) => {

  const styles = {
    margin: props.margin
  }

  size = size || 'sm';
  family = family || 'fontSF';
  color = color || 'defaultColor';

  const textClass = classNames(classes.text, classes[`text_${size}`], classes[`text_${color}`], classes[`text_${family}`]);

  return (
    <div style={styles}>
      <p className={textClass}>{children}</p>
    </div>
  );
};

export default Text;

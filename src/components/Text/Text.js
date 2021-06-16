import React from 'react';
import classNames from 'classnames';

import classes from './text.module.scss';

const Text = ({ size, color, family, weight, children, ...props }) => {
  const width = props.width || '100%';
  const display = props.display || 'block';

  const styles = {
    display: display,
    width: width,
    margin: props.margin,
  };

  size = size || 'sm';
  weight = weight || 'regular';
  family = family || 'fontSF';
  color = color || 'defaultColor';

  const textClass = classNames(
    classes.text,
    classes[`text_${size}`],
    classes[`text_${color}`],
    classes[`text_${family}`],
    classes[`text_${weight}`],
  );

  return (
    <div style={styles}>
      <p className={textClass}>{children}</p>
    </div>
  );
};

export default Text;

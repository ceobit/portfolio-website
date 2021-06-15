import React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

const Button = ({ title, size, handleButton }) => {
  size = size || 'sm';
  const btnClass = classNames(styles.button, styles[`button_${size}`]);

  return (
    <button className={btnClass} onClick={handleButton}>
      {title}
    </button>
  );
};

export default Button;

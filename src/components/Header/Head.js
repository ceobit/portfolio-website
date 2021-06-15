import React from 'react';
import Logo from '@assets/images/logo.png';

import classes from './head.module.scss';

const Head = () => {
  const { head, head_logo } = classes;
  return (
    <div className={head}>
      <img className={head_logo} src={Logo} alt="logo" />
      <></>
    </div>
  );
};

export default Head;

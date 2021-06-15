import React from 'react';

import Logo from '@assets/images/logo.png';
import classes from './loader.module.scss';

const Loader = () => {
  const { loader, loader_position } = classes;

  return (
    <div className={loader_position}>
      <img src={Logo} alt="logo" className={loader} />
    </div>
  );
};

export default Loader;

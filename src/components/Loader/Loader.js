import React from 'react';

import Logo from '@assets/images/logo.png';
import classes from './loader.module.scss';

const Loader = () => {
  const { loader } = classes;

  return <img className={loader} src={Logo} alt="logo" />;
};

export default Loader;

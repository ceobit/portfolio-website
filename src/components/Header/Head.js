import React from 'react';

import Logo from '@assets/images/logo.png';
import menuItems from '@aux/menuItems';

import classes from './head.module.scss';
import Button from '../Button/Button';

const Head = () => {
  const { head, head_logo, head_list, head_list_number, head_item, head_nav } = classes;
  return (
    <div className={head}>
      <img className={head_logo} src={Logo} alt="logo" />
      <div className={head_nav}>
        <ul className={head_list}>
          {menuItems.map(({ name, id }) => (
            <li key={id} className={head_item}>
              <span className={head_list_number}>{`${id}. `}</span>
              {name}
            </li>
          ))}
        </ul>
        <Button title="Resume" size="sm" />
      </div>
    </div>
  );
};

export default Head;

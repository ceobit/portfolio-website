import React from 'react';

import classes from './mobileMenu.module.scss';
import { history } from '../../history';
import { pages as menuItems } from '@aux/config';

const MobileMenu = ({ closeMobileMenu }) => {
  const { mobileMenu, mobileMenu_list, mobileMenu_item, mobileMenu_list_number } = classes;
  return (
    <div className={mobileMenu}>
      <ul className={mobileMenu_list}>
        {menuItems.map(({ name, id }) => (
          <li
            key={id}
            className={mobileMenu_item}
            onClick={() => {
              history.push(`/${name}`);
              closeMobileMenu();
            }}
          >
            <span className={mobileMenu_list_number}>{`${id}. `}</span>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;

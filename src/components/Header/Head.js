import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Logo from '@assets/images/logo.png';
import { pages as menuItems } from '@aux/config';

import classes from './head.module.scss';
import Button from '../Button/Button';
import { history } from '../../history';

const Head = () => {
  const { head, head_logo, head_list, head_list_number, head_item, head_nav, head_anim } = classes;

  return (
    <CSSTransition className={head_anim} timeout={300} in={true}>
      <div className={head}>
        <img className={head_logo} src={Logo} alt="logo" />
        <div className={head_nav}>
          <ul className={head_list}>
            {menuItems.map(({ name, id }) => (
              <li key={id} className={head_item} onClick={()=>history.push(`/${name}`)}>
                <span className={head_list_number}>{`${id}. `}</span>
                {name}
              </li>
            ))}
          </ul>
          <Button title="Resume" size="sm" />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Head;

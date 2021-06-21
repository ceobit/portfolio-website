import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import Logo from '@assets/images/logo.png';
import Burger from '@assets/images/burger.svg';
import Close from '@assets/images/close.svg';
import { pages as menuItems } from '@aux/config';

import classes from './head.module.scss';
import Button from '../Button/Button';
import MobileMenu from '../MobileMenu/MobileMenu';
import { history } from '../../history';

const Head = () => {
  const [showMobile, setShowMobile] = useState(false);

  const {
    head,
    head_logo,
    head_list,
    head_list_number,
    head_item,
    head_nav,
    head_anim,
    head_burger,
  } = classes;

  const openResume = () => {
    window.open('https://www.dropbox.com/s/cazioza3kpvlxte/Roman%20Lebedenko_cv.pdf?dl=0');
  };

  const showMobileMenu = () => {
    setShowMobile(!showMobile);
  };

  const closeMobileMenu = () => {
    setShowMobile(false);
  };

  return (
    <CSSTransition className={head_anim} timeout={300} in={true}>
      <div className={head}>
        <img className={head_logo} src={Logo} alt="logo" />
        {!showMobile ? (
          <>
            <div className={head_nav}>
              <ul className={head_list}>
                {menuItems.map(({ name, id }) => (
                  <li key={id} className={head_item} onClick={() => history.push(`/${name}`)}>
                    <span className={head_list_number}>{`${id}. `}</span>
                    {name}
                  </li>
                ))}
              </ul>
              <Button title="Resume" size="sm" handleButton={openResume} />
            </div>
          </>
        ) : (
          <MobileMenu closeMobileMenu={closeMobileMenu}/>
        )}
        <img className={head_burger} src={!showMobile ? Burger : Close} onClick={showMobileMenu} alt="burger" />
      </div>
    </CSSTransition>
  );
};

export default Head;

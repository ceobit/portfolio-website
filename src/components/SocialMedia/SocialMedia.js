import React, { useEffect, useState } from 'react';

import { socialMedia } from '../../aux/config';
import classes from './socialMedia.module.scss';
import Icon from '../Icon/Icon';
import { CSSTransition } from 'react-transition-group';

const SocialMedia = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(true), 2000);

    return () => clearTimeout(timeout);
  }, []);

  const { social, social_item, social_anim } = classes;

  return (
    <>
      {isLoading ? (
        <CSSTransition className={social} timeout={1000} in={true}>
          <ul>
            {socialMedia.map(({ name, url }, i) => (
              <li key={i} className={social_item}>
                <a
                  className={social_item}
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={name}
                >
                  <Icon name={name} />
                </a>
              </li>
            ))}
          </ul>
        </CSSTransition>
      ) : (
        <></>
      )}
    </>
  );
};

export default SocialMedia;

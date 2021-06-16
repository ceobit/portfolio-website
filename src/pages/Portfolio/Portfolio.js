import React from 'react';

import Text from '../../components/Text/Text';
import classes from './portfolio.module.scss';
import Work_first from '../../assets/images/work1.png';
import Work_second from '../../assets/images/work2.png';
import Work_third from '../../assets/images/work3.png';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import Icon from '../../components/Icon/Icon';
import { CSSTransition } from 'react-transition-group';

const Portfolio = () => {
  const { portfolio, portfolio_img, portfolio_project } = classes;

  return (
    <CSSTransition className={portfolio} timeout={300} in={true}>
      <div className={portfolio}>
        <Text
          size="md"
          display="inline-block"
          family="fontSF"
          color="navy"
          weight="bold"
          width="fit-content"
          margin="1%"
        >
          03.
        </Text>
        <Text
          size="lg"
          display="inline-block"
          family="fontCalibre"
          color="defaultColor"
          weight="bold"
          width="fit-content"
        >
          Some things from me
        </Text>
        <div className={portfolio_project}>
          <img src={Work_first} className={portfolio_img} alt="work" />
          <ProjectDescription
            name="The movie library."
            stack="Vanilla JS, SCSS, HTML"
            align="right"
            link="https://github.com/ceobit/TMDB-movie-library"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eaque,
            explicabo laborum maiores molestiae officiis perspiciatis porro rerum saepe, tempore
            veritatis? Autem cupiditate doloremque eum minus veniam. Mollitia, officiis.
          </ProjectDescription>
        </div>
        <div className={portfolio_project}>
          <ProjectDescription
            name="Work Time Tracker"
            stack="React JS, Redux, materialUI, Node JS, MongoDB"
            align="left"
            link="https://github.com/ceobit/Work-Time-tracking"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eaque,
            explicabo laborum maiores molestiae officiis perspiciatis porro rerum saepe, tempore
            veritatis? Autem cupiditate doloremque eum minus veniam. Mollitia, officiis.
          </ProjectDescription>
          <img src={Work_second} className={portfolio_img} alt="work" />
        </div>
        <div className={portfolio_project}>
          <img src={Work_third} className={portfolio_img} alt="work" />
          <ProjectDescription
            name="Youtube Clone"
            stack="Vanilla JS, SCSS, HTML"
            align="right"
            link="https://github.com/ceobit/instagram-clone"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eaque,
            explicabo laborum maiores molestiae officiis perspiciatis porro rerum saepe, tempore
            veritatis? Autem cupiditate doloremque eum minus veniam. Mollitia, officiis.
          </ProjectDescription>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Portfolio;

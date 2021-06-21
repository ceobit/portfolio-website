import React from 'react';

import Text from '../../components/Text/Text';
import classes from './portfolio.module.scss';
import Work_first from '../../assets/images/work1.png';
import Work_second from '../../assets/images/work2.png';
import Work_third from '../../assets/images/work3.png';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';
import { CSSTransition } from 'react-transition-group';

const Portfolio = () => {
  const { portfolio, portfolio_img, portfolio_project, portfolio_project_position } = classes;

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
            This is a web application for searching movies. It uses the TMDB API.
            Using this application you can search for movies by title, save your favorite movies to a selection,
            as well as put a personal rating.
            This is the first group project during the Digital Career Institute.
          </ProjectDescription>
        </div>
        <div className={portfolio_project}>
          <ProjectDescription
            name="Work Time Tracker"
            stack="React JS, Redux, materialUI, Node JS, MongoDB"
            align="left"
            link="https://github.com/ceobit/Work-Time-tracking"
          >
            This is a fullstack timekeeping application.
            After registration and authorization,
            you can start a timer for the task, summarize the day. Use filters and charts.
            Data is stored in a database.
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
            Youtube clone app.
            I implemented this project while studying at the Digital Career Institute.
            Built to practice responsive layout. Used flex and grid.
          </ProjectDescription>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Portfolio;

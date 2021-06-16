import React from 'react';

import Text from '../../components/Text/Text';
import classes from './portfolio.module.scss';
import Work_first from '../../assets/images/work1.png';
import ProjectDescription from '../../components/ProjectDescription/ProjectDescription';

const Portfolio = () => {
  const { portfolio, portfolio_img, portfolio_project } = classes;

  return (
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
        02.
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
        <ProjectDescription />
      </div>
    </div>
  );
};

export default Portfolio;

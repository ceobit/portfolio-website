import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contacts from './pages/Contacts/Contacts';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/Home" exact component={Intro} />
      <Route path="/About" component={About} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contacts" component={Contacts} />
    </Switch>
  );
};

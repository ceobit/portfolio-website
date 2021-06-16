import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

import { useRoutes } from './routes';
import { history } from './history';
import Head from './components/Header/Head';
import Intro from './pages/Intro/Intro';
import Loader from './components/Loader/Loader';
import SocialMedia from './components/SocialMedia/SocialMedia';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const routes = useRoutes();

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 6000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
      <>
        <Head />
        <Router history={history}>{routes}</Router>
        <SocialMedia />
      </>
      )}
    </>
  );
}
export default App;

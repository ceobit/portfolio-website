import React, { useState, useEffect } from 'react';

import Head from './components/Header/Head';
import Intro from './components/Intro/Intro';
import Loader from './components/Loader/Loader';
import SocialMedia from './components/SocialMedia/SocialMedia';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
          <Intro />
          <SocialMedia/>
        </>
      )}
    </>
  );
}
export default App;

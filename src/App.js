import './App.scss';
import Head from '@components/Header/Head';
import Intro from '@components/Intro/Intro';
import Loader from '@components/Loader/Loader';

function App() {
  return (
    <>
      <Loader/>
      <Head />
      <Intro />
    </>
  );
}

export default App;

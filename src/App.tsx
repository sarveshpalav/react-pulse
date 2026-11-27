import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Components from './concepts/Components';
import About from './components/About';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState<'main' | 'components' | 'about'>('main');

  return (
    <>
      <Header
        onHome={() => setActivePage('main')}
        onAbout={() => setActivePage('about')}
      />
      {activePage === 'main' ? (
        <Main onLearnMore={() => setActivePage('components')} />
      ) : activePage === 'about' ? (
        <About />
      ) : (
        <Components onBack={() => setActivePage('main')} />
      )}
    </>
  );
};

export default App;
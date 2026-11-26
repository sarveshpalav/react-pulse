import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Components from './concepts/components';

const App = () => {
  const [activePage, setActivePage] = useState<'main' | 'components'>('main');

  return (
    <>
      <Header />
      {activePage === 'main' ? (
        <Main onLearnMore={() => setActivePage('components')} />
      ) : (
        <Components onBack={() => setActivePage('main')} />
      )}
    </>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useScrollPosition } from 'shared/hooks';

import './App.css';
import { AppContainer } from './styles';

import { SearchBar } from 'components';
import Routes from 'routes';

import { Pokemons } from 'store';

declare global {
  interface Window {
    p: typeof Pokemons;
  }
}

window.p = Pokemons;

function App() {
  const [moveUpOnScroll, setMoveUpOnScroll] = useState(true);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      window.p.loadCollection();
      setInit(true);
    }
  }, [init]);

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      const display = currPos.y > prevPos.y || currPos.y > 5;
      if (display !== moveUpOnScroll) setMoveUpOnScroll(display);
    },
    [moveUpOnScroll],
  );

  return (
    <Router>
      <SearchBar />
      <AppContainer {...{ moveUpOnScroll }}>
        <Routes />
      </AppContainer>
    </Router>
  );
}

export default observer(App);

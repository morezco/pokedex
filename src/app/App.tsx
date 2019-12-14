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
    p: any;
  }
}

window.p = Pokemons;

function App() {
  const [navStyle, setNavStyle] = useState(null);
  const [scrollEffects, setScrollEffects] = useState(true);
  const [init, setInit] = useState(false);

  useScrollPosition(
    ({ currPos }: any) => {
      const display = currPos.y > -50;
      if (display !== scrollEffects) setScrollEffects(display);
    },
    [scrollEffects],
  );

  useEffect(() => {
    if (!init) {
      Pokemons.loadCollection();
      setInit(true);
    }
  }, [init]);

  return (
    <Router>
      <SearchBar {...{ scrollEffects, styling: navStyle }} />
      <AppContainer>
        <Routes {...{ scrollEffects, setNavStyle }} />
      </AppContainer>
    </Router>
  );
}

export default observer(App);

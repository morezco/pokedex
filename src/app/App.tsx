import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useScrollPosition } from 'shared/hooks';

import './App.css';
import { AppContainer } from './styles';

import { SearchBar } from 'components';
import Routes from 'routes';

import { Pokemons } from 'store';

function App() {
  const [minimiseNav, setMinimiseNav] = useState(false);
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
      <SearchBar {...{ scrollEffects, minimiseNav }} />
      <AppContainer>
        <Routes {...{ scrollEffects, setMinimiseNav }} />
      </AppContainer>
    </Router>
  );
}

export default observer(App);

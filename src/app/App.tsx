import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useScrollPosition } from 'shared/hooks';

import './App.css';
import { AppContainer } from './styles';

import { SearchBar } from 'components';
import Routes from 'routes';

function App() {
  const [minimiseNav, setMinimiseNav] = useState(false);
  const [scrollEffects, setScrollEffects] = useState(true);

  useScrollPosition(
    ({ currPos }: any) => {
      setScrollEffects(currPos.y > -50 !== scrollEffects);
    },
    [scrollEffects],
  );

  return (
    <Router>
      <SearchBar {...{ scrollEffects, minimiseNav }} />
      <AppContainer data-testid='AppContainer'>
        <Routes {...{ scrollEffects, setMinimiseNav }} />
      </AppContainer>
    </Router>
  );
}

export default observer(App);

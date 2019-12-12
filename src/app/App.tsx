import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useScrollPosition } from 'shared/hooks';

import './App.css';
import { AppContainer } from './styles';

import { Navbar } from 'components';
import Routes from 'routes';

function App() {
  const [moveUpOnScroll, setMoveUpOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      const display = currPos.y > prevPos.y || currPos.y > 5;
      if (display !== moveUpOnScroll) setMoveUpOnScroll(display);
    },
    [moveUpOnScroll],
  );

  return (
    <Router>
      <Navbar />
      <AppContainer {...{ moveUpOnScroll }}>
        <Routes />
      </AppContainer>
    </Router>
  );
}

export default observer(App);

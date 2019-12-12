import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';

import './App.css';
import { AppContainer } from './styles';

import { Navbar } from 'components';
import Routes from 'routes';

function App() {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Routes />
      </AppContainer>
    </Router>
  );
}

export default observer(App);

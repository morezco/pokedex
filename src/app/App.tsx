import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppContainer } from './styles';
import './App.css';

import { Navbar } from 'components';

function App() {
  return (
    <AppContainer data-testid='app'>
      <Router>
        <Navbar />
      </Router>
    </AppContainer>
  );
}

export default App;

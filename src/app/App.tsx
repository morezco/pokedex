import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AppContainer } from './styles';
import './App.css';

import API from 'api';

import Views from 'views';
import { Navbar } from 'components';

declare global {
  interface Window {
    api: any;
  }
}

window.api = API;

function App() {
  return (
    <AppContainer data-testid='app'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' render={() => <Views.Intro />} />
          <Redirect exact to='/' />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

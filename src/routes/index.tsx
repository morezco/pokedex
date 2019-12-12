import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Views from 'views';

export default () => (
  <Switch>
    <Route exact path='/' render={() => <Views.Intro />} />
    <Redirect exact to='/' />
  </Switch>
);

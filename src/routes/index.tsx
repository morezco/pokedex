import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Views from 'views';

/**
 * Defines the route for every pokemon's detailed profile page.
 * If id is not provided, returns the default '/:id' placeholder for React Router.
 * @param id The PokéAPI Pokemon id
 */
export const pokemonDetail = (id?: string | number): string =>
  `/pokemon/${id || ':id'}`;

/**
 * Defines the route for the intro page.
 */
export const intro = (): string => '/';

export default () => (
  <Switch>
    <Route exact path={intro()} render={() => <Views.Intro />} />
    <Route
      path={pokemonDetail()}
      render={props => <Views.PokemonDetail {...props} />}
    />
    <Redirect exact to={intro()} />
  </Switch>
);

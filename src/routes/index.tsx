import React from 'react';
import { LayoutProps } from 'shared/constants';

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

export default (layoutProps: LayoutProps) => (
  <Switch>
    <Route
      exact
      path={intro()}
      render={() => <Views.Intro {...layoutProps} />}
    />
    <Route
      path={pokemonDetail()}
      render={props => <Views.PokemonDetail {...props} {...layoutProps} />}
    />
    <Redirect exact to={intro()} />
  </Switch>
);

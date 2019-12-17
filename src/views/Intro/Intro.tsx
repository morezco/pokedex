import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { LayoutProps } from 'shared/constants';

import { Section } from 'styles';
import './Intro.css';
import { SearchLayer } from './styles';
import { eevee } from 'assets';

import { Row, List } from 'components';

import { Pokemons } from 'store';

export default observer(function Intro({
  scrollEffects,
  setMinimiseNav,
}: LayoutProps) {
  const hide: string = String(
    Pokemons.results.length ? '-600px 0px 200px 0px' : '100px 0px 0px 0px',
  );

  useEffect(() => {
    setMinimiseNav(false);
  }, [setMinimiseNav]);

  return (
    <Section>
      <Row {...{ margin: hide }}>
        <Row vertical right>
          <h1 data-testid='adimo' className='Title'>
            Intro
          </h1>
          <p>
            The Pokémon series has had eight generational groups of games,
            spanning across nearly three decades and still ongoing. In this
            website, you&#39;ll find a knowledge base for all of your Pokémon
            needs.
          </p>
        </Row>
        <Row vertical>
          <figure>
            <img className='eevee' alt='eevee' src={eevee} />
          </figure>
        </Row>
      </Row>
      <SearchLayer {...{ scrollEffects: !scrollEffects, setMinimiseNav }}>
        {!!Pokemons.results.length && (
          <p data-testid='resultcount'>
            {Pokemons.results.length}
            {Pokemons.results.length === 50 && '+'} results
          </p>
        )}
        {!Pokemons.results.length && Pokemons.lookup && (
          <p data-testid='noresultwarning'>No results</p>
        )}
      </SearchLayer>
      <div data-testid='grid'>
        {Pokemons.lookup && Pokemons.results.length && <List />}
      </div>
    </Section>
  );
});

import React from 'react';
import { observer } from 'mobx-react';

import { Section } from 'styles';
import './Intro.css';
import { SearchLayer } from './styles';
import { eevee } from 'assets';

import { Row, List } from 'components';

import { Pokemons } from 'store';

export default observer(function Intro() {
  const hide: string = Pokemons.results.length ? '-700px 0px 200px 0px' : '0px';

  return (
    <Section>
      <Row {...{ margin: hide }}>
        <Row vertical right>
          <h1 className='Title'>Intro</h1>
          <p>
            The Pokémon series has had eight generational groups of games,
            spanning across nearly three decades and still ongoing. In this
            website, you'll find a knowledge base for all of your Pokémon needs.
          </p>
        </Row>
        <Row vertical>
          <figure>
            <img alt='eevee' src={eevee} />
          </figure>
        </Row>
      </Row>
      <SearchLayer>
        {!!Pokemons.results.length && (
          <p>
            {Pokemons.results.length}
            {Pokemons.results.length === 50 && '+'} results
          </p>
        )}
      </SearchLayer>
      {Pokemons.lookup && <List />}
    </Section>
  );
});

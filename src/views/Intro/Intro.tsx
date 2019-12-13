import React from 'react';
import { observer } from 'mobx-react';

import './Intro.css';
import { Section } from './styles';
import { eevee } from 'assets';

import { Row, Search, List } from 'components';

import { Pokemons } from 'store';

export default observer(function Intro() {
  return (
    <Section>
      <Row>
        <Row vertical right>
          <h1 className='Title'>Intro</h1>
          <p>
            The Pokémon series has had eight generational groups of games,
            spanning across nearly three decades and still ongoing. In this
            website, you'll find a knowledge base for all of your Pokémon needs.
          </p>
          <Search />
          {Pokemons.lookup && <List />}
        </Row>
        <Row vertical>
          <figure>
            <img alt='eevee' src={eevee} />
          </figure>
        </Row>
      </Row>
    </Section>
  );
});

import React from 'react';

import './Intro.css';
import { Section } from './styles';
import { eevee } from 'assets';

import { Row, Search } from 'components';

export default function Intro() {
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
        </Row>
        <Row vertical>
          <figure>
            <img src={eevee} />
          </figure>
        </Row>
      </Row>
    </Section>
  );
}

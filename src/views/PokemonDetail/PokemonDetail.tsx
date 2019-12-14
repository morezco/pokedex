import React, { useState, useEffect } from 'react';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading } from 'components';

export interface PokemonDetailProps {
  match: any;
}

export default function PokemonDetail({ match }: PokemonDetailProps) {
  const [masterLoading, setMasterLoading] = useState(true);
  const { id } = match.params;

  useEffect(() => {
    Pokemons.fetchPokemon(id);
  }, [id]);

  return (
    <Section>
      {masterLoading ? (
        <Row center>
          <Loading width='50px' />
        </Row>
      ) : (
        <h1>{id}</h1>
      )}
    </Section>
  );
}

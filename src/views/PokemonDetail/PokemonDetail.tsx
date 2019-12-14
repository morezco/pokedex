import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { extractId } from 'shared/helpers';
import { spriteURL } from 'shared/constants';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture } from 'components';

export interface PokemonDetailProps {
  match: any;
}

export default observer(function PokemonDetail({ match }: PokemonDetailProps) {
  const { id } = match.params;
  const { pokemon } = Pokemons;

  useEffect(() => {
    Pokemons.fetchPokemon(id);
  }, [id]);

  return (
    <Section>
      {!pokemon ? (
        <Row center>
          <Loading width='50px' />
        </Row>
      ) : (
        <>
          <PokemonPicture name={pokemon.name} />
          <h1>{pokemon.name}</h1>
        </>
      )}
    </Section>
  );
});

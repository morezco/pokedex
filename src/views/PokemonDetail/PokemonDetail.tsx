import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { extractId } from 'shared/helpers';
import { spriteURL, LayoutProps } from 'shared/constants';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture } from 'components';

export interface PokemonDetailProps {
  match: any;
}

export default observer(function PokemonDetail({
  match,
  setNavHeight,
}: PokemonDetailProps & LayoutProps) {
  const { id } = match.params;
  const { pokemon } = Pokemons;

  useEffect(() => {
    setNavHeight('85px');
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
          <Row>
            <Row vertical center>
              <PokemonPicture name={pokemon.name} />
              <h1>{pokemon.name}</h1>
            </Row>
            <Row vertical right>
              <PokemonPicture name={pokemon.name} />
              <h1>{pokemon.name}</h1>
            </Row>
          </Row>
        </>
      )}
    </Section>
  );
});

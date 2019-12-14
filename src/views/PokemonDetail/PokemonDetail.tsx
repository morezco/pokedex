import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { nameLike } from 'shared/helpers';
import { LayoutProps } from 'shared/constants';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture } from 'components';
import Table, { TableProps } from './Table/Table';
import Blob from './Blob/Blob';

export interface PokemonDetailProps {
  match: any;
}

export default observer(function PokemonDetail({
  match,
  setNavHeight,
}: PokemonDetailProps & LayoutProps) {
  const { id } = match.params;
  const { pokemon } = Pokemons;
  console.log(pokemon);

  useEffect(() => {
    setNavHeight('85px');
    Pokemons.fetchPokemon(id);
  }, [id, setNavHeight]);

  const PokedexTable = (pokemon: any): TableProps => ({
    title: 'Pokedéx Data',
    data: [
      { name: 'National no.', value: pokemon.id },
      {
        name: 'Type',
        value: (
          <div>
            {pokemon.types.map((x: any, y: number) => (
              <Blob key={y}>{x.type.name}</Blob>
            ))}
          </div>
        ),
      },
    ],
  });

  return (
    <Section padding={'50px'}>
      {!pokemon ? (
        <Row center>
          <Loading width='50px' />
        </Row>
      ) : (
        <>
          <Row>
            <Row vertical right>
              <PokemonPicture name={pokemon.name} />
              <h1>{nameLike(pokemon.name)}</h1>
            </Row>
            <div style={{ height: '100%', width: '200px' }} />
            <Row vertical>
              <Table {...PokedexTable(pokemon)} />
            </Row>
          </Row>
        </>
      )}
    </Section>
  );
});

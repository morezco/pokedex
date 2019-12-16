import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { nameLike } from 'shared/helpers';
import { LayoutProps } from 'shared/constants';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture } from 'components';
import Table from './Table/Table';

import {
  PokedexTable,
  TrainingTable,
  StatsTable,
  BreedingTable,
  EvolutionaryTable,
  evo,
} from './Table/processing';

export interface PokemonDetailProps {
  match: any;
  history: any;
}

export default observer(function PokemonDetail({
  match,
  setMinimiseNav,
  history,
}: PokemonDetailProps & LayoutProps) {
  const { id } = match.params;
  const { pokemon } = Pokemons;

  useEffect(() => {
    setMinimiseNav(true);
    Pokemons.fetchPokemon(id);
  }, [id, setMinimiseNav]);

  return (
    <Section padding={'50px'}>
      {!pokemon ? (
        <Row center>
          <Loading width='50px' />
        </Row>
      ) : (
        <Row>
          <Row vertical right>
            <PokemonPicture id={pokemon.id} name={pokemon.name} />
            <h1>{nameLike(pokemon.name)}</h1>
            <Table {...PokedexTable(pokemon)} />
            <Table {...TrainingTable(pokemon)} />
          </Row>
          <div style={{ height: '100%', width: '200px' }} />
          <Row vertical>
            <Table {...StatsTable(pokemon)} />
            <Table {...BreedingTable(pokemon)} />
            {evo(pokemon) && <Table {...EvolutionaryTable(pokemon, history)} />}
          </Row>
        </Row>
      )}
    </Section>
  );
});

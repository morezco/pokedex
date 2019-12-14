import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { nameLike } from 'shared/helpers';
import { LayoutProps } from 'shared/constants';
import { Blobs, Pairs, List, Gender, StepCalc, Stats } from './functions';
import { Stat } from './interfaces';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture } from 'components';
import Table, { TableProps } from './Table/Table';

export interface PokemonDetailProps {
  match: any;
}

export default observer(function PokemonDetail({
  match,
  setNavStyle,
}: PokemonDetailProps & LayoutProps) {
  const { id } = match.params;
  const { pokemon } = Pokemons;
  console.log(pokemon);

  useEffect(() => {
    setNavStyle('height: 85px; position: relative;');
    Pokemons.fetchPokemon(id);
  }, [id, setNavStyle]);

  const PokedexTable = (pokemon: any): TableProps => ({
    title: 'Pokedéx Data',
    data: [
      { name: 'National no.', value: pokemon.id },
      { name: 'Type', value: Blobs(pokemon.types) },
      { name: 'Species', value: pokemon.species.name },
      { name: 'Height', value: `${pokemon.height / 10}m` },
      { name: 'Weight', value: `${pokemon.weight / 10}kg` },
      { name: 'Abilities', value: Pairs(pokemon.abilities) },
      pokemon.encounters.length && {
        name: 'Encounters',
        value: List(pokemon.encounters),
      },
    ],
  });

  const TrainingTable = (pokemon: any): TableProps => ({
    title: 'Training',
    data: [
      { name: 'Base experience', value: pokemon.base_experience },
      { name: 'Catch rate', value: pokemon.species.capture_rate },
      { name: 'Growth rate', value: pokemon.growth_rate },
      { name: 'Base friendship', value: pokemon.species.base_happiness },
    ],
  });

  const BreedingTable = (pokemon: any): TableProps => ({
    title: 'Breeding',
    data: [
      { name: 'Egg Groups', value: pokemon.species.egg_groups.join(', ') },
      { name: 'Gender', value: Gender(pokemon.species.gender_rate) },
      { name: 'Egg cycles', value: StepCalc(pokemon.species.hatch_counter) },
    ],
  });

  const StatsTable = (pokemon: any): TableProps => ({
    title: 'Base stats',
    data: pokemon.stats.map((stat: Stat) => ({
      name: stat.name,
      value: Stats(stat.base),
    })),
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
              <Table {...TrainingTable(pokemon)} />
              <Table {...StatsTable(pokemon)} />
            </Row>
            <div style={{ height: '100%', width: '200px' }} />
            <Row vertical>
              <Table {...PokedexTable(pokemon)} />
              <Table {...BreedingTable(pokemon)} />
            </Row>
          </Row>
        </>
      )}
    </Section>
  );
});

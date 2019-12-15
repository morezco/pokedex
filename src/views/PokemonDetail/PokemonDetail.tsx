import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { nameLike, extractId } from 'shared/helpers';
import { LayoutProps, spriteURL } from 'shared/constants';
import Components from './components';
import { Stat } from './interfaces';

import { Section } from 'styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture, PokemonSprite } from 'components';
import Table, { TableProps } from './Table/Table';

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

  const PokedexTable = (pokemon: any): TableProps => ({
    title: 'Pokedéx Data',
    data: [
      { name: 'National no.', value: pokemon.id },
      { name: 'Type', value: <Components.Blob arr={pokemon.types} /> },
      { name: 'Species', value: pokemon.species.name },
      { name: 'Height', value: `${pokemon.height / 10}m` },
      { name: 'Weight', value: `${pokemon.weight / 10}kg` },
      { name: 'Abilities', value: <Components.Pair arr={pokemon.abilities} /> },
      pokemon.encounters.length && {
        name: 'Encounters',
        value: <Components.List arr={pokemon.encounters} />,
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
      {
        name: 'Gender',
        value: <Components.Gender rate={pokemon.species.gender_rate} />,
      },
      {
        name: 'Egg cycles',
        value: <Components.Steps cycles={pokemon.species.hatch_counter} />,
      },
    ],
  });

  const StatsTable = (pokemon: any): TableProps => ({
    title: 'Base stats',
    data: pokemon.stats.map((stat: Stat) => ({
      name: stat.name,
      value: <Components.Stats stat={stat.base} />,
    })),
  });

  const EvolutionaryTable = (pokemon: any): TableProps => ({
    title: 'Possible Evolutions',
    data: pokemon.evolution.evolves_to.map((x: any) => ({
      name: <PokemonSprite url={spriteURL(x.species.url)} />,
      value: <p>{x.species.name}</p>,
      act: () => {
        Pokemons.clearPokemon();
        history.push(`/pokemon/${extractId(x.species.url)}`);
      },
    })),
  });

  const evo = () => pokemon.evolution.evolves_to.length || null;

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
              <Table {...PokedexTable(pokemon)} />
              <Table {...TrainingTable(pokemon)} />
            </Row>
            <div style={{ height: '100%', width: '200px' }} />
            <Row vertical>
              <Table {...StatsTable(pokemon)} />
              <Table {...BreedingTable(pokemon)} />
              {evo() && <Table {...EvolutionaryTable(pokemon)} />}
            </Row>
          </Row>
        </>
      )}
    </Section>
  );
});

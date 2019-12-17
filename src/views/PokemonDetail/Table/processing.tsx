import React from 'react';
import { extractId } from 'shared/helpers';
import { spriteURL } from 'shared/constants';
import { pokemonDetail } from 'routes';

import { Stat } from '../interfaces';
import { TableProps } from './Table';

import { PokemonSprite } from 'components';
import Components from './components';

import { Pokemons } from 'store';

export const PokedexTable = (pokemon: any): TableProps => ({
  title: 'Pokedéx Data',
  data: [
    { name: 'National no.', value: pokemon.id },
    { name: 'Type', value: <Components.Blob arr={pokemon.types} /> },
    { name: 'Species', value: pokemon.species.name },
    { name: 'Height', value: `${pokemon.height / 10}m` },
    { name: 'Weight', value: `${pokemon.weight / 10}kg` },
    { name: 'Abilities', value: <Components.Pair arr={pokemon.abilities} /> },
    pokemon.encounters?.length && {
      name: 'Encounters',
      value: <Components.List arr={pokemon.encounters} />,
    },
  ],
});

export const TrainingTable = (pokemon: any): TableProps => ({
  title: 'Training',
  data: [
    { name: 'Base experience', value: pokemon.base_experience },
    { name: 'Catch rate', value: pokemon.species.capture_rate },
    { name: 'Growth rate', value: pokemon.growth_rate },
    { name: 'Base friendship', value: pokemon.species.base_happiness },
  ],
});

export const BreedingTable = (pokemon: any): TableProps => ({
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

export const StatsTable = (pokemon: any): TableProps => ({
  title: 'Base stats',
  data: pokemon.stats.map((stat: Stat) => ({
    name: stat.name,
    value: <Components.Stats stat={stat.base} />,
  })),
});

export const EvolutionaryTable = (pokemon: any, history: any): TableProps => ({
  title: 'Possible Evolutions',
  data: pokemon.evolution.evolves_to.map((x: any) => ({
    name: <PokemonSprite url={spriteURL(x.species.url)} />,
    value: <p>{x.species.name}</p>,
    act: () => {
      Pokemons.clearPokemon();
      history.push(pokemonDetail(extractId(x.species.url)));
    },
  })),
});

export const evo = (pokemon: any) =>
  pokemon.evolution?.evolves_to?.length || null;

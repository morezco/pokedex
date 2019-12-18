import { TESTING } from 'shared/constants';
import { extractId } from 'shared/helpers';
import api from 'api';

import pokemons from 'tests/mocks/pokemonsCollection.json';
import pokemon from 'tests/mocks/ditto.json';

import {
  reduceAbilities,
  reduceStats,
  reorganiseSpecies,
  recursivelySortEvolutionaryData,
  reduceEncounters,
} from './processing';

declare const Promise: any;

class PokemonService {
  public async getAll(): Promise<Array<any>> {
    if (TESTING) {
      return new Promise((res: any) => {
        setTimeout(() => {
          res(pokemons);
        }, 400);
      });
    }
    try {
      const { data } = await api.get('/pokemon?limit=-1');
      return data.results || data;
    } catch (oof) {
      console.log(oof);
      return [];
    }
  }

  public async getOne(id: string | number): Promise<any> {
    if (TESTING) {
      return new Promise((res: any) => {
        setTimeout(() => {
          res(pokemon);
        }, 600);
      });
    }

    try {
      const { data } = await api.get(`/pokemon/${id}`);
      data.types = data.types.map(({ type }: any) => type?.name);
      data.abilities = reduceAbilities(data);
      data.stats = reduceStats(data);

      data.species = (
        await api.get(`/pokemon-species/${extractId(data.species.url)}`)
      ).data;

      reorganiseSpecies(data);

      data.evolution = (
        await api.get(
          `/evolution-chain/${extractId(data.species.evolution_chain.url)}`,
        )
      ).data;

      data.encounters = reduceEncounters(
        (
          await api.get(
            `/pokemon/${extractId(data.location_area_encounters)}/encounters`,
          )
        ).data,
      );

      recursivelySortEvolutionaryData(data);

      return data;
    } catch (oof) {
      return -1;
    }
  }
}

export default new PokemonService();

/* eslint-disable @typescript-eslint/camelcase */

import { extractId } from 'shared/helpers';
import api from 'api';

import {
  reduceAbilities,
  reduceStats,
  reorganiseSpecies,
  recursivelySortEvolutionaryData,
  reduceEncounters,
} from './processing';

class PokemonService {
  public async getAll(): Promise<Array<any>> {
    try {
      const { data } = await api.get('/pokemon?limit=-1');
      return data.results || data;
    } catch (oof) {
      return [];
    }
  }

  public async getOne(id: string | number): Promise<any> {
    try {
      const { data } = await api.get(`/pokemon/${id}`);

      try {
        data.types = data.types.map(({ type }: any) => type.name);
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
          await api.get(
            `/pokemon/${extractId(data.location_area_encounters)}/encounters`,
          ),
        );

        recursivelySortEvolutionaryData(data);

        return data;
      } catch (ew) {
        return data;
      }
    } catch (oof) {
      return -1;
    }
  }
}

export default new PokemonService();

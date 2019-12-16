/* eslint-disable @typescript-eslint/camelcase */

import { extractId } from 'shared/helpers';
import api from 'api';

class PokemonService {
  public async getAll(): Promise<Array<any>> {
    const { data } = await api.get('/pokemon?limit=-1');
    return data.results || data;
  }

  public async getOne(id: string | number): Promise<any> {
    try {
      const { data } = await api.get(`/pokemon/${id}`);

      try {
        data.types = data.types.map(({ type }: any) => type.name);

        data.abilities = data.abilities?.map(({ is_hidden, ability }: any) => [
          is_hidden ? 'hidden' : '',
          ability.name,
        ]);

        data.stats = data.stats.map(({ base_stat, effort, stat }: any) => ({
          base: base_stat,
          effort: effort,
          name: stat.name,
        }));

        data.species = (
          await api.get(`/pokemon-species/${extractId(data.species.url)}`)
        ).data;

        data.species.name = data.species?.genera?.find(
          (x: any) => x.language.name === 'en',
        )?.genus;

        data.growth_rate = data.species.growth_rate.name;

        data.species.egg_groups = data.species.egg_groups.map(
          ({ name }: any) => name,
        );

        data.evolution = (
          await api.get(
            `/evolution-chain/${extractId(data.species.evolution_chain.url)}`,
          )
        ).data;

        data.encounters = (
          await api.get(
            `/pokemon/${extractId(data.location_area_encounters)}/encounters`,
          )
        ).data?.map(({ location_area }: any) => location_area.name);

        let evolutionData = [data.evolution.chain];
        let recurssion_limit = 0;

        while (
          !evolutionData.find(
            ({ species }: any) => species.name === data.name,
          ) &&
          recurssion_limit < 100 &&
          evolutionData instanceof Array &&
          evolutionData[0] &&
          evolutionData[0].evolves_to
        ) {
          evolutionData = evolutionData
            .map(({ evolves_to }: any) => evolves_to)
            .reduce((acc, val) => acc.concat(val));
          recurssion_limit++;
        }

        if (recurssion_limit === 100) {
          data.evolution = [];
        } else {
          data.evolution = evolutionData.find(
            ({ species }: any) => species.name === data.name,
          );
        }
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

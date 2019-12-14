import { extractId } from 'shared/helpers';
import api from 'api';

class PokemonService {
  public async getAll(): Promise<Array<any>> {
    const { data } = await api.get('/pokemon?limit=-1');
    return data.results || data;
  }

  public async getOne(id: string | number): Promise<any> {
    const { data } = await api.get(`/pokemon/${id}`);

    data.types = data.types.map((x: any) => x.type.name);

    data.abilities = data.abilities?.map((x: any) => [
      x.is_hidden ? 'hidden' : '',
      x.ability.name,
    ]);

    data.stats = data.stats.map((x: any) => ({
      base: x.base_stat,
      effort: x.effort,
      name: x.stat.name,
    }));

    data.species = (
      await api.get(`/pokemon-species/${extractId(data.species.url)}`)
    ).data;

    data.species.name = data.species?.genera?.find(
      (x: any) => x.language.name === 'en',
    )?.genus;

    data.growth_rate = data.species.growth_rate.name;

    data.species.egg_groups = data.species.egg_groups.map((x: any) => x.name);

    data.evolution = (
      await api.get(
        `/evolution-chain/${extractId(data.species.evolution_chain.url)}`,
      )
    ).data;

    data.encounters = (
      await api.get(
        `/pokemon/${extractId(data.location_area_encounters)}/encounters`,
      )
    ).data?.map((x: any) => x.location_area.name);

    let evolutionData = [data.evolution.chain];
    let recurssion_limit = 0;

    while (
      !evolutionData.find((x: any) => x.species.name === data.name) &&
      recurssion_limit < 100
    ) {
      evolutionData = evolutionData
        .map((x: any) => x.evolves_to)
        .reduce((acc, val) => acc.concat(val));
      recurssion_limit++;
    }

    if (recurssion_limit === 100) {
      data.evolution = [];
    } else {
      data.evolution = evolutionData.find(
        (x: any) => x.species.name === data.name,
      );
    }

    return data;
  }
}

export default new PokemonService();

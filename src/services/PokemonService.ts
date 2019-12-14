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

    data.species = (
      await api.get(`/pokemon-species/${extractId(data.species.url)}`)
    ).data;

    data.species.name = data.species?.genera?.find(
      (x: any) => x.language.name === 'en',
    )?.genus;

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

    return data;
  }
}

export default new PokemonService();

import api from 'api';

class PokemonService {
  public async getAll(): Promise<Array<any>> {
    const { data } = await api.get('/pokemon?limit=-1');
    return data.results || data;
  }

  public async getOne(id: string | number): Promise<any> {
    const { data } = await api.get(`/pokemon/${id}`);
    return data;
  }
}

export default new PokemonService();

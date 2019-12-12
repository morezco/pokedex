import { observable, action, computed } from 'mobx';
import api from 'api';

class PokemonStore {
  @observable private Collection: Array<any> = [];
  @observable private Results: Array<any> = [];
  @observable private Searching: boolean = false;
  @observable private Fetching: boolean = false;
  @observable private Loading: boolean = false;
  @observable private Pokemon: any;

  @action public async search(
    lens: (value: any, index: number, array: any[]) => any,
  ) {
    this.Searching = true;
    this.Results = this.Collection.filter(lens);
    this.Searching = false;
  }

  @action public async loadCollection() {
    this.Fetching = true;
    this.Collection = (await api.get('/pokemon?limit=-1')).data;
    this.Fetching = false;
  }

  @action public async fetchPokemon(id: string | number) {
    this.Fetching = true;
    this.Pokemon = (await api.get(`/pokemon/${id}`)).data;
    this.Fetching = false;
  }

  @computed get fetching(): boolean {
    return this.Fetching;
  }

  @computed get searching(): boolean {
    return this.Searching;
  }

  @computed get loading(): boolean {
    return this.Loading;
  }

  @computed get collection(): Array<any> {
    return this.Collection;
  }

  @computed get results(): Array<any> {
    return this.Results;
  }

  @computed get pokemon(): any {
    return this.Pokemon;
  }
}

export default new PokemonStore();

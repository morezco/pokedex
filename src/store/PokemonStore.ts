import { observable, action, computed, toJS } from 'mobx';
import Service from 'services/PokemonService';
import { TESTING } from 'shared/constants';

import { Clean, ExtractProperty } from 'shared/storeSearch';

class PokemonStore {
  @observable private Collection: Array<any> = [];
  @observable private Results: Array<any> = [];
  @observable private Searching: boolean = false;
  @observable private Fetching: boolean = false;
  @observable private Pokemon: any;
  @observable private Lookup: string = '';

  public constructor() {
    this.loadCollection();
  }

  public convertStringToLens(query: string) {
    this.lookup = typeof query === 'function' ? 'query' : query;
    return typeof query === 'function'
      ? query
      : (value: any) =>
          value ? ExtractProperty(value).includes(Clean(query)) : false;
  }

  @action public async search(lens: any) {
    lens = this.convertStringToLens(lens);
    this.Searching = true;
    this.Results = toJS(this.Collection)
      .filter(lens)
      .slice(0, 50);
    this.Searching = false;
  }

  @action public async loadCollection() {
    this.Fetching = true;
    try {
      this.Collection = await Service.getAll();
    } catch (oof) {
      if (!TESTING) {
        console.log(oof);
      }
    }
    this.Fetching = false;
  }

  @action public async fetchPokemon(id: string | number) {
    this.Fetching = true;
    try {
      this.Pokemon = await Service.getOne(id);
    } catch (oof) {
      if (!TESTING) {
        console.log(oof);
      }
    }
    this.Fetching = false;
  }

  @computed get fetching(): boolean {
    return this.Fetching;
  }

  @computed get searching(): boolean {
    return this.Searching;
  }

  @computed get collection(): Array<any> {
    return toJS(this.Collection);
  }

  @computed get results(): Array<any> {
    return toJS(this.Results);
  }

  @computed get pokemon(): any {
    return toJS(this.Pokemon);
  }

  @computed get lookup(): string {
    return this.Lookup;
  }

  set lookup(value: string) {
    this.Lookup = value;
  }

  @action clearPokemon(): void {
    this.Pokemon = null;
  }
}

export default new PokemonStore();

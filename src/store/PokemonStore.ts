import { observable, action, computed, toJS } from 'mobx';
import Service from 'services/PokemonService';

import { Clean, ExtractProperty } from 'shared/storeSearch';

class PokemonStore {
  @observable private Collection: Array<any> = [];
  @observable private Results: Array<any> = [];
  @observable private Searching: boolean = false;
  @observable private Fetching: boolean = false;
  @observable private Loading: boolean = false;
  @observable private Pokemon: any;
  @observable private Lookup: string = '';

  public constructor() {
    this.loadCollection();
  }

  @action public async search(lens: any) {
    if (typeof lens === 'string') {
      this.lookup = lens;
      lens = (value: any) =>
        value ? ExtractProperty(value).includes(Clean(value)) : false;
    }

    this.Searching = true;
    if (this.Collection && toJS(this.Collection) instanceof Array) {
      this.Results = toJS(this.Collection)
        .filter(lens)
        .slice(0, 50);
    } else {
      this.Results = [];
    }
    this.Searching = false;
  }

  @action public async loadCollection() {
    this.Fetching = true;
    try {
      this.Collection = await Service.getAll();
    } catch (oof) {
      console.log(oof);
    }
    this.Fetching = false;
  }

  @action public async fetchPokemon(id: string | number) {
    this.Fetching = true;
    this.Pokemon = await Service.getOne(id);
    this.Fetching = false;
  }

  @computed get fetching(): boolean {
    return this.Fetching;
  }

  set fetching(value: boolean) {
    this.Fetching = value;
  }

  @computed get searching(): boolean {
    return this.Searching;
  }

  @computed get loading(): boolean {
    return this.Loading;
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

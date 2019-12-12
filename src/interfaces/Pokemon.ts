interface IQueryable {
  name: string;
  url: string;
}

interface ILanguage extends IQueryable {}
interface IGeneration extends IQueryable {}

interface IEffectEntry {
  effect: string;
  language: ILanguage;
}

interface IEffectChange {
  effect_entries: Array<IEffectEntry>;
}

interface AbilityBlob {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface IFlavorText {
  flavor_text: string;
  language: ILanguage;
}

interface IAbility {
  effect_changes: Array<IEffectChange>;
  effect_entries: Array<IEffectEntry>;
  flavor_text_entries: Array<IFlavorText>;
  generation: IGeneration;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Array<ILanguage>;
  version_group: IVersion;
}

export default interface Pokemon {
  abilities: Array<IAbility>;
}

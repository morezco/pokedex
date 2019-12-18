export const reduceAbilities = (data: any) =>
  data.abilities.map(({ is_hidden, ability }: any) => [
    is_hidden ? 'hidden' : '',
    ability.name,
  ]);

export const reduceStats = (data: any) =>
  data.stats.map(({ base_stat, effort, stat }: any) => ({
    base: base_stat,
    effort: effort,
    name: stat.name,
  }));

export const reorganiseSpecies = (data: any) => {
  data.species.name = data.species?.genera?.find(
    (x: any) => x.language.name === 'en',
  )?.genus;

  data.growth_rate = data.species.growth_rate.name;

  data.species.egg_groups = data.species.egg_groups.map(
    ({ name }: any) => name,
  );
};

export const reduceEncounters = (data: any) =>
  data?.map(({ location_area }: any) => location_area.name);

export const recursivelySortEvolutionaryData = (data: any) => {
  let evolutionData = [data.evolution.chain];

  while (
    !evolutionData.find(({ species }: any) => species.name === data.name) &&
    evolutionData instanceof Array &&
    evolutionData[0] &&
    evolutionData[0].evolves_to
  ) {
    evolutionData = evolutionData
      .map(({ evolves_to }: any) => evolves_to)
      .reduce((acc, val) => acc.concat(val));
  }

  data.evolution = evolutionData.find(
    ({ species }: any) => species.name === data.name,
  );
};

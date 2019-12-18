import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { nameLike } from 'shared/helpers';
import { LayoutProps } from 'shared/constants';

import { Section } from 'styles';
import { Title } from './styles';

import { Pokemons } from 'store';

import { Row, Loading, PokemonPicture } from 'components';
import Table from './Table/Table';

import {
  PokedexTable,
  TrainingTable,
  StatsTable,
  BreedingTable,
  EvolutionaryTable,
  evo,
} from './Table/processing';

export interface PokemonDetailProps {
  match: any;
  history: any;
}

export default observer(function PokemonDetail({
  match,
  setMinimiseNav,
  history,
}: PokemonDetailProps & LayoutProps) {
  const { id } = match.params;
  const { pokemon } = Pokemons;

  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setMinimiseNav(true);
    Pokemons.fetchPokemon(id);
  }, [id, setMinimiseNav]);

  return (
    <Section padding={'50px'}>
      {!pokemon ? (
        <Row center>
          <Loading width='50px' />
        </Row>
      ) : (
        <Row>
          <Row vertical right>
            <PokemonPicture id={pokemon.id} name={pokemon.name} />
            <Title>{nameLike(pokemon.name)}</Title>
            <Table
              delay={delay}
              setDelay={setDelay}
              {...PokedexTable(pokemon)}
            />
            {delay > 0 && (
              <Table
                delay={delay}
                setDelay={setDelay}
                {...TrainingTable(pokemon)}
              />
            )}
          </Row>
          <div style={{ height: '100%', width: '200px' }} />
          <Row vertical>
            {delay > 1 && (
              <Table
                delay={delay}
                setDelay={setDelay}
                {...StatsTable(pokemon)}
              />
            )}
            {delay > 2 && (
              <Table
                delay={delay}
                setDelay={setDelay}
                {...BreedingTable(pokemon)}
              />
            )}
            {delay > 3 && evo(pokemon) && (
              <Table
                delay={delay}
                setDelay={setDelay}
                {...EvolutionaryTable(pokemon, history)}
              />
            )}
          </Row>
        </Row>
      )}
    </Section>
  );
});

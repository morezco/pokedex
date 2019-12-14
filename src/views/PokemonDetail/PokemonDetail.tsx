import React from 'react';

import { Section } from 'styles';

export interface PokemonDetailProps {
  match: any;
}

export default function PokemonDetail({ match }: PokemonDetailProps) {
  const { id } = match.params;
  return (
    <Section>
      <h1>{id}</h1>
    </Section>
  );
}

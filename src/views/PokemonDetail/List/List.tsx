import React from 'react';

import { Container } from './styles';

interface ListProps {
  arr: Array<string>;
}

export default function List({ arr }: ListProps) {
  return (
    <Container>
      {arr.map((x: string, y: number) => (
        <p key={y}>
          <span>{x}</span>
        </p>
      ))}
    </Container>
  );
}

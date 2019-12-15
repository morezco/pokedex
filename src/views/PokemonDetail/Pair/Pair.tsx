import React from 'react';

import { Container, PrimaryValue, SecondaryValue } from './styles';

interface PairProps {
  arr: Array<Array<string>>;
}

export default function Pair({ arr }: PairProps) {
  return (
    <Container>
      {arr.map((x: Array<string>, y: number) => (
        <p key={y}>
          <PrimaryValue>{x[1]}</PrimaryValue>
          <SecondaryValue>{x[0]}</SecondaryValue>
        </p>
      ))}
    </Container>
  );
}

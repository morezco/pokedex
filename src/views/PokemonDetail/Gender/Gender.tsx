import React from 'react';

import { Container, MaleRate, FemaleRate } from './styles';

interface GenderProps {
  rate: number;
}

export default function Gender({ rate }: GenderProps) {
  return (
    <Container>
      <MaleRate>{100 - rate * 12.5}%</MaleRate>
      {' / '}
      <FemaleRate>{rate * 12.5}%</FemaleRate>
    </Container>
  );
}

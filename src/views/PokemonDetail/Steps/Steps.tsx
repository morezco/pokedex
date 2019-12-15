import React from 'react';

import { Container, StepsCount } from './styles';

interface StepsProps {
  cycles: number;
}

export default function Steps({ cycles }: StepsProps) {
  return (
    <Container>
      <span>{cycles}</span>
      <StepsCount>
        {' '}
        ({cycles * 244}-{cycles * 256} steps)
      </StepsCount>
    </Container>
  );
}

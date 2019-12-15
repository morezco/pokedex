import React from 'react';

import { Container, Layer, Bar } from './styles';

export interface StatsProps {
  stat: number;
}

export default function Stats({ stat }: StatsProps) {
  const statColour = (value: number) => {
    if (value <= 50) {
      return 'orange';
    } else if (value <= 75) {
      return 'yellow';
    } else if (value <= 100) {
      return 'rgb(151, 224, 49)';
    } else if (value <= 125) {
      return 'rgb(4, 198, 90)';
    } else {
      return '#33C0FD';
    }
  };

  return (
    <Container>
      <Layer>
        <Bar width={(stat / 130) * 100 + '%'} colour={statColour(stat)} />
      </Layer>
      <p>{stat}</p>
    </Container>
  );
}

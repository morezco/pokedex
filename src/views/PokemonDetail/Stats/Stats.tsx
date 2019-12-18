import React, { useRef, useEffect } from 'react';

import { Container, Layer, Bar } from './styles';
import gsap from 'gsap';

export interface StatsProps {
  stat: number;
}

export const statColour = (value: number) => {
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

export default function Stats({ stat }: StatsProps) {
  let ref: any = useRef(null);
  useEffect(() => {
    gsap.to(ref, {
      duration: 1,
      css: { width: (stat / 130) * 100 + '%' },
      delay: 2,
    });
  }, []);

  return (
    <Container>
      <Layer>
        <Bar ref={el => (ref = el)} width={'0'} colour={statColour(stat)} />
      </Layer>
      <p>{stat}</p>
    </Container>
  );
}

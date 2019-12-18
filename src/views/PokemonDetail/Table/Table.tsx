import React, { useRef, useEffect } from 'react';

import { TweenMax, Power3 } from 'gsap';

import { Container, Layer, Body, Row, Category, Value } from './styles';

export interface IBlob {
  name: string;
  value: any;
  act?: any;
}

export interface TableProps {
  title: string;
  data: Array<IBlob>;
  delay?: number;
  setDelay?: (x: number) => void;
}

export default function Table({ title, data, delay, setDelay }: TableProps) {
  let ref: any = useRef(null);

  useEffect(() => {
    setDelay!(delay! + 1);
    TweenMax.to(ref, 2, {
      opacity: 1,
      y: -60,
      ease: Power3.easeOut,
      delay: delay! / 2,
    });

    return () => setDelay!(0);
  }, []);

  return (
    <Container ref={el => (ref = el)}>
      <h3>{title}</h3>
      <Layer>
        <Body>
          {data.map((blob: IBlob, i: number) => (
            <Row onClick={blob?.act} key={i}>
              <Category>{blob?.name}</Category>
              <Value>{blob?.value}</Value>
            </Row>
          ))}
        </Body>
      </Layer>
    </Container>
  );
}

import React from 'react';

import { Container, Layer, Body, Row, Category, Value } from './styles';

export interface IBlob {
  name: string;
  value: any;
  act?: any;
}

export interface TableProps {
  title: string;
  data: Array<IBlob>;
}

export default function Table({ title, data }: TableProps) {
  return (
    <Container>
      <h3>{title}</h3>
      <Layer>
        <Body>
          {data.map((blob: IBlob, i: number) => (
            <Row onClick={blob.act} key={i}>
              <Category>{blob.name}</Category>
              <Value>{blob.value}</Value>
            </Row>
          ))}
        </Body>
      </Layer>
    </Container>
  );
}

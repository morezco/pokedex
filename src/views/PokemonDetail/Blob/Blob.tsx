import React from 'react';

import { Element } from './styles';

interface BlobProps {
  arr: Array<string>;
}

export default function Blob({ arr }: BlobProps) {
  return (
    <div>
      {arr.map((x: string, y: number) => (
        <Element key={y}>{x}</Element>
      ))}
    </div>
  );
}

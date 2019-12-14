import React from 'react';

import { Element } from './styles';

interface BlobProps {
  children: string;
}

export default function Blob({ children }: BlobProps) {
  return <Element>{children}</Element>;
}

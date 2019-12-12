import React from 'react';

import { Element, RowProps } from './styles';

export default function Row({ children, ...props }: RowProps) {
  return (
    <Element className='row' {...props}>
      {children}
    </Element>
  );
}

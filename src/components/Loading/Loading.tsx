import React from 'react';

import { Container } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog as cog } from '@fortawesome/free-solid-svg-icons';

export default function Loading(props: any): React.ReactElement {
  return (
    <Container data-testid='Loading' {...props}>
      <FontAwesomeIcon icon={cog} spin size={'3x'} />
    </Container>
  );
}

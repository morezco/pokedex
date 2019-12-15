import React from 'react';
import { render } from '@testing-library/react';

import Intro from './Intro';

describe('The Intro view', () => {
  it('should render a title by default', () => {
    const { getByText } = render(
      <Intro scrollEffects={false} setMinimiseNav={() => {}} />,
    );
    const IntroTitle = getByText('Intro');
    expect(IntroTitle).toBeInTheDocument();
  });
});

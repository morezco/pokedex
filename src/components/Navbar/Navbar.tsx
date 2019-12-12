import React, { useState } from 'react';
import { Categories } from 'shared/constants';
import { useScrollPosition } from 'shared/hooks';
import { withRouter } from 'react-router-dom';

import { Container, Body, LogoContainer, ButtonsContainer } from './styles';

const categories = Categories.map(x => [x.toLowerCase(), x]);

export interface NavbarProps {
  history: any;
  location: any;
}

function Navbar({ history, location }: NavbarProps): React.ReactElement {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      const display = currPos.y > prevPos.y || currPos.y > 5;
      if (display !== hideOnScroll) setHideOnScroll(display);
    },
    [hideOnScroll],
  );

  const onClickHandler = (path: string) => history.push(path);
  const path = location.pathname.split('/')[1];

  return (
    <Container {...{ hideOnScroll }}>
      <h1 onClick={() => history.push('/intro')}>Pokedex</h1>
      <Body>
        <LogoContainer>
          <h1 onClick={() => history.push('/intro')}>Pokedex</h1>
        </LogoContainer>
        <ButtonsContainer>
          {categories.map(category => (
            <button
              key={category[0]}
              onClick={() => onClickHandler(`/${category[0]}`)}
              className={String(path === category[0] && 'Selected')}
            >
              {category[1]}
            </button>
          ))}
        </ButtonsContainer>
      </Body>
    </Container>
  );
}

export default withRouter(Navbar);

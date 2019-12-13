import React, { useState } from 'react';
import { useScrollPosition } from 'shared/hooks';
import { withRouter } from 'react-router-dom';

import { Header, Wrapper, LogoContainer, SearchContainer } from './styles';

import { Search } from 'components';

export interface SearchbarProps {
  history: any;
  location: any;
}

function Searchbar({ history }: SearchbarProps): React.ReactElement {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }: any) => {
      const display = currPos.y > -200;
      if (display !== hideOnScroll) setHideOnScroll(display);
    },
    [hideOnScroll],
  );

  const goHome = () => history.push('/intro');

  return (
    <Header data-testid='Topbar' {...{ hideOnScroll }}>
      <h1 onClick={goHome}>Pokedex</h1>
      <Wrapper>
        <LogoContainer>
          <h1 onClick={goHome}>Pokedex</h1>
        </LogoContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </Wrapper>
    </Header>
  );
}

export default withRouter(Searchbar);

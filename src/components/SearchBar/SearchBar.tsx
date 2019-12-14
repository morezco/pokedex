import React, { useState } from 'react';
import { useScrollPosition } from 'shared/hooks';
import { withRouter } from 'react-router-dom';

import { Header, Wrapper, LogoContainer, SearchContainer } from './styles';

import { Search } from 'components';

export interface SearchbarProps {
  history: any;
  location: any;
  scrollEffects?: boolean;
}

function Searchbar({
  history,
  location,
  scrollEffects,
}: SearchbarProps): React.ReactElement {
  const hide = location.pathname !== '/';
  const goHome = () => history.push('/intro');

  return (
    <Header data-testid='Topbar' {...{ scrollEffects }}>
      <h1 onClick={goHome}>Pokedex</h1>
      <Wrapper>
        <LogoContainer>
          <h1 onClick={goHome}>Pokedex</h1>
        </LogoContainer>
        <SearchContainer {...{ hide }}>
          <Search />
        </SearchContainer>
      </Wrapper>
    </Header>
  );
}

export default withRouter(Searchbar);

import React from 'react';
import { withRouter } from 'react-router-dom';

import { Header, Wrapper, LogoContainer, SearchContainer } from './styles';

import { Search } from 'components';

export interface SearchbarProps {
  history: any;
  location: any;
  scrollEffects?: boolean;
  styling?: string;
}

function Searchbar({
  history,
  location,
  scrollEffects,
  styling,
}: SearchbarProps): React.ReactElement {
  const hide = location.pathname !== '/';
  const goHome = () => history.push('/intro');

  return (
    <Header data-testid='Topbar' {...{ scrollEffects, styling }}>
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

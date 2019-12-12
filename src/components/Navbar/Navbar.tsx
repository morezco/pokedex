import React, { useState } from 'react';
import { Categories } from 'shared/constants';
import { useScrollPosition } from 'shared/hooks';
import { withRouter } from 'react-router-dom';

import { Header, Wrapper, LogoContainer, ButtonsContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const categories = Categories.map(x => [x.toLowerCase(), x]);

export interface NavbarProps {
  history: any;
  location: any;
}

function Navbar({ history, location }: NavbarProps): React.ReactElement {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [open, setOpen] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      const display = currPos.y > prevPos.y || currPos.y > 5;
      if (display !== hideOnScroll) setHideOnScroll(display);
    },
    [hideOnScroll],
  );

  const toggle = () => setOpen(!open);
  const goHome = () => history.push('/intro');
  const redirect = (path: string) => history.push(path);
  const path = location.pathname.split('/')[1];

  return (
    <Header {...{ hideOnScroll, open }}>
      <h1 onClick={goHome}>Pokedex</h1>
      <Wrapper>
        <LogoContainer>
          <h1 onClick={goHome}>Pokedex</h1>
          <FontAwesomeIcon
            color='#fff'
            size='2x'
            icon={open ? faAngleDown : faAngleLeft}
            onClick={toggle}
          />
        </LogoContainer>
        <ButtonsContainer>
          <ul>
            {categories.map(category => (
              <li
                key={category[0]}
                onClick={() => redirect(`/${category[0]}`)}
                className={String(path === category[0] && 'Selected')}
              >
                {category[1]}
              </li>
            ))}
          </ul>
        </ButtonsContainer>
      </Wrapper>
    </Header>
  );
}

export default withRouter(Navbar);

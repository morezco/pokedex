import styled from 'styled-components';

interface AppContainerProps {
  moveUpOnScroll?: boolean;
}

export const AppContainer = styled.main<AppContainerProps>`
  max-width: 100vw;

  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    overflow: hidden;
  }
`;

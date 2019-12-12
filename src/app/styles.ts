import styled, { css } from 'styled-components';

interface AppContainerProps {
  moveUpOnScroll?: boolean;
}

export const AppContainer = styled.main<AppContainerProps>`
  max-width: 100vw;
  margin-top: 200px;

  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    margin-top: 120px;
  }
`;

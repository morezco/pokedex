import styled from 'styled-components';
import { LayoutProps } from 'shared/constants';

export const SearchLayer = styled.div<LayoutProps>`
  padding: 0px;
  max-height: 40px;

  display: flex;
  justify-content: flex-end;
  align-self: flex-start;

  z-index: 1000;

  @media (min-width: 1000px) {
    position: sticky;
    top: 50px !important;

    width: 100%;
    margin-left: 10px;
  }

  @media (max-width: 1000px) {
    position: fixed;
    top: 65px;
    right: 0px;
    width: 150px;
  }

  font-size: 1em;
  color: #999;

  p {
    width: 200px;
    margin-top: 5px;
    ${({ scrollEffects }) => scrollEffects && 'color: white;'}
  }
`;

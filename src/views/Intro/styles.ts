import styled from 'styled-components';
import { LayoutProps } from 'shared/constants';

export const SearchLayer = styled.div<LayoutProps>`
  width: 100%;
  padding: 0px;
  max-height: 40px;

  display: flex;
  justify-content: flex-end;
  align-self: flex-start;

  position: sticky;
  top: 50px !important;
  z-index: 1000;

  font-size: 1em;
  color: #999;

  margin-left: 10px;

  p {
    width: 200px;
    margin-top: 5px;
    ${({ scrollEffects }) => scrollEffects && 'color: white;'}
  }
`;

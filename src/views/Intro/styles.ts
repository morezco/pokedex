import styled from 'styled-components';
import { MasterProps } from 'shared/constants';

export const SearchLayer = styled.div<MasterProps>`
  width: 100%;
  padding: 0px;

  display: flex;
  justify-content: flex-end;

  position: sticky;
  top: 50px;
  z-index: 1000;

  font-size: 1em;
  color: #999;

  margin-left: 10px;

  p {
    width: 200px;
    margin-top: 5px;
    ${({ scrollEffects }) => scrollEffects && 'color: white;'}
`;

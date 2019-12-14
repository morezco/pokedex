import styled, { css } from 'styled-components';

export interface RowProps {
  vertical?: boolean;
  center?: boolean;
  spaced?: boolean;
  even?: boolean;
  around?: boolean;
  children?: any;
  right?: any;
  transform?: any;
  margin?: string;
}

const RIGHT = (vertical: boolean) => css`
  ${vertical ? 'align-items' : 'justify-content'}: flex-end;
`;

const COL = () => css`
  flex-direction: column;
`;

const CENTER = (vertical: boolean) => css`
  ${vertical ? 'align-items' : 'justify-content'}: CENTER;
`;

const SPACED = () => css`
  justify-content: space-between;
`;

const EVEN = () => css`
  justify-content: space-evenly;
`;

const AROUND = () => css`
  justify-content: space-around;
`;

export const Element = styled.div<RowProps>`
  display: flex;
  width: 100%;
  
  ${({ margin }) => margin && `margin: ${margin};`}


  transition: all 0.3s ease-in-out;
  ${({ transform }) => transform && `transform: ${transform};`}

  ${({ vertical }) => vertical && COL()}
  ${({ center, vertical }) => center && CENTER(!!vertical)}
  ${({ right, vertical }) => right && RIGHT(!!vertical)}
  ${({ spaced }) => spaced && SPACED()}
  ${({ even }) => even && EVEN()}
  ${({ around }) => around && AROUND()}

  @media (max-width: 1000px) {
    ${COL}
    ${CENTER(true)}
  }
`;

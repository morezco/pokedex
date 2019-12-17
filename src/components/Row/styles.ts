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

export const RIGHT = (vertical?: boolean) =>
  css`
    ${vertical ? 'align-items' : 'justify-content'}: flex-end;
  `;

export const COL = (vertical?: boolean) =>
  vertical &&
  css`
    flex-direction: column;
  `;

export const CENTER = (vertical?: boolean) => css`
  ${vertical ? 'align-items' : 'justify-content'}: CENTER;
`;

export const SPACED = (spaced?: boolean) =>
  spaced &&
  css`
    justify-content: space-between;
  `;

export const EVEN = (even?: boolean) =>
  even &&
  css`
    justify-content: space-evenly;
  `;

export const AROUND = (around?: boolean) =>
  around &&
  css`
    justify-content: space-around;
  `;

export const Element = styled.div<RowProps>`
  display: flex;
  width: 100%;
  
  ${({ margin }) => margin && `margin: ${margin};`}


  transition: all 0.3s ease-in-out;
  ${({ transform }) => `transform: ${transform || 'none'};`}

  ${({ vertical }) => COL(vertical)}
  ${({ center, vertical }) => CENTER(center && !!vertical)}
  ${({ right, vertical }) => RIGHT(!!vertical && right)}
  ${({ spaced }) => SPACED(spaced)}
  ${({ even }) => EVEN(even)}
  ${({ around }) => AROUND(around)}

  @media (max-width: 1000px) {
    ${COL(true)}
    ${CENTER(true)}
  }
`;

export default { Element, COL, CENTER, RIGHT, SPACED, EVEN, AROUND };

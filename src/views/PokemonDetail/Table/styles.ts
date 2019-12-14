import styled from 'styled-components';

export const Container = styled.div`
  font: 1.6em Poppins;
`;

export const Layer = styled.table`
  font: 0.8em Poppins;
`;

export const Header = styled.thead``;

export const Body = styled.tbody`
  min-width: 100%;

  hr {
    min-width: 300%;
  }
`;

export const Row = styled.tr`
  min-width: 100%;
`;

export const Category = styled.td`
  width: 30%;
  font-weight: 100;
  font-size: 0.8em;

  border: 1px;
  height: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Value = styled.td`
  width: 40%;

  div {
    display: flex;
    flex-direction: row;
  }

  border: 1px;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

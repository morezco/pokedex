import styled from 'styled-components';

interface BarProps {
  colour: string;
  width: string;
}

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
`;

export const Layer = styled.div`
  width: 75%;

  background-color: #eee;
  border-radius: 10px;
`;

export const Bar = styled.div<BarProps>`
  height: 20px;
  width: ${({ width }) => width};
  max-width: 100%;

  border-radius: 10px;

  background-color: ${({ colour }) => colour};
`;

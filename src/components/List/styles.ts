import styled, { css } from 'styled-components';

interface ContentProps {
  dismiss?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: all 0.6s ease-in-out;

  ${({ dismiss }) =>
    dismiss &&
    css`
      transform: translate(-2%, 100%);
      position: fixed;
    `}

  @media (min-width: 1000px) {
    margin: 80px 40px;
  }
`;

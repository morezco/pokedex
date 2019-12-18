import styled from 'styled-components';

interface ContentProps {
  dismiss?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: all 0.6s ease-in-out;

  &:hover {
    .Tile {
      &:not(:hover) {
        opacity: 0.6;
        transform: scale(0.9, 0.9);
        box-shadow: 0px 0px 5px #00000066;
      }
      opacity: 1;
      transform: scale(1.05, 1.05);
      box-shadow: 0px 0px 40px #00000044;
    }
  }

  @media (min-width: 1000px) {
    margin: 80px 40px;
  }
`;

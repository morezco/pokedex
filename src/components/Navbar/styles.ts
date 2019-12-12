import styled from 'styled-components';
import { Colours } from 'styles';

interface ContainerProps {
  hideOnScroll?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  min-width: 100vw;
  position: absolute;
  align-items: center;
  flex-direction: column;
  top: 0px;
  left: 0;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;

  h1 {
    text-shadow: 0px 0px 20px #00000033;
    font-family: Poppins;
    color: #444;
    cursor: pointer;
  }

  ${({ hideOnScroll }) =>
    (hideOnScroll &&
      `
    background-color: red;
    h1 {
      color: white !important;
    }`) ||
    `
    transform: translateY(-100%);
    opacity: 0;
    `}

  @media (max-width: 1000px) {
    top: 0;
    & > h1 {
      display: none;
    }
  }
`;

export const Body = styled.div`
  box-shadow: 0px 0px 30px #00000044;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  display: flex;
  height: 70px;
  width: 85vw;

  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

export const LogoContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 20%;
  display: none;

  @media (max-width: 1000px) {
    width: 100vw;
    display: flex;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;

  button {
    background-color: white;
    font-size: 1em;
    border: none;
    height: 100%;
    color: #444;
    width: 10%;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-weight: 550;

    &:hover,
    &.Selected {
      background-color: ${Colours.dark};
      color: white;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

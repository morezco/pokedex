import styled from 'styled-components';
import { Colours } from 'styles';

interface ContainerProps {
  hideOnScroll?: boolean;
  open?: boolean;
}

export const Header = styled.header<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  top: 0px;
  left: 0;
  height: 150px;

  position: absolute;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  overflow: hidden;

  ${({ open }) =>
    open &&
    `
    height: 100vh;
    &, * > * {
      background-color: white;
      color: black !important;
      * > *:hover {
        color: white !important;
      }
    }
  `}

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
      color: white;
    }`) ||
    `
    transform: translateY(-100%);
    opacity: 0;
    `}

  @media (max-width: 1000px) {
    top: 0;

    ${({ open }) => !open && 'max-height: 80px;'}

    & > h1 {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0px 0px 30px #00000044;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
  display: flex;
  height: 70px;
  width: 85vw;

  @media (max-width: 1000px) {
    width: 100vw;
    display: block;
  }
`;

export const LogoContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  width: 20%;
  display: none;

  @media (max-width: 1000px) {
    width: 100vw;
    display: flex;
  }
`;

export const ButtonsContainer = styled.nav`
  width: 100%;
  margin-top: -22px;
  ul {
    width: 100%;
    margin: none;
    padding: 0;
    li {
      list-style-type: none;
      background-color: white;
      font-size: 1em;
      border: none;
      color: #444;
      width: 10%;
      outline: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-weight: 550;
      display: flex;
      justify-content: center;
      align-items: center;
      font: 1.1em Poppins;
      padding: 20px;

      &:hover,
      &.Selected {
        background-color: ${Colours.dark};
        color: white;
      }

      @media (max-width: 1000px) {
        width: 100%;
        height: 60px;
      }
    }

    @media (min-width: 1000px) {
      display: flex;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

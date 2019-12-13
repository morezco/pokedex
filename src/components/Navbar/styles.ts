import styled, { css } from 'styled-components';
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
  max-width: 100vw;
  top: 0px;
  left: 0;
  height: 125px;

  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  top: 0;

  h1 {
    text-shadow: 0px 0px 20px #00000033;
    font-family: Poppins;
    color: #444;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    & > h1 {
      display: none;
    }

    ${({ open }) =>
      (open &&
        css`
          height: 100vh;
          &,
          * > * {
            background-color: white;
            color: black !important;
            * > *:not(h1):hover {
              color: white !important;
            }
          }
        `) ||
      `overflow: hidden; max-height: 80px;`}
  }

  ${({ hideOnScroll, open }) =>
    (!hideOnScroll &&
      css`
        background-color: red;
        h1 {
          color: white;
        }
      `) ||
    (!open &&
      css`
        transform: translateY(-100%);
        opacity: 0;
      `)}
`;

export const Wrapper = styled.div`
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

export const ButtonsContainer = styled.nav<ContainerProps>`
  width: 100%;
  height: 90px;

  box-shadow: 0px 10px 10px #00000022;

  z-index: 1000;

  overflow-y: hidden;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ open }) => open && 'height: auto;'}

  ul {
    width: 100%;
    margin: none;
    padding: 0;
    li {
      list-style-type: none;

      background-color: white;
      border: none;
      color: #444;

      width: 10%;
      min-height: 40px;

      outline: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

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
`;

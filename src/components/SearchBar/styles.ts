import styled, { css } from 'styled-components';

interface ContainerProps {
  scrollEffects?: boolean;
  hide?: boolean;
  minimiseNav?: boolean;
}

const SearchContainerHide = css`
  transform: translateY(-500%);
`;

const minimisedNav = css`
  position: relative;
  height: 85px;
`;

export const Header = styled.header<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 100vw;
  max-width: 100vw;
  height: 125px;

  margin: -8px;

  position: sticky;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  left: 0px;
  top: 0px;

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
  }

  ${({ scrollEffects, minimiseNav }) =>
    !minimiseNav &&
    !scrollEffects &&
    css`
      background-color: #fd3333ee;
      h1 {
        color: white;
      }
    `}

  ${({ minimiseNav }) => minimiseNav && minimisedNav};
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

export const SearchContainer = styled.div<ContainerProps>`
  width: 100vw;

  display: flex;
  justify-content: center;

  align-items: flex-end;
  margin-top: 10px;

  position: sticky;
  top: 100px;

  transition: all 0.5s ease-in-out;

  ${({ hide }) => hide && SearchContainerHide}
`;

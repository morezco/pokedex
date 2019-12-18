import styled, { css } from 'styled-components';

interface ContainerProps {
  hovering: number;
  index?: number;
}

export const Container = styled.div<ContainerProps>`
    width: 125px;
    height: 125px
    margin: 5px;
    max-width: 125px;

    display: flex;
    flex: 1 0 21%;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: pointer;
    transition: all 0.1s;

    background-color: white;
    box-shadow: 0px 0px 20px #00000044;
    border-radius: 10px;

    font: 1em Poppins;

    ${({ hovering, index }) =>
      hovering > -1 &&
      (hovering !== index
        ? css`
            opacity: 0.6;
            transform: scale(0.9, 0.9);
            box-shadow: 0px 0px 5px #00000088;
          `
        : css`
            opacity: 1;
            transform: scale(1.05, 1.05);
            box-shadow: 0px 0px 40px #00000034;
          `)}
     

    
    h5 {
      margin: 5px 0px;
    }
  
    @media (max-width: 1000px) {
      min-width: 30%;
      max-width: 30%;
    }
`;

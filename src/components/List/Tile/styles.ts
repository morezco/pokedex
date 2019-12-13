import styled from 'styled-components';

export const Container = styled.div`
    width: 150px;
    height: 150px
    margin: 5px;
    max-width: 150px;

    display: flex;
    flex: 1 0 21%;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    text-align: center;

    cursor: pointer;
    transition: all 0.1s ease-in-out;

    background-color: white;
    box-shadow: 0px 0px 20px #00000044;
    border-radius: 10px;

    font: 1em Poppins;

    &:hover {
        transform: scale(1.05, 1.05);
      }
    
      h5 {
        margin: 5px 0px;
      }
    
      @media (max-width: 800px) {
        min-width: 100%;
        max-width: 100%;
      }
`;
import styled from 'styled-components';

export const Section = styled.section`
  width: 80%;
  h1 {
    font: 3em Poppins;
    margin: 0px;
  }

  p {
    font: 1.3em Poppins;
    text-align: right;
    text-justify: justify;
  }
`;

export const SearchLayer = styled.div`
  width: 100%;
  padding: 0px;

  position: sticky;
  top: 20px;
  z-index: 500;

  display: flex;
  justify-content: flex-end;

  p {
    width: 200px;
    margin-top: 5px;
  }
`;

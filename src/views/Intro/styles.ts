import styled from 'styled-components';

export const SearchLayer = styled.div`
  width: 100%;
  padding: 0px;

  display: flex;
  justify-content: flex-end;

  position: sticky;
  top: 100px;
  z-index: 1000;

  font-size: 1em;
  color: #999;

  margin-left: 10px;

  p {
    width: 200px;
    margin-top: 5px;
  }
`;

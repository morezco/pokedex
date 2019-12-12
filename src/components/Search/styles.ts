import styled from 'styled-components';
import { Colours } from 'styles';

export const Container = styled.div`
  width: 80%;
  height: 40px;
  margin-right: 33px;

  .icon {
    cursor: pointer;
    position: relative;
    margin: -32px;
    float: right;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: white;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${Colours.lighter};
  outline: none;
  text-indent: 1em;
  padding-right: 40px;
  color: ${Colours.dark};
  font-size: 0.8em;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px #00000022;
  }

  &:focus {
    box-shadow: 0px 0px 10px #00000044;
    transform: scale(1.01, 1.01);
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

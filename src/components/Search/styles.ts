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
  height: 40px;
  padding-right: 40px;

  background-color: white;
  color: ${Colours.dark};

  font-size: 1em;
  text-indent: 1em;

  border-radius: 20px;
  border: 1px solid ${Colours.lighter};
  box-shadow: 0px 0px 40px #00000022;

  transition: all 0.2s ease-in-out;

  outline: none;

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

import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column !important;
  align-items: flex-start;

  font-size: 0.7em;

  p {
    line-height: 0px;
  }
`;

export const PrimaryValue = styled.span`
  margin-right: 10px;
`;

export const SecondaryValue = styled.span`
  color: grey;
  font-size: 0.7em;
`;

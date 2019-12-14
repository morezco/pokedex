import styled, { css } from 'styled-components';

export interface SectionProps {
  padding?: string;
}

const sectionPadding = (value: string) => css`
  padding: ${value};
`;

export const Colours = {
  darkest: '#222',
  darker: '#444',
  dark: '#666',
  light: '#aaa',
  lighter: '#ccc',
  lightest: '#eee',
  primary: '#FD3342',
};

export const Section = styled.section<SectionProps>`
  width: 80%;
  ${({ padding }) => padding && sectionPadding(padding)}

  h1 {
    font: 3em Poppins;
    margin: 0px;
  }

  p {
    font: 1.3em Poppins;
    text-justify: justify;
  }
`;

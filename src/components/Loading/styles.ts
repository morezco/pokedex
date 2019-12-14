import styled from 'styled-components';

export interface LoadingContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.figure<LoadingContainerProps>`
  ${({ width }) => `width: ${width || '100%'};`}
  ${({ height }) => `height: ${height || '100%'};`}
`;

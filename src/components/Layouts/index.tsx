import styledComponents from 'styled-components';

export const COLORS = {
  PRIMARY_TEXT: '#172b4d',
  BACKGROUND_COLOR: '#fff',
};

export interface ICenterContainerProps {
  color?: string;
  width?: string | number;
}

export const CenterContainer = styledComponents.div<ICenterContainerProps>`
  background-color: ${props => props.color};
  width: ${props => props.width || '90%'};
  padding: 20px;
  margin: 20px auto;
  animation: fadeIn 0.5s ease-in;
`;

export interface IPrimaryTextProps {
  color?: string;
}

export const PrimaryText = styledComponents.h1<IPrimaryTextProps>`
  color: ${props => props.color || COLORS.PRIMARY_TEXT};
`;

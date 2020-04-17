import * as React from 'react';
import styledComponents from 'styled-components';

export interface ICenterContainerProps {
  color?: string;
  width?: string | number;
}

export const CenterContainer = React.memo(styledComponents.div<ICenterContainerProps>`
  background-color: ${props => props.color};
  width: ${props => props.width};
  padding: 20px;
  margin: 20px auto;
  animation: fadeIn 0.5s ease-in;
`);

export interface IPrimaryTextProps {
  color?: string;
}

export const PrimaryText = React.memo(styledComponents.h1<IPrimaryTextProps>`
  color: ${props => props.color || props.theme.PRIMARY_TEXT};
`);

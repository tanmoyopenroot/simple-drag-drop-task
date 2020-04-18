import * as React from 'react';
import styledComponents from 'styled-components';

export interface IButtonProps {
  width?: string;
}

export const Button = React.memo(styledComponents.button<IButtonProps>`
  background-image: ${props => props.theme.ACTIONABLE_BACKGROUND_IMAGE};
  color: ${props => props.theme.PRIMARY_TEXT};
  font-size: ${props => props.theme.FONT && props.theme.FONT.MEDIUM};
  border-radius: ${props => props.theme.RADIUS};
  width: ${props => props.width || '100%'};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .66rem 1rem;
`);

export default Button;

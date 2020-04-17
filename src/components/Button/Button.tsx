import * as React from 'react';

import { ButtonWrapper } from './Button.styles';

export interface ButtonProps {
  children?: React.ReactChild;
  action: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    action,
  } = props;

  return (
    <ButtonWrapper onClick={action}>
      {children}
    </ButtonWrapper>
  );
};

export default React.memo(Button);

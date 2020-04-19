import * as React from 'react';

import {
  DialogOverlay,
  DialogWrapper,
} from './Dialog.styles';

export interface IDialogProps {
  open: boolean;
  children?: React.ReactChild;
}

export const Dialog: React.FC<IDialogProps> = (props) => {
  const {
    open,
    children,
  } = props;

  if (!open) {
    return null;
  }

  return (
    <DialogOverlay open={open}>
      <DialogWrapper>
        {children}
      </DialogWrapper>
    </DialogOverlay>
  );
};

export default Dialog;

import * as React from 'react';

import { DialogWrapper } from './Dialog.styles'; 

export interface IDialogProps {
  children?: React.ReactChild;
}

const Dialog = React.forwardRef<HTMLDialogElement, IDialogProps>(({ children }, ref) => (
  <DialogWrapper ref={ref}>
    {children}
  </DialogWrapper>
));

export default React.memo(Dialog);

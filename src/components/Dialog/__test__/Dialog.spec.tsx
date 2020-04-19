import * as React from 'react';
import { mount } from 'enzyme';

import {
  Dialog,
  IDialogProps,
} from '../Dialog';

describe('Testing <Button />', () => {
  const dialogRef = React.createRef<HTMLDialogElement>();

  const wrapper = mount<IDialogProps, {}>(
    (
      <Dialog ref={dialogRef}>
        Some Content
      </Dialog>
    ),
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toEqual('Some Content');
    expect(wrapper.find('[forwardedRef]').text()).toEqual('Some Content');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

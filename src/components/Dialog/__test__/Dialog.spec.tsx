import * as React from 'react';
import { mount } from 'enzyme';

import {
  Dialog,
  IDialogProps,
} from '../Dialog';

describe('Testing <Button />', () => {
  const props: IDialogProps = {
    open: true,
  };

  const wrapper = mount<IDialogProps, {}>(
    (
      <Dialog open={props.open}>
        Some Content
      </Dialog>
    ),
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toEqual('Some Content');

    expect(wrapper.html()).toMatchSnapshot();
  });
});

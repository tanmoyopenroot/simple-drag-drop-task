import * as React from 'react';
import { mount } from 'enzyme';

import {
  Button,
  IButtonProps,
} from '../Button';

describe('Testing <Button />', () => {
  const handleOnClick = jest.fn();
  const props: IButtonProps = {
    width: '100px',
  };

  const wrapper = mount<IButtonProps, {}>(
    (
      <Button
        {...props}
        onClick={handleOnClick}
      >
        Click Me!
      </Button>
    ),
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.text()).toEqual('Click Me!');
    expect(wrapper.props().width).toEqual(props.width);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should be able to invoke onClick', () => {
    wrapper.simulate('click');
    expect(handleOnClick).toBeCalledTimes(1);

    expect(wrapper.html()).toMatchSnapshot();
  });
});

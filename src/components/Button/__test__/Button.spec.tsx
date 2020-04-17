import * as React from 'react';
import { mount } from 'enzyme';

import Button, { ButtonProps } from '../Button';
import { ButtonWrapper } from '../Button.styles';

describe('Testing <Button />', () => {
  const props: ButtonProps = {
    action: jest.fn(),
  };
  const wrapper = mount<ButtonProps, {}>(<Button {...props}>Click Me!</Button>);

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.props().action).toEqual(props.action);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to invoke onClick', () => {
    wrapper.find(ButtonWrapper).simulate('click');
    expect(props.action).toBeCalledTimes(1);
  });
});

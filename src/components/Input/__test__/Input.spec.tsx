import * as React from 'react';
import { mount } from 'enzyme';

import Input, { IInputProps, IInputState } from '../Input';
import { InputElement } from '../Input.styles';

describe('Testing <Input />', () => {
  const props: IInputProps = {
    autoFocus: true,
    defaultValue: 'abc',
    type: Input.Type.TEXT,
    onBlur: jest.fn(),
    onChange: jest.fn(),
  };
  const wrapper = mount<IInputProps, IInputState>(<Input {...props}/>);

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.props().autoFocus).toEqual(props.autoFocus);
    expect(wrapper.props().defaultValue).toEqual(props.defaultValue);
    expect(wrapper.props().type).toEqual(props.type);
    expect(wrapper.props().onBlur).toEqual(props.onBlur);
    expect(wrapper.props().onChange).toEqual(props.onChange);
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to change input value', () => {
    expect(wrapper.state().query).toBe(props.defaultValue);

    wrapper
      .find(InputElement)
      .simulate('change', { target: { value: 'newChange' } });
    expect(wrapper.state().query).toBe('newChange');
    expect(props.onChange).toBeCalledWith('newChange');

    wrapper
      .find(InputElement)
      .simulate('blur', { target: { value: 'newBlur' } });
    expect(wrapper.state().query).toBe('newBlur');
    expect(props.onBlur).toBeCalledWith('newBlur');
  });
});

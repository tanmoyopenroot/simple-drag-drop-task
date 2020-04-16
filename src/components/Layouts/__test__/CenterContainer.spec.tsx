import * as React from 'react';
import { shallow } from 'enzyme';

import {
  CenterContainer,
  ICenterContainerProps,
} from '../index';

describe('Testing <CenterContainer />', () => {
  const props: ICenterContainerProps = {
    width: '100%',
    color: 'gray',
  };
  const wrapper = shallow<ICenterContainerProps>(
    <CenterContainer {...props}>Container</CenterContainer>,
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.props().width).toEqual(props.width);
    expect(wrapper.props().color).toEqual(props.color);
    expect(wrapper).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import {
  TextHeader,
  ITextHeaderProps,
} from '../index';

describe('Testing <CenterContainer />', () => {
  const props: ITextHeaderProps = {
    color: 'gray',
  };
  const wrapper = shallow<ITextHeaderProps>(
    <TextHeader {...props}>Some Text</TextHeader>,
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.props().color).toEqual(props.color);
    expect(wrapper).toMatchSnapshot();
  });
});

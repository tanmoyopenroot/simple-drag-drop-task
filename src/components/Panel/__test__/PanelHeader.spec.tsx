import * as React from 'react';
import { shallow } from 'enzyme';

import {
  PanelHeader,
  IPanelHeaderProps,
} from '../PanelHeader';

describe('Testing <CenterContainer />', () => {
  const props: IPanelHeaderProps = {
    color: 'gray',
  };
  const wrapper = shallow<IPanelHeaderProps>(
    <PanelHeader {...props}>Some Text</PanelHeader>,
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.props().color).toEqual(props.color);
    expect(wrapper).toMatchSnapshot();
  });
});

import * as React from 'react';
import { shallow } from 'enzyme';

import {
  Panel,
  IPanelProps,
} from '../Panel';

describe('Testing <Panel />', () => {
  const props: IPanelProps = {
    backgroundColor: 'gray',
  };
  const wrapper = shallow<IPanelProps>(
    <Panel {...props}>Some Text</Panel>,
  );

  it('should be able to render with props', () => {
    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.props().backgroundColor).toEqual(props.backgroundColor);
    expect(wrapper).toMatchSnapshot();
  });
});

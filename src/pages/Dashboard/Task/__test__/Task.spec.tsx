import * as React from 'react';
import { mount } from 'enzyme';
import initalState from '../../../../data/inital-state';

import TaskActions from '../TaskActions';
import Task, {
  ITaskProps,
  ITaskState,
} from '../Task';
import {
  TaskBody,
  TaskWrapper,
} from '../Task.styles';

describe('Test <Task />', () => {
  const panelId = initalState.panels.panelsID[0];
  const panel = initalState.panels.panelsHash[panelId];
  const taskId = initalState.tasks.tasksIDByPanel[panel.id][0];
  const task = initalState.tasks.tasksHash[taskId];

  const props: ITaskProps = {
    id: task.id,
    body: task.body,
    onDrag: jest.fn(),
    onChange: jest.fn(),
    onDragStart: jest.fn(),
  };
  const wrapper = mount<Task, ITaskState, ITaskProps>(
    <Task {...props}/>,
  );
  const wrapperInstance = wrapper.instance();

  it('should be able to render with props', () => {
    expect(wrapperInstance.props.id).toEqual(props.id);
    expect(wrapperInstance.props.body).toEqual(props.body);
    expect(wrapperInstance.props.onDrag).toEqual(props.onDrag);
    expect(wrapperInstance.props.onChange).toEqual(props.onChange);
    expect(wrapperInstance.props.onDragStart).toEqual(props.onDragStart);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render task', () => {
    expect(wrapperInstance.state.isEditing).toBeFalsy();
    expect(wrapper.find(TaskWrapper).exists()).toBeTruthy();

    expect(
      wrapper
        .find(TaskWrapper)
        .find(TaskActions)
        .exists(),
    ).toBeTruthy();

    expect(
      wrapper
        .find(TaskWrapper)
        .find(TaskBody)
        .exists(),
    ).toBeTruthy();

    expect(
      wrapper
      .find(TaskWrapper)
      .find(TaskBody),
    )
    .toHaveLength(1);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call toggleEdit method', () => {
    const wrapperInstance = wrapper.instance() as Task;

    expect(wrapperInstance.state.isEditing).toBeFalsy();
    wrapperInstance.toggleEdit();
    expect(wrapperInstance.state.isEditing).toBeTruthy();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should call handleOnBlur method', () => {
    const { id } = props;

    const wrapperInstance = wrapper.instance() as Task;

    wrapperInstance.handleOnBlur('Edited Task');
    expect(props.onChange).toBeCalledWith('Edited Task', id);
    expect(props.onChange).toBeCalledTimes(1);

    expect(wrapper.html()).toMatchSnapshot();
  });
});

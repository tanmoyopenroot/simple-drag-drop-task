import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import initalState from '../../../../data/inital-state';
import {
  ADD_TASK,
  EDIT_TASK,
} from '../../../../actions/types';
import {
  Panel,
  IPanelProps,
} from '../Panel';
import {
  PanelContainer,
  PanelHeader,
  TasksContainer,
  TaskContainer,
} from '../Panel.styles';

describe('Test <Panel />', () => {
  let props: IPanelProps;
  let wrapper: ReactWrapper<IPanelProps, {}>;

  const panelId = initalState.panels.panelsID[0];
  const panel = initalState.panels.panelsHash[panelId];

  beforeEach(() => {
    props = {
      panel,
      tasks: initalState.tasks,
      moveTaskAboveId: '',
      onTaskDrag: jest.fn(),
      dispatch: jest.fn(),
    };
    wrapper = mount<Panel, IPanelProps>(<Panel {...props}/>);
  });

  it('should be able to render with props', () => {
    const wrapperInstance = wrapper.instance() as Panel;

    expect(wrapper.length).toEqual(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapperInstance.props.tasks).toEqual(props.tasks);
    expect(wrapperInstance.props.moveTaskAboveId).toEqual(props.moveTaskAboveId);
    expect(wrapperInstance.props.dispatch).toEqual(props.dispatch);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all tasks', () => {
    const {
      panel: {
        title,
        id,
      },
      tasks: {
        tasksIDByPanel,
      },
    } = props;

    expect(wrapper.find(PanelContainer).exists()).toBeTruthy();

    expect(wrapper.find(PanelHeader).exists()).toBeTruthy();
    expect(wrapper.find(PanelHeader).text()).toEqual(title);

    expect(
      wrapper
        .find(PanelContainer)
        .find(TasksContainer)
        .exists(),
    ).toBeTruthy();

    expect(
      wrapper
        .find(TasksContainer)
        .find(TaskContainer),
      )
    .toHaveLength(tasksIDByPanel[id].length);
  });

  it('should call handleChangeTask method', () => {
    const {
      panel: {
        id,
      },
      tasks: {
        tasksIDByPanel,
        tasksHash,
      },
    } = props;

    const taskId = tasksIDByPanel[id][0];
    const task = tasksHash[taskId];

    const expectedAction = {
      type: EDIT_TASK,
      payload: {
        id: task.id,
        body: 'Edited Task',
      },
    };

    const wrapperInstance = wrapper.instance() as Panel;

    wrapperInstance.handleChangeTask(
      'Edited Task',
      task.id,
    );
    expect(props.dispatch).toBeCalledWith(expectedAction);
    expect(props.dispatch).toBeCalledTimes(1);
  });

  it('should call handleAddTask method', () => {
    const {
      panel: {
        id,
      },
    } = props;

    const expectedAction = {
      type: ADD_TASK,
      payload: {
        panelId: id,
        body: 'New Task',
      },
    };

    const wrapperInstance = wrapper.instance() as Panel;

    wrapperInstance.handleAddTask('New Task');
    expect(props.dispatch).toBeCalledWith(expectedAction);
    expect(props.dispatch).toBeCalledTimes(1);
  });
});

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Task from '../Task/Task';
import AddTask from '../Task/AddTask';

import { IAppState } from '../../../common/state';
import { tasksSelector } from '../../../selectors/task';
import {
  TasksStateType,
  addTask,
  moveTask,
  editTask,
} from '../../../actions/task';
import { moveTaskAboveId } from '../../../selectors/move';
import {
  moveFrom,
  moveTo,
} from '../../../actions/move';
import { IPanelModal } from '../../../modals/panel';

import {
  PanelHeader,
  PanelContainer,
  TasksContainer,
  TaskContainer,
} from './Panel.styles';

export interface IMapStateToProps {
  tasks: TasksStateType;
  moveTaskAboveId: string;
}

export interface IPanelProps extends IMapStateToProps {
  dispatch: Dispatch;
  panel: IPanelModal;
}

export class Panel extends React.PureComponent<IPanelProps, {}> {
  private renderPanelHeader = (title: string) => (
    <PanelHeader>
      {title}
    </PanelHeader>
  )

  private handleAddTask = (body: string) => {
    const {
      dispatch,
      panel: {
        id,
      },
    } = this.props;
    dispatch(addTask({
      body,
      panelId: id,
    }));

    console.log('add task', body);
  }

  private renderAddTask = () => <AddTask onCreate={this.handleAddTask} />;

  private handleTaskDragOver = (id: string) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      const {
        moveTaskAboveId,
        dispatch,
        panel,
      } = this.props;

      if (moveTaskAboveId === id) {
        return;
      }

      if (moveTaskAboveId !== id) {
        dispatch(moveTo({
          panelId: panel.id,
          taskId: id,
        }));
      }

      // console.log('handleTaskDragOver', event, id, panelId);
    }

  public handleTaskDragStart = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const { dispatch, panel } = this.props;
    console.log('handleTaskDragStart', event, id);
    dispatch(moveFrom({
      panelId: panel.id,
      taskId: id,
    }));
    dispatch(moveTo({
      panelId: panel.id,
      taskId: id,
    }));
  }

  public handleTaskDragEnd = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const { dispatch } = this.props;

    // console.log('handleTaskDragEnd', event.target, id);
    // dispatch(moveTo({
    //   panelId: '',
    //   taskId: '',
    // }));
  }

  private handleChangeTask = (body: string, id: string) => {
    const { dispatch } = this.props;

    dispatch(editTask({
      id,
      body,
    }));
  }

  private renderTask = (id: string) => {
    const {
      tasks: {
        tasksHash,
      },
    } = this.props;
    const { moveTaskAboveId } = this.props;
    const task = tasksHash[id];

    return (
      <TaskContainer
        key={id}
        placeAboveIndicator={moveTaskAboveId === id}
        onDragOver={this.handleTaskDragOver(id)}
      >
        <Task
          id={id}
          body={task.body}
          onChange={this.handleChangeTask}
          onDragStart={this.handleTaskDragStart}
          onDragEnd={this.handleTaskDragEnd}
        />
      </TaskContainer>
    );
  }

  private renderTasks = (panelId: string) => {
    const {
      tasks: {
        tasksIDByPanel,
      },
    } = this.props;

    const tasks = tasksIDByPanel[panelId] || [];

    return (
      <TasksContainer>
        {tasks.map(id => this.renderTask(id))}
        {this.renderAddTask()}
      </TasksContainer>
    );
  }

  private handlePanelDragOver = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    // console.log('handlePanelDragOver');
  }

  private handleDropOverPanel = (event: React.MouseEvent<HTMLDivElement>) => {
    const { dispatch, panel, moveTaskAboveId  } = this.props;

    // console.log('handleDropOverPanel', panel.id, event.target);
    console.log('Test 1', moveTaskAboveId);
    dispatch(moveTask());
    console.log('Test 2', moveTaskAboveId);
    dispatch(moveTo({
      panelId: '',
      taskId: '',
    }));
  }

  // private handleDropOverPanelEnd = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const { dispatch, panel } = this.props;

  //   console.log('handleDropOverPanelEnd', panel.id, event.target);
  //   dispatch(moveTo({
  //     panelId: panel.id,
  //     taskId: '',
  //   }));
  // }

  public render() {
    const { panel } = this.props;

    return (
      <PanelContainer
        key={panel.id}
        onDragOver={this.handlePanelDragOver}
        onDrop={this.handleDropOverPanel}
        // onDragEnd={this.handleDropOverPanelEnd}
      >
        {this.renderPanelHeader(panel.title)}
        {this.renderTasks(panel.id)}
      </PanelContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  tasks: tasksSelector(state),
  moveTaskAboveId: moveTaskAboveId(state),
});

export default connect<IMapStateToProps,  {}, {}, IAppState>(mapStateToProps)(Panel);

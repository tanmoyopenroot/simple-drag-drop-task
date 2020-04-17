import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Task from '../Task/Task';
import AddTask from '../Task/AddTask';

import { IAppState } from '../../common/state';
import { tasksSelector } from '../../selectors/task';
import { TasksStateType } from '../../actions/task';
import { IPanelModal } from '../../modals/panel';

import {
  PanelHeader,
  PanelContainer,
  TasksContainer,
  TaskContainer,
} from './Panel.styles';

export interface IMapStateToProps {
  tasks: TasksStateType;
}

export interface IPanelProps extends IMapStateToProps {
  dispatch: Dispatch;
  panel: IPanelModal;
  placeAboveTaskId: string;
  onPlaceAboveTaskIdChange: (id: string) => void;
}

export class Panel extends React.Component<IPanelProps, {}> {

  public shouldComponentUpdate(nextProps: IPanelProps) {
    const {
      panel: {
        id,
      },
      placeAboveTaskId,
      tasks: {
        tasksIDByPanel,
      },
    } = this.props;

    return id !== nextProps.panel.id ||
      nextProps.tasks.tasksIDByPanel[id].includes(nextProps.placeAboveTaskId) ||
      tasksIDByPanel[id].includes(placeAboveTaskId);
  }

  private renderPanelHeader = (title: string) => (
    <PanelHeader>
      {title}
    </PanelHeader>
  )

  private handleAddTask = () => {
    console.log('Add Task to Panel');
  }

  private renderAddTask = () => <AddTask onAddClick={this.handleAddTask} />;

  private handleTaskDragOver = (id: string, panelId: string) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      const {
        placeAboveTaskId,
        onPlaceAboveTaskIdChange,
      } = this.props;

      if (placeAboveTaskId === id) {
        return;
      }

      if (placeAboveTaskId !== id) {
        onPlaceAboveTaskIdChange(id);
      }

      console.log('handleTaskDragOver', event, id, panelId);
    }

  public handleTaskDragStart = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const { onPlaceAboveTaskIdChange } = this.props;
    console.log('handleTaskDragStart', event, id);
    onPlaceAboveTaskIdChange(id);
  }

  public handleTaskDragEnd = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const { onPlaceAboveTaskIdChange } = this.props;

    console.log('handleTaskDragEnd', event.target, id);
    onPlaceAboveTaskIdChange('');
  }

  private renderTask = (id: string, panelId: string) => {
    const {
      tasks: {
        tasksHash,
      },
    } = this.props;
    const { placeAboveTaskId } = this.props;

    const task = tasksHash[id];

    return (
      <TaskContainer
        key={task.id}
        placeAboveIndicator={placeAboveTaskId === task.id}
        onDragOver={this.handleTaskDragOver(id, panelId)}
      >
        <Task
          id={task.id}
          body={task.body}
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

    const tasks = tasksIDByPanel[panelId];

    return (
      <TasksContainer>
        {tasks.map(id => this.renderTask(id, panelId))}
        {this.renderAddTask()}
      </TasksContainer>
    );
  }

  private handlePanelDragOver = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  private onTaskDropOverPanel = (panelId: string) => (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('onTaskDropOverPanel', panelId, event.target);
  }

  public render() {
    const { panel } = this.props;

    return (
      <PanelContainer
        key={panel.id}
        onDragOver={this.handlePanelDragOver}
        onDrop={this.onTaskDropOverPanel(panel.id)}
      >
        {this.renderPanelHeader(panel.title)}
        {this.renderTasks(panel.id)}
      </PanelContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  tasks: tasksSelector(state),
});

export default connect<IMapStateToProps,  {}, {}, IAppState>(mapStateToProps)(Panel);

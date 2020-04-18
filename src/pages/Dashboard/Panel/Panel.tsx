import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import idGenerator from '../../../utils/id-generator';
import { IPanelModal } from '../../../modals/panel';
import { IAppState } from '../../../common/state';
import { tasksSelector } from '../../../selectors/task';
import { moveTaskAboveId } from '../../../selectors/move';
import {
  TasksStateType,
  addTask,
  moveTask,
  editTask,
} from '../../../actions/task';
import {
  moveFrom,
  moveTo,
} from '../../../actions/move';
import {
  Task,
  AddTask,
} from '../Task';
import {
  PanelHeader,
  PanelContainer,
  TasksContainer,
  TaskContainer,
  NoTaskDropArea,
} from './Panel.styles';

export interface IMapStateToProps {
  tasks: TasksStateType;
  moveTaskAboveId: string;
}

export interface IPanelProps extends IMapStateToProps {
  dispatch: Dispatch;
  onTaskDrag: (event: React.MouseEvent<HTMLDivElement>) => void;
  panel: IPanelModal;
}

export class Panel extends React.PureComponent<IPanelProps, {}> {
  private dropAreaId: string = idGenerator();

  private renderPanelHeader = (title: string) => (
    <PanelHeader>
      {title}
    </PanelHeader>
  )

  public handleAddTask = (body: string) => {
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
  }

  private renderAddTask = () => <AddTask onCreate={this.handleAddTask} />;

  private handleTaskDragOver = (id: string) => () => {
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
  }

  private handleTaskDragStart = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    const { dispatch, panel } = this.props;

    dispatch(moveFrom({
      panelId: panel.id,
      taskId: id,
    }));
    dispatch(moveTo({
      panelId: panel.id,
      taskId: id,
    }));
  }

  public handleChangeTask = (body: string, id: string) => {
    const { dispatch } = this.props;

    dispatch(editTask({
      id,
      body,
    }));
  }

  private handleOnDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    const { onTaskDrag } = this.props;

    onTaskDrag(event);
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
          onDrag={this.handleOnDrag}
          onChange={this.handleChangeTask}
          onDragStart={this.handleTaskDragStart}
        />
      </TaskContainer>
    );
  }

  private renderTaskDropArea = () => {
    const {
      tasks: {
        tasksIDByPanel,
      },
      panel: {
        id,
      },
      moveTaskAboveId,
    } = this.props;

    const tasks = tasksIDByPanel[id] || [];
    const taskExists = tasks.length;

    return (
      <React.Fragment>
        {
          !taskExists && (
            <TaskContainer
              key={this.dropAreaId}
              placeAboveIndicator={moveTaskAboveId === this.dropAreaId}
              onDragOver={this.handleTaskDragOver(this.dropAreaId)}
            >
              <NoTaskDropArea>
                DROP HERE
              </NoTaskDropArea>
            </TaskContainer>
          )
        }
      </React.Fragment>
    );
  }

  private renderTasks = () => {
    const {
      tasks: {
        tasksIDByPanel,
      },
      panel: {
        id,
      },
    } = this.props;

    const tasks = tasksIDByPanel[id] || [];

    return (
      <TasksContainer>
        {tasks.map(id => this.renderTask(id))}
        {this.renderTaskDropArea()}
      </TasksContainer>
    );
  }

  private handlePanelDragOver = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  private handleDropOverPanel = () => {
    const { dispatch  } = this.props;
    dispatch(moveTask());
    dispatch(moveTo({
      panelId: '',
      taskId: '',
    }));
  }

  public render() {
    const { panel } = this.props;

    return (
      <PanelContainer
        key={panel.id}
        onDragOver={this.handlePanelDragOver}
        onDrop={this.handleDropOverPanel}
      >
        {this.renderPanelHeader(panel.title)}
        {this.renderTasks()}
        {this.renderAddTask()}
      </PanelContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  tasks: tasksSelector(state),
  moveTaskAboveId: moveTaskAboveId(state),
});

export default connect<IMapStateToProps,  {}, {}, IAppState>(mapStateToProps)(Panel);

import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../common/state';
import { CenterContainer } from '../../components/Layouts';
import TextHeader from '../../components/TextHeader';
import Task from '../../components/Task/Task';
import AddTask from '../../components/Task/AddTask';
import {
  Panel,
  PanelHeader,
} from '../../components/Panel';
import {
  PanelsContainer,
  TasksContainer,
  TaskWrapper,
} from './Dashbaord.styles';

import { panelsSelector } from '../../selectors/panel';
import { PanelsStateType } from '../../actions/panel';
import { tasksSelector } from '../../selectors/task';
import { TasksStateType } from '../../actions/task';

export interface IMapStateToProps {
  panels: PanelsStateType;
  tasks: TasksStateType;
}

export interface IDashdboardProps extends IMapStateToProps {}

export class Dashdboard extends React.PureComponent<IDashdboardProps, {}>{
  private static hoveredPanelId: string | null = null;
  private static hoveredTaskId: string | null = null;

  private setHoveredPanelId = (id: string | null) => {
    Dashdboard.hoveredPanelId = id;
  }

  private setHoveredTaskId = (id: string | null) => {
    Dashdboard.hoveredTaskId = id;
  }

  private renderPanelHeader = (title: string) => (
    <PanelHeader>
      {title}
    </PanelHeader>
  )

  public handleDragStart = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    console.log('handleDragStart', event, id);
  }

  public handleDragEnd = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    console.log('handleDragEnd', event, id);
    this.setHoveredPanelId(null);
  }

  private handleTaskDragOver = (id: string, panelId: string) =>
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (Dashdboard.hoveredTaskId === id) {
        return;
      }

      if (Dashdboard.hoveredTaskId !== id) {
        this.setHoveredTaskId(id);
      }

      console.log('handleTaskDragOver', event, id, panelId);
    }

  private renderTask = (id: string, panelId: string) => {
    const {
      tasks: {
        tasksHash,
      },
    } = this.props;

    const task = tasksHash[id];

    return (
      <TaskWrapper
        key={task.id}
        onDragOver={this.handleTaskDragOver(id, panelId)}
      >
        <Task
          id={task.id}
          body={task.body}
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd}
        />
      </TaskWrapper>
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
        {this.renderAddTask(panelId)}
      </TasksContainer>
    );
  }

  private handleAddTask = (id: string) => () => {
    console.log('Add Task to Panel', id);
  }

  private renderAddTask = (id: string) => <AddTask onAddClick={this.handleAddTask(id)}/>;

  private handlePanelDragOver = (id: string) => (event: React.MouseEvent<HTMLDivElement>) => {
    if (Dashdboard.hoveredPanelId === id) {
      return;
    }

    if (Dashdboard.hoveredPanelId !== id) {
      this.setHoveredPanelId(id);
    }

    console.log('handlePanelDragOver', event, id);
  }

  private renderPanel = (id: string) => {
    const {
      panels: {
        panelsHash,
      },
    } = this.props;

    const panel = panelsHash[id];

    return (
      <Panel
        key={panel.id}
        onDragOver={this.handlePanelDragOver(panel.id)}
      >
        {this.renderPanelHeader(panel.title)}
        {this.renderTasks(panel.id)}
      </Panel>
    );
  }

  private renderPanels = () => {
    const { panels } = this.props;

    return (
      <PanelsContainer>
        {panels.panelsID.map(id => this.renderPanel(id))}
      </PanelsContainer>
    );
  }

  public render() {
    return (
      <CenterContainer>
        <TextHeader>
          Welcome Board
        </TextHeader>
        {this.renderPanels()}
      </CenterContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  panels: panelsSelector(state),
  tasks: tasksSelector(state),
});

export default connect<IMapStateToProps,  {}, {}, IAppState>(mapStateToProps)(Dashdboard);

import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../common/state';
import { CenterContainer } from '../../components/Layouts';
import TextHeader from '../../components/TextHeader';
import Task from '../../components/Task/Task';
import {
  Panel,
  PanelHeader,
} from '../../components/Panel';
import {
  PanelsContainer,
  TasksContainer,
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
  public renderPanelHeader = (title: string) => (
    <PanelHeader>
      {title}
    </PanelHeader>
  )

  public renderTask = (id: string) => {
    const {
      tasks: {
        tasksHash,
      },
    } = this.props;

    const task = tasksHash[id];

    return (
      <Task
        key={task.id}
        id={task.id}
        body={task.body}
      />
    );
  }

  public renderTasks = (panelId: string) => {
    const {
      tasks: {
        tasksIDByPanel,
      },
    } = this.props;

    const tasks = tasksIDByPanel[panelId];

    return (
      <TasksContainer>
        {tasks.map(id => this.renderTask(id))}
      </TasksContainer>
    );
  }

  public renderPanel = (id: string) => {
    const {
      panels: {
        panelsHash,
      },
    } = this.props;

    const panel = panelsHash[id];

    return (
      <Panel key={panel.id}>
        {this.renderPanelHeader(panel.title)}
        {this.renderTasks(panel.id)}
      </Panel>
    );
  }

  public renderPanels = () => {
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

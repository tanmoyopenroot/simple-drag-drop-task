import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAppState } from '../../common/state';
import { CenterContainer } from '../../components/Layouts';

import Panel from '../../components/Panel';
import TextHeader from '../../components/TextHeader';
import AddPanel from '../../components/Panel/AddPanel';
import { PanelsContainer } from './Dashbaord.styles';

import { panelsSelector } from '../../selectors/panel';
import { PanelsStateType } from '../../actions/panel';
import { tasksSelector } from '../../selectors/task';
import { TasksStateType } from '../../actions/task';

export interface IMapStateToProps {
  panels: PanelsStateType;
  tasks: TasksStateType;
}

export interface IDashdboardProps extends IMapStateToProps {
  dispatch: Dispatch;
}

export interface IDashboardState {
  placeAboveTaskId: string;
}

export class Dashdboard extends React.PureComponent<IDashdboardProps, IDashboardState>{
  public state: IDashboardState = {
    placeAboveTaskId: '',
  };

  private handlePlaceAboveTaskIsChange = (id: string) => {
    this.setState({ placeAboveTaskId: id });
  }

  private renderPanel = (id: string) => {
    const {
      panels: {
        panelsHash,
      },
    } = this.props;
    const { placeAboveTaskId } = this.state;

    const panel = panelsHash[id];

    return (
      <Panel
        key={panel.id}
        panel={panel}
        placeAboveTaskId={placeAboveTaskId}
        onPlaceAboveTaskIdChange={this.handlePlaceAboveTaskIsChange}
      />
    );
  }

  private handleAddPanel = () => {
    console.log('add panel');
  }

  private renderPanels = () => {
    const { panels } = this.props;

    return (
      <PanelsContainer>
        {panels.panelsID.map(id => this.renderPanel(id))}
        <AddPanel onAddClick={this.handleAddPanel}/>
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

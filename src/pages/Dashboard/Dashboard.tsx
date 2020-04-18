import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IAppState } from '../../common/state';
import { panelsSelector } from '../../selectors/panel';
import { tasksSelector } from '../../selectors/task';
import { TasksStateType } from '../../actions/task';
import {
  PanelsStateType,
  addPanel,
} from '../../actions/panel';
import { CenterContainer } from '../../components/Layouts';
import TextHeader from '../../components/TextHeader';
import {
  Panel,
  AddPanel,
} from './Panel';
import { PanelsContainer } from './Dashbaord.styles';

export interface IMapStateToProps {
  panels: PanelsStateType;
  tasks: TasksStateType;
}

export interface IDashdboardProps extends IMapStateToProps {
  dispatch: Dispatch;
}

export class Dashdboard extends React.PureComponent<IDashdboardProps, {}>{
  private static viewportWidth: number = document.documentElement.clientWidth;

  private panelContainerRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  private autoScrollLocked: boolean = false;

  private handleOnTaskDrag = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      !this.panelContainerRef.current
      || this.autoScrollLocked
    ) {
      return;
    }

    this.autoScrollLocked = true;

    const edgeSize = 100;
    const viewportX = event.clientX;
    const viewportWidth = Dashdboard.viewportWidth;
    const edgeLeft = edgeSize;
    const edgeRight = (viewportWidth - edgeSize);
    const isInLeftEdge = (viewportX < edgeLeft);
    const isInRightEdge = (viewportX > edgeRight);

    if (isInLeftEdge) {
      this.panelContainerRef.current.scroll({
        left: viewportX - 100,
        behavior: 'smooth',
      });
    } else if (isInRightEdge) {
      this.panelContainerRef.current.scroll({
        left: viewportX + 100,
        behavior: 'smooth',
      });
    }

    this.autoScrollLocked = false;
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
        onTaskDrag={this.handleOnTaskDrag}
        panel={panel}
      />
    );
  }

  private handleAddPanel = (title: string) => {
    const { dispatch } = this.props;

    dispatch(addPanel({ title }));
  }

  private renderPanels = () => {
    const { panels } = this.props;

    return (
      <PanelsContainer ref={this.panelContainerRef}>
        {panels.panelsID.map(id => this.renderPanel(id))}
        <AddPanel onCreate={this.handleAddPanel}/>
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

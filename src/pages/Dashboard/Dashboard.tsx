import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../common/state';
import { CenterContainer } from '../../components/Layouts';
import TextHeader from '../../components/TextHeader';
import {
  Panel,
  PanelHeader,
} from '../../components/Panel';
import { PanelsContainer } from './Dashbaord.styles';

import { panelsSelector } from '../../selectors/panel';
import { PanelsStateType } from '../../actions/panel';

export interface IMapStateToProps {
  panels: PanelsStateType;
}

export interface IDashdboardProps extends IMapStateToProps {}

export class Dashdboard extends React.PureComponent<IDashdboardProps, {}>{
  public renderPanelHeader = (title: string) => (
    <PanelHeader>
      {title}
    </PanelHeader>
  )

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
      </Panel>
    );
  }

  public renderPanels = () => {
    const { panels } = this.props;

    return (
      <PanelsContainer>
        {
          panels.panelsID.map(id => this.renderPanel(id))
        }
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
});

export default connect<IMapStateToProps,  {}, {}, IAppState>(mapStateToProps)(Dashdboard);

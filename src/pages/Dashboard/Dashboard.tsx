import * as React from 'react';
import { connect } from 'react-redux';

import { CenterContainer } from '../../components/Layouts';
import TextHeader from '../../components/TextHeader';
import { IAppState } from '../../common/state';

export interface IMapStateToProps {}

export interface IDashdboardProps extends IMapStateToProps{}

export class Dashdboard extends React.PureComponent<IDashdboardProps, {}>{
  public render() {
    return (
      <CenterContainer>
        <TextHeader>
          Welcome Board
        </TextHeader>
        Test
      </CenterContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({});

export default connect<IMapStateToProps,  {}, {}, IAppState>(mapStateToProps)(Dashdboard);

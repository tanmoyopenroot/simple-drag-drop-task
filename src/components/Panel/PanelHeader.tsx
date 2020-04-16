import styledComponents from 'styled-components';
import {
  IPrimaryTextProps,
  PrimaryText,
} from '../Layouts';

export interface IPanelHeaderProps extends IPrimaryTextProps {
  size?: string | number;
}

export const PanelHeader = styledComponents(PrimaryText)<IPanelHeaderProps>`
  font-size: ${props => props.size || '10px'};
`;

export default PanelHeader;

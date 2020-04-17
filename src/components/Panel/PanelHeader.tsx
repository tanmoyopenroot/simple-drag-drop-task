import styledComponents from 'styled-components';
import {
  IPrimaryTextProps,
  PrimaryText,
} from '../Layouts';

export interface IPanelHeaderProps extends IPrimaryTextProps {
  size?: string | number;
}

export const PanelHeader = styledComponents(PrimaryText)<IPanelHeaderProps>`
  font-size: ${props => props.size || props.theme.FONT.MEDIUM};
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`;

export default PanelHeader;

import styledComponents from 'styled-components';
import { COLORS } from '../Layouts';

export interface IPanelProps {
  backgroundColor?: string;
}

export const Panel = styledComponents.div<IPanelProps>`
  background-color: ${props => props.backgroundColor || COLORS.BACKGROUND_COLOR};
  display: inline-block;
  height: 100%;
  min-width: 272px;
  max-width: 272px;
  margin: 0 5px;
  border-radius: 3px;
  padding: 10px;
`;

export default Panel;

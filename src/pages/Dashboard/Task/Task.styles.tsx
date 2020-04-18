import styledComponents from 'styled-components';
import {
  GroupedRow,
  GroupedColumn,
} from '../../../common/styles';

export const TaskWrapper = styledComponents(GroupedRow)`
  background: ${props => props.theme.SECONDARY_BACKGROUND_IMAGE};
  border-radius: ${props => props.theme.RADIUS};
  cursor: grab;
  padding: .66rem 1rem;
  position: relative;
`;

export const TaskActionWrapper = styledComponents(GroupedColumn)`
  color: ${props => props.theme.PRIMARY_TEXT};
  cursor: pointer;
`;

export const TaskBody = styledComponents.div`
  color: ${props => props.theme.PRIMARY_TEXT};
  font-size: ${props => props.theme.FONT && props.theme.FONT.MEDIUM};
`;

export const InputWrapper = styledComponents.div`
  background: ${props => props.theme.SECONDARY_BACKGROUND_IMAGE};
  border-radius: ${props => props.theme.RADIUS};
  cursor: grab;
  padding: .66rem 1rem;
  position: relative;
  margin: 20px 0px;
`;

export const AddTaskWrapper = styledComponents.div`
  margin-top: 20px;
`;

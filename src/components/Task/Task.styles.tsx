import styledComponents from 'styled-components';

const GROUPED_COLUMN = styledComponents.div`
  display: flex;
  flex-direction: column;
`;

const GROUPED_ROW = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TaskWrapper = styledComponents(GROUPED_ROW)`
  background: ${props => props.theme.SECONDARY_BACKGROUND_IMAGE};
  border-radius: 8px;
  cursor: grab;
  padding: .66rem 1rem;
  position: relative;
`;

export const TaskActionWrapper = styledComponents(GROUPED_COLUMN)`
  color: ${props => props.theme.PRIMARY_TEXT};
  cursor: pointer;
`;

export const TaskBody = styledComponents.div`
  color: ${props => props.theme.PRIMARY_TEXT};
  font-size: ${props => props.theme.FONT.MEDIUM};
`;

export const AddTaskWrapper = styledComponents(GROUPED_ROW)`
  background-image: ${props => props.theme.ACTIONABLE_BACKGROUND_IMAGE};
  border-radius: 8px;
  cursor: pointer;
  padding: .66rem 1rem;
  position: relative;
  margin-top: .5rem;

  button {
    color: ${props => props.theme.PRIMARY_TEXT};
  };
`;

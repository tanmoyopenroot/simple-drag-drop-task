import styledComponents from 'styled-components';

const GROUPED_ROW = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddPanelWrapper = styledComponents(GROUPED_ROW)`
  background-image: ${props => props.theme.ACTIONABLE_BACKGROUND_IMAGE};
  border-radius: 3px;
  box-shadow: ${props => props.theme.ELEVATION.ONE};
  margin-right: 10px;
  width: 300px;
  cursor: pointer;
  padding: .66rem 1rem;
  position: relative;
  height: fit-content;

  button {
    color: ${props => props.theme.PRIMARY_TEXT};
  };
`;

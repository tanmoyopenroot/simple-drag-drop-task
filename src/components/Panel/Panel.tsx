import styledComponents from 'styled-components';

export const Panel = styledComponents.div`
  background-image: ${props => props.theme.PRIMARY_BACKGROUND_IMAGE};
  border-radius: 3px;
  box-shadow: ${props => props.theme.ELEVATION.ONE};
  margin-right: 10px;
  width: 370px;
  height: fit-content;
`;

export default Panel;

import styledComponents from 'styled-components';

export const InputElement = styledComponents.textarea`
  color: ${props => props.theme.PRIMARY_TEXT};
  font-size: ${props => props.theme.FONT.MEDIUM};
  width: 95%;
  border: 0px;
  outline: 0px;
  padding: 0px;
  background: transparent;
`;

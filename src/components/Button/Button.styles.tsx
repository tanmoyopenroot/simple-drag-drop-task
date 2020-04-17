import styledComponents from 'styled-components';

export const ButtonWrapper = styledComponents.button`
  background-color: transparent;
  font-size: ${props => props.theme.FONT.MEDIUM};
  border: none;
  padding: 0px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

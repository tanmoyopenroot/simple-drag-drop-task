import styledComponents from 'styled-components';

export const PanelsContainer = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TasksContainer = styledComponents.div`
  padding: 1rem 1.5rem;
`;

export interface ITaskWrapperProps {
  placeAboveIndicator: boolean;
}

export const TaskWrapper = styledComponents.div<ITaskWrapperProps>`
  border-top: 2px solid ${props => props.placeAboveIndicator
    ? props.theme.PRIMARY_TEXT
    : 'transparent'
  };
  transition: 0.2s ease-in-out all;
  padding: 4px 0px;
`;

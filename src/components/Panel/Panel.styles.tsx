import * as React from 'react';
import styledComponents from 'styled-components';
import {
  IPrimaryTextProps,
  PrimaryText,
} from '../Layouts';

const GROUPED_ROW = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export interface IPanelHeaderProps extends IPrimaryTextProps {
  size?: string | number;
}

export const PanelHeader = React.memo(styledComponents(PrimaryText)<IPanelHeaderProps>`
  font-size: ${props => props.size || props.theme.FONT.MEDIUM};
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`);

export const PanelContainer = styledComponents.div`
  background-image: ${props => props.theme.PRIMARY_BACKGROUND_IMAGE};
  border-radius: 3px;
  box-shadow: ${props => props.theme.ELEVATION.ONE};
  margin-right: 10px;
  width: 370px;
  height: fit-content;
`;

export const TasksContainer = styledComponents.div`
  padding: 1rem 1.5rem;
`;

export interface ITaskContainerProps {
  placeAboveIndicator: boolean;
}

export const TaskContainer = styledComponents.div<ITaskContainerProps>`
  border-top: 2px solid ${props => props.placeAboveIndicator
    ? props.theme.PRIMARY_TEXT
    : 'transparent'
  };
  transition: 0.2s ease-in-out all;
  padding: 4px 0px;
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

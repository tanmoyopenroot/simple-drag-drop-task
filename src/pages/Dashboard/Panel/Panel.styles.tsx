import * as React from 'react';
import styledComponents from 'styled-components';
import {
  IPrimaryTextProps,
  PrimaryText,
} from '../../../components/Layouts';

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
  border-radius: ${props => props.theme.RADIUS};
  box-shadow: ${props => props.theme.ELEVATION.ONE};
  margin-right: 10px;

  display: grid;
  grid-template-rows: auto minmax(auto, 1fr) auto;
  max-height: calc(100vh - 11.8rem);
`;

export const TasksContainer = styledComponents.div`
  padding: 1rem 1.5rem;
`;

export interface ITaskContainerProps {
  placeAboveIndicator: boolean;
}

export const TaskContainer = styledComponents.div<ITaskContainerProps>`
  outline: 2px dotted ${props => props.placeAboveIndicator
    ? props.theme.PRIMARY_TEXT
    : 'transparent'
  };
  border-radius: ${props => props.theme.RADIUS};
  transition: 0.2s ease-in-out all;
  margin: 4px 0px;
`;

export const InputWrapper = styledComponents.div`
  background: ${props => props.theme.SECONDARY_BACKGROUND_IMAGE};
  border-radius: ${props => props.theme.RADIUS};
  cursor: grab;
  padding: .66rem 1rem;
  position: relative;
  margin: 20px 0px;
`;

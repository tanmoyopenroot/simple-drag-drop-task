import styledComponents from 'styled-components';

export interface IGroupedRowProps {
  justifyContent?: string;
}

export const GroupedRow = styledComponents.div<IGroupedRowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
`;

export interface IGroupedColumnProps {
  justifyContent?: string;
}

export const GroupedColumn = styledComponents.div<IGroupedColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
`;

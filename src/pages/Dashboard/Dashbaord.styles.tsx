import styledComponents from 'styled-components';

export const PanelsContainer = styledComponents.div`
  display: grid;
  grid-auto-columns: 27rem;
  grid-auto-flow: column;
  grid-column-gap: 1rem;

  align-items: start;
  padding: 0 0.8rem 0.8rem;
  overflow-x: auto;
  height: calc(100vh - 8.6rem);
`;

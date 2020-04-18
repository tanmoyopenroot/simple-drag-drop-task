import styledComponents from 'styled-components';

export const DialogWrapper = styledComponents.dialog`
  background-image: ${props => props.theme.PRIMARY_BACKGROUND_IMAGE};
  border-radius: ${props => props.theme.RADIUS};
  border: none;
  padding: .66rem 1rem;
  box-shadow: ${props => props.theme.ELEVATION && props.theme.ELEVATION.ONE};
  width: 40%;

  &[open] {
    animation: appear 0.1s ease-in-out;
  }

  &::backdrop {
    background: rgba(0,0,0,0.7);
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-3rem);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

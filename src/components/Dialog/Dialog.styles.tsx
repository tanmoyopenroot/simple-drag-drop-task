import styledComponents from 'styled-components';

export interface IDialogOverlay {
  open?: boolean;
}

export const DialogOverlay = styledComponents.div<IDialogOverlay>`
  display: ${props => props.open
    ? 'block'
    : 'none'
  };
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(0,0,0,0.7);
`;

export const DialogWrapper = styledComponents.div`
  background-image: ${props => props.theme.PRIMARY_BACKGROUND_IMAGE};
  border-radius: ${props => props.theme.RADIUS};
  border: none;
  padding: .66rem 1rem;
  box-shadow: ${props => props.theme.ELEVATION && props.theme.ELEVATION.ONE};
  width: 40%;
  animation: appear 0.1s ease-in-out;
  margin: 200px auto;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

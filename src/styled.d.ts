import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    PRIMARY_TEXT: string;
    PRIMARY_BACKGROUND_IMAGE: string;
    SECONDARY_BACKGROUND_IMAGE: string;
    ACTIONABLE_BACKGROUND_IMAGE: string;
    FONT: {
      LARGE: string;
      MEDIUM: string;
    },
    ELEVATION: {
      ONE: string,
    },
  }
}
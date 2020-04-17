import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  html {
    height: 100%;
    width: 100%;
    background-color: #2a385c;
    background-image: linear-gradient(320deg, hsl(215, 10%, 12%) 0% /* down */, hsl(215, 19%, 24%) /* up */ 100%);
  }
`;

export { GlobalStyle };

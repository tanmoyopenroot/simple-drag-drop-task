import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Dashboard from './pages/Dashboard';

import initalState from './data/inital-state';
import { initStore } from './store';

const store = initStore(initalState);

const App  = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </ThemeProvider>
);

export default App;

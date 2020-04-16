import * as React from 'react';
import { Provider } from 'react-redux';

import { initStore } from './store';
import initalState from './data/inital-state';
import Dashboard from './pages/Dashboard';

const store = initStore(initalState);

const App  = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default App;

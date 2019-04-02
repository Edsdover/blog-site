import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { configureStore } from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  // Provider links redux store to any connect function calls in its child components
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

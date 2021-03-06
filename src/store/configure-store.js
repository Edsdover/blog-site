import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import * as Actions from '../actions'

export const history = createHistory();

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      // adds promise handler that returns async data
      applyMiddleware(reduxThunk, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatch(Actions.validateAuth());

  return store;

}

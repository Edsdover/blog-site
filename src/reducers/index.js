import { combineReducers } from 'redux';
import AuthReducer from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  router: routerReducer
});

export default rootReducer;

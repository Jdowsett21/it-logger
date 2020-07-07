import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
import authReducer from './authReducer';
import fetchReducer from './fetchReducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer,
  auth: authReducer,
  fetch: fetchReducer,
});

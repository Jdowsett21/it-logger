import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
//log is basically what we are calling the state object from that reducer
export default combineReducers({
  log: logReducer,
  tech: techReducer,
});

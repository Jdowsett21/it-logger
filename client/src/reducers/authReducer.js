import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../actions/types';

const initialState = {
  token: '',
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      //remove token
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      //do something with token
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: true,
      };
    default:
      return state;
  }
};

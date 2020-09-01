import {
  SIGNUP_SUCCESS,
  IS_ADMIN,
  SIGNUP_ERROR,
  USER_LOADED,
  LOGIN_SUCCESS,
  IS_AUTHENTICATED,
  LOGIN_ERROR,
  LOADING,
  REDIRECT_ON_LOGIN,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: null,
  expiresAt: localStorage.getItem('expiresAt'),
  userInfo: JSON.parse(localStorage.getItem('userInfo')),
  loginSuccess: false,
  signupSuccess: false,
  signupError: '',
  loginError: '',
  loading: false,
  isAuthenticated: false,
  redirectOnLogin: false,
  isAdmin: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT:
      localStorage.removeItem('expiresAt');
      localStorage.removeItem('userInfo');
      return {
        ...state,
        token: null,
        expiresAt: null,
        userInfo: {},
        signupSuccess: '',
        loginSuccess: '',
        isAuthenticated: false,
        loading: false,
        redirectOnLogin: false,
        isAdmin: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loginError: action.payload.error.message,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        userInfo: null,
        loading: false,
        signupError: action.payload.error.message,
      };

    case USER_LOADED:
      return {
        ...state,
        token: action.payload.tokens[action.payload.tokens.length - 1].token,
        userInfo: JSON.parse(localStorage.getItem('userInfo')),
        // token: action.payload.token,
        expiresAt: localStorage.getItem('expiresAt'),
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        expiresAt: localStorage.setItem('expiresAt', action.payload.expiresAt),
        userInfo: localStorage.setItem(
          'userInfo',
          JSON.stringify(action.payload.userInfo)
        ),
        loginSuccess: action.payload.message,
        loading: false,
        redirectOnLogin: true,
      };
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated:
          new Date().getTime() / 1000 < state.expiresAt ? true : false,
      };
    case IS_ADMIN:
      return {
        ...state,
        isAdmin:
          state.userInfo && state.userInfo.role === 'admin' ? true : false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        expiresAt: localStorage.setItem('expiresAt', action.payload.expiresAt),
        userInfo: localStorage.setItem(
          'userInfo',
          JSON.stringify(action.payload.userInfo)
        ),
        signupSuccess: action.payload.message,
        loading: false,
        redirectOnLogin: true,
      };

    case REDIRECT_ON_LOGIN:
      return {
        ...state,
        redirectOnLogin: true,
      };
    default:
      return state;
  }
};

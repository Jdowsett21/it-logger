import {
  DELETE_LOG,
  FIND_TECHS_LOGS,
  SEARCH_LOGS,
  UPDATE_TECH_IN_LOG,
  GET_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  ADD_LOG,
  SET_LOADING,
  LOGS_ERROR,
  UPDATE_LOG,
} from '../actions/types';

const initialState = {
  logs: null,
  currentLog: null,
  loading: false,
  error: null,
  oneTechLogs: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    // case UPDATE_TECH_IN_LOG:
    //   return {
    //     ...state,
    //     logs: state.logs.filter(log) => {}
    //   }
    case CLEAR_CURRENT:
      return {
        ...state,
        currentLog: null,
      };
    case SEARCH_LOGS:
      return {
        ...state,
        logs: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentLog: action.payload,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };

    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => action.payload !== log.id),
        loading: false,
      };

    case FIND_TECHS_LOGS:
      return {
        ...state,
        oneTechLogs: state.logs.filter(
          (log) =>
            `${action.payload.firstName} ${action.payload.lastName}` ===
            log.tech
        ),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    case UPDATE_TECH_IN_LOG:
      return {
        ...state,
        logs: state.logs.map((log) => {
          if (log.id === action.payload.data.id) {
            action.payload.data.tech = `${action.payload.tech.firstName} ${action.payload.tech.lastName}`;
            log.tech = `${action.payload.tech.firstName} ${action.payload.tech.lastName}`;
            return action.payload.data;
          } else {
            return log;
          }
        }),
        loading: false,
      };
    default:
      return state;
  }
};

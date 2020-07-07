import {
  DELETE_LOG,
  FIND_TECHS_LOGS,
  SEARCH_LOGS,
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
  categories: ['Server', 'Hard drive', 'Software', 'Development', 'Html'],
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
        logs: state.logs.filter((log) => log._id !== action.payload),
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
          log._id === action.payload._id ? action.payload : log
        ),
      };

    default:
      return state;
  }
};

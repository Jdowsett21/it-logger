import {
  GET_TECHS,
  CLEAR_TECH,
  ADD_TECH,
  SET_TECH,
  DELETE_TECH,
  UPDATE_TECH,
  SET_NEW_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  techs: null,
  selectedTech: null,
  updatedTechName: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };

    case SET_TECH:
      return {
        ...state,
        selectedTech: state.techs.filter(
          (tech) => `${tech.firstName} ${tech.lastName}` === action.payload
        ),
      };

    case CLEAR_TECH:
      return {
        ...state,
        selectedTech: null,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TECH:
      return {
        ...state,
        techs: state.techs.map((tech) =>
          tech.id === action.payload.id ? action.payload : tech
        ),
        loading: false,
      };
    case SET_NEW_TECH:
      return {
        ...state,
        updatedTechName: `${action.payload.firstName} ${action.payload.lastName}`,
      };
    default:
      return state;
  }
};

import {
  GET_TECHS,
  CLEAR_TECH,
  SET_NEW_TECH,
  SET_TECH,
  ADD_TECH,
  UPDATE_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from '../actions/types';
import { authAxios } from '../utils/authFetch';

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await authAxios.get('/techs');

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
    setLoading();
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const setNewTech = (tech) => {
  return {
    type: SET_NEW_TECH,
    payload: tech,
  };
};
export const updateTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await authAxios.put(`/techs/${tech._id}`, tech);

    setLoading();
    dispatch({
      type: UPDATE_TECH,
      payload: data,
    });
    setTech(data);
  } catch (error) {}
};

export const clearTech = () => {
  return {
    type: CLEAR_TECH,
  };
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await authAxios.post('/techs', tech);

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
    setLoading();
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await authAxios.delete(`/techs/${id}`);

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
    setLoading();
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};
export const setTech = (tech) => {
  return {
    type: SET_TECH,
    payload: tech,
  };
};

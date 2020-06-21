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

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/techs');
    const data = await res.json();
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

    const res = await fetch(`/techs/${tech.id}`, {
      method: 'PUT',
      body: JSON.stringify(tech),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
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
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
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

export const setTech = (tech) => {
  return {
    type: SET_TECH,
    payload: tech,
  };
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
    setLoading();
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

import {
  FIND_TECHS_LOGS,
  GET_LOGS,
  ADD_LOG,
  UPDATE_LOG,
  CLEAR_CURRENT,
  SET_LOADING,
  LOGS_ERROR,
  SEARCH_LOGS,
  DELETE_LOG,
  SET_CURRENT,
} from './types';

import { authAxios } from '../utils/authFetch';

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await authAxios.post('/logs', log);

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const { data } = await authAxios.get('/logs');

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const { data } = await authAxios.get(`/logs`, {
      params: {
        text,
      },
    });
    dispatch({ type: SEARCH_LOGS, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await authAxios.delete(`/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const { data } = await authAxios.put(`/logs/${log._id}`, log);

    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.data });
  }
};

export const findTechLogs = (firstName, lastName) => {
  try {
    setLoading();
    const tech = {
      firstName,
      lastName,
    };
    return {
      type: FIND_TECHS_LOGS,
      payload: tech,
    };
  } catch (err) {
    return { type: LOGS_ERROR, payload: err.response.data };
  }
};

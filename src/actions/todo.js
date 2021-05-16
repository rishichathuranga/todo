import {
    CREATE_TODO,
    RETRIEVE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
  } from "./types";

import ApiDataService from "../services/apiServices";

export const createTodo = (title, date, status) => async (dispatch) => {
    try {
      const res = await ApiDataService.insert({ title, date, status });
      dispatch({
        type: CREATE_TODO,
        payload: res.result,
      });

      return Promise.resolve(res.result);

    } catch (err) {
      return Promise.reject(err);
    }
};

export const retrieveTodo = () => async (dispatch) => {
    try {
        const res = await ApiDataService.getAll();
        dispatch({
          type: RETRIEVE_TODO,
          payload: res.result,
        });
        return true;
    } catch (err) {
        console.log(err);
    }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await ApiDataService.update(id, data);

    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });

    return Promise.resolve(res.result);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await ApiDataService.remove(id);

    dispatch({
      type: DELETE_TODO,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTodo = () => async (dispatch) => {
  try {
    const res = await ApiDataService.removeAll();

    dispatch({
      type: DELETE_ALL_TODO,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const search = (data) => async (dispatch) => {
  try {
    const res = await ApiDataService.search(data);
    dispatch({
      type: RETRIEVE_TODO,
      payload: res.result,
    });
    return true;
  } catch (err) {
    console.log(err);
  }
};



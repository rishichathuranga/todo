import {
    CREATE_TODO,
    RETRIEVE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    LOADING,
  } from "../actions/types";

const initialState = [];

function todoReducer(todo = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO:
      return [...todo, payload];

    case RETRIEVE_TODO:
    return payload;

    case UPDATE_TODO:
      return todo.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            ...payload,
          };
        } else {
          return todo;
        }
      });

    case DELETE_TODO:
      return todo.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TODO:
      return [];

    case LOADING:
      return 'test';
      
    default:
    return todo;
  }
};


export default todoReducer;
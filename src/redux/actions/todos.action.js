import { serviceRegistry } from "../../config";
import { actionTypes } from "../constants/todos.constant";
import { tryCatch } from "../../utils/utils";

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TODOS_BEGIN });
  tryCatch(() => serviceRegistry.todos.list(), {
    success({ data }) {
      dispatch({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: data });
    },
    fail(e) {
      dispatch({ type: actionTypes.FETCH_TODOS_FAILURE, payload: e.message });
    },
  });
};

export const createTodo = (todo) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_TODOS_BEGIN });
  tryCatch(() => serviceRegistry.todos.create(todo), {
    success({ data }) {
      dispatch({
        type: actionTypes.CREATE_TODOS_SUCCESS,
        payload: {
          id: data.id,
          ...todo,
        },
      });
    },
    fail(e) {
      dispatch({ type: actionTypes.CREATE_TODOS_FAILURE, payload: e.message });
    },
  });
};

export const removeTodo = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_TODOS_BEGIN });
  tryCatch(() => serviceRegistry.todos.destroy(id), {
    success() {
      dispatch({
        type: actionTypes.REMOVE_TODOS_SUCCESS,
        payload: id,
      });
    },
    fail(e) {
      dispatch({ type: actionTypes.REMOVE_TODOS_FAILURE, payload: e.message });
    },
  });
};

export const updateTodo = (id, data) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_TODOS_BEGIN });
  tryCatch(() => serviceRegistry.todos.update(id, data), {
    success() {
      dispatch({
        type: actionTypes.UPDATE_TODOS_SUCCESS,
        payload: {
          id,
          ...data,
        },
      });
    },
    fail(e) {
      dispatch({ type: actionTypes.UPDATE_TODOS_FAILURE, payload: e.message });
    },
  });
};

export const completeTodo = (id) => async (dispatch) => {
  dispatch(updateTodo(id, { completed: "1" }));
};

export const incompleteTodo = (id) => async (dispatch) => {
  dispatch(updateTodo(id, { completed: "0" }));
};

export const updateTodoTitle = (id, title) => async (dispatch) => {
  dispatch(updateTodo(id, { title }));
};

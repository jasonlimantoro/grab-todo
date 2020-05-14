import { serviceRegistry } from "../../config";
import { actionTypes } from "../constants/todos.constant";

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TODOS_BEGIN });
  try {
    const { data } = await serviceRegistry.todos.list();
    dispatch({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: actionTypes.FETCH_TODOS_FAILURE, payload: e.message });
  }
};

export const createTodo = (todo) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_TODOS_BEGIN });
  try {
    const { data } = await serviceRegistry.todos.create(todo);
    dispatch({
      type: actionTypes.CREATE_TODOS_SUCCESS,
      payload: {
        id: data.id,
        ...todo,
      },
    });
  } catch (e) {
    dispatch({ type: actionTypes.CREATE_TODOS_FAILURE, payload: e.message });
  }
};

export const removeTodo = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_TODOS_BEGIN });
  try {
    await serviceRegistry.todos.destroy(id);
    dispatch({
      type: actionTypes.REMOVE_TODOS_SUCCESS,
      payload: id,
    });
  } catch (e) {
    dispatch({ type: actionTypes.REMOVE_TODOS_FAILURE, payload: e.message });
  }
};

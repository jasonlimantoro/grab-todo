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

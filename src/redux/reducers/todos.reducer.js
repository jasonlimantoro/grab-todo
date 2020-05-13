import { actionTypes } from "../constants/todos.constant";

const initialState = {
  items: [],
  fetchError: null,
  fetchLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_BEGIN: {
      return {
        ...state,
        fetchLoading: true,
        fetchError: initialState.fetchError,
      };
    }
    case actionTypes.FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        fetchLoading: false,
      };
    }
    case actionTypes.FETCH_TODOS_FAILURE: {
      return {
        ...state,
        fetchError: action.payload,
        fetchLoading: false,
      };
    }
    default:
      return state;
  }
}

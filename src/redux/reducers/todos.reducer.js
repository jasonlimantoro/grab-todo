import { actionTypes } from "../constants/todos.constant";

const initialState = {
  items: [],
  fetchError: null,
  createError: null,
  removeError: null,
  updateError: null,
  fetchLoading: false,
  createLoading: false,
  removeLoading: false,
  updateLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_BEGIN: {
      return {
        ...state,
        fetchLoading: true,
      };
    }
    case actionTypes.CREATE_TODOS_BEGIN: {
      return {
        ...state,
        createLoading: true,
      };
    }

    case actionTypes.REMOVE_TODOS_BEGIN: {
      return {
        ...state,
        removeLoading: true,
      };
    }
    case actionTypes.UPDATE_TODOS_BEGIN: {
      return {
        ...state,
        updateLoading: true,
      };
    }

    case actionTypes.CREATE_TODOS_SUCCESS: {
      return {
        ...state,
        items: [...state.items, action.payload],
        createLoading: false,
        createError: null,
      };
    }

    case actionTypes.REMOVE_TODOS_SUCCESS: {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
        removeLoading: false,
        removeError: null,
      };
    }

    case actionTypes.FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
        fetchLoading: false,
        fetchError: null,
      };
    }

    case actionTypes.CREATE_TODOS_FAILURE: {
      return {
        ...state,
        createError: action.payload,
        createLoading: false,
      };
    }

    case actionTypes.UPDATE_TODOS_SUCCESS: {
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.id !== action.payload.id) return i;
          return {
            ...i,
            ...action.payload,
          };
        }),
        updateLoading: false,
        updateError: null,
      };
    }
    case actionTypes.FETCH_TODOS_FAILURE: {
      return {
        ...state,
        fetchError: action.payload,
        fetchLoading: false,
      };
    }
    case actionTypes.REMOVE_TODOS_FAILURE: {
      return {
        ...state,
        removeError: action.payload,
        removeLoading: false,
      };
    }
    default:
      return state;
  }
}

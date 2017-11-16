import { handle } from 'redux-pack';
import * as Api from '../../api';

// Action Types
const GET_TODO = 'LIST/GET_TODO';
const ADD_TODO = 'FORM/ADD_TODO';
const TOGGLE_TODO = 'TODO/TOGGLE_TODO';
const REMOVE_TODO = 'TODO/REMOVE_TODO';

// Action Creators
export const getTodos = () => {
  return dispatch => {
    return dispatch({
      type: GET_TODO,
      promise: Api.getTodos()
    });
  };
};

export const addTodo = todo => {
  return dispatch => {
    dispatch({
      type: ADD_TODO,
      promise: Api.addTodo(todo)
    });
  }
};

export const toggleTodo = todo => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TODO,
      promise: Api.toggleDone(todo)
    });
  }
}

export const removeTodo = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_TODO,
      promise: Api.removeTodo(id),
      meta: { id }
    });
  }
}

// Initial State
const initialState = {
  isGettingTodos: true,
  todos: [],
  hasError: false,

  isAddingTodos: false
};

// Reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TODO:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isGettingTodos: true
        }),
        success: prevState => ({
          ...prevState,
          todos: payload.data
        }),
        failure: prevState => ({
          ...prevState,
          hasError: true
        }),
        finish: prevState => ({
          ...prevState,
          isGettingTodos: false
        })
      });

    case ADD_TODO:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          isAddingTodos: true
        }),
        success: prevState => ({
          ...prevState,
          todos: [...state.todos, payload.data]
        }),
        finish: prevState => ({
          ...prevState,
          isAddingTodos: false
        })
      });

    case TOGGLE_TODO:
      return handle(state, action, {
        success: prevState => ({
          ...prevState,
          todos: state.todos.map(todo => payload.data.id === todo.id ? payload.data : todo)
        })
      });

    case REMOVE_TODO:
      return handle(state, action, {
        start: prevState => ({
          ...prevState,
          todos: state.todos.filter(todo => todo.id !== action.meta.id)
        })
      });

    default:
      return state;
  }
}

export default reducer;
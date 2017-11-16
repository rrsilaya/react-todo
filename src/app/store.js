import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { middleware as reduxpack } from 'redux-pack';

// Import reducers from ducks
import todoList from '../features/todoList/duck';

const store = createStore(
  combineReducers({
    // Combine all reducers here
    todoList
  }),
  {},
  applyMiddleware(logger, thunk, reduxpack)
);

export default store;
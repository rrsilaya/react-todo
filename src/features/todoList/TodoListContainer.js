import { connect } from 'react-redux';
import TodoList from './TodoList';

import { getTodos } from './duck';

const mapStateToProps = state => {
  const { todos, isGettingTodos, hasError } = state.todoList;

  return {
    todos,
    isGettingTodos,
    hasError
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => {
      dispatch(getTodos());
    }
  }
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoListContainer;
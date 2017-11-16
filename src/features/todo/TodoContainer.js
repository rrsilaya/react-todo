import { connect } from 'react-redux';
import Todo from './Todo';

import { toggleTodo, removeTodo } from '../todoList/duck';

const mapDispatchToProps = dispatch => {
  return {
    handleToggle: todo => {
      dispatch(toggleTodo(todo));
    },
    handleDelete: id => {
      dispatch(removeTodo(id));
    }
  }
};

const TodoContainer = connect(null, mapDispatchToProps)(Todo);
export default TodoContainer;
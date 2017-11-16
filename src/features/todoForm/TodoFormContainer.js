import { connect } from 'react-redux';
import TodoForm from './TodoForm';

import { addTodo } from '../todoList/duck';

const mapStateToProps = state => {
  const { isAddingTodos } = state.todoList;

  return {
    isAddingTodos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddTodo: todo => {
      dispatch(addTodo(todo));
    }
  }
};

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoFormContainer;
import React, { Component } from 'react';
import TodoContainer from '../todo/TodoContainer';

import CircularProgress from 'material-ui/CircularProgress';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className="todolist">
        {
          this.props.isGettingTodos ?
          <div className="center"><CircularProgress /></div> :
          this.props.hasError ?
          <div className="center">An error has occured.</div> :
          this.props.todos.map((todo, i) => 
            <TodoContainer todo={todo.todo} id={todo.id} key={i} isDone={todo.isDone} />
          )
        }
      </div>
    );
  }
}

export default TodoList;
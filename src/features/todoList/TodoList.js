import React, { Component } from 'react';
import Todo from '../todo/Todo';

class TodoList extends Component {
  render() {
    const todos = [{ todo: 'Learn Redux', isDone: false }, { todo: 'Learn React', isDone: false }];

    return (
      <div className="todolist">
        {
          todos.map((todo, i) => 
            <Todo content={todo.todo} id={i + 1} isDone={todo.isDone} />
          )
        }
      </div>
    );
  }
}

export default TodoList;
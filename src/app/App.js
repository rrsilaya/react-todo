import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';

import TodoForm from '../features/todoForm/TodoForm';
import TodoList from '../features/todoList/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Todo App" />
        <div className="container">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

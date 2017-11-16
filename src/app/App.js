import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';

import TodoFormContainer from '../features/todoForm/TodoFormContainer';
import TodoListContainer from '../features/todoList/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Todo App" />
        <div className="container">
          <TodoFormContainer />
          <TodoListContainer />
        </div>
      </div>
    );
  }
}

export default App;

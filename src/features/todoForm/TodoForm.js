import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const todo = {
      todo: e.target.todo.value,
      isDone: false
    };

    this.props.handleAddTodo(todo);
    e.target.reset();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <TextField hintText="Create Todo" floatingLabelText="New Todo" name="todo" fullWidth />
        <RaisedButton label="Create" primary type="submit" disabled={this.props.isAddingTodos} />
      </form>
    );
  }
}

export default TodoForm;
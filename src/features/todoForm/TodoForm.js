import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TodoForm extends Component {
  render() {
    return (
      <div className="form">
        <TextField hintText="Create Todo" floatingLabelText="New Todo" fullWidth />
        <RaisedButton label="Create" primary />
      </div>
    );
  }
}

export default TodoForm;
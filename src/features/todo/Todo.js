import React, { Component } from 'react';

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Todo extends Component {
  handleTodoToggle = () => {
    const { id, todo, isDone } = this.props;
    this.props.handleToggle({ id, todo, isDone });
  };

  handleDelete = () => {
    this.props.handleDelete(this.props.id);
  }

  render() {
    return (
      <Card>
        <CardHeader title={`Todo #${this.props.id + 1}`} />
        <CardText className={this.props.isDone ? 'done' : ''}>
          {this.props.todo}
        </CardText>
        <CardActions className="flush-right">
          <FlatButton label={`Mark as ${this.props.isDone ? 'Undone' : 'Done'}`} onClick={this.handleTodoToggle} />
          <FlatButton label="Remove" onClick={this.handleDelete} />
        </CardActions>
      </Card>
    );
  }
}

export default Todo;
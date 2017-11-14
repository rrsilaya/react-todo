import React, { Component } from 'react';

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Todo extends Component {
  render() {
    return (
      <Card>
        <CardHeader title={`Todo #${this.props.id}`} />
        <CardText className={this.props.isDone ? 'done' : ''}>
          {this.props.content}
        </CardText>
        <CardActions className="flush-right">
          <FlatButton label={`Mark as ${this.props.isDone ? 'Undone' : 'Done'}`} />
          <FlatButton label="Remove" />
        </CardActions>
      </Card>
    );
  }
}

export default Todo;
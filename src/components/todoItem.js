import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="container ">
      <div>
      <div className="row">
          <div className="col-2 mb-2">
            <button
              className="btn btn-danger"
              onClick={e => this.removeTodo(this.props.id)}
            >
              remove
            </button>
          </div>
          <div className="col-8 pt-2">{this.props.todo.text}</div>
        </div>
      </div>
        
      </div>
    );
  }
}

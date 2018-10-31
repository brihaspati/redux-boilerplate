import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrent } from '../reducers/todo';
import { saveTodo } from '../reducers/todo';

class TodoForm extends Component {
  handleInputChange = evt => {
    const val = evt.target.value;
    this.props.updateCurrent(val);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  };

  render() {
    const { currentTodo } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={currentTodo}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

// take the currentTodo from state/store and send it to the TodoForm component -- MapStateToProps
// pass the updateCurrent function to the component to dispatch the action to the store - MapDispatchToProps
export default connect(
  state => ({
    currentTodo: state.todo.currentTodo
  }),
  { updateCurrent, saveTodo }
)(TodoForm);

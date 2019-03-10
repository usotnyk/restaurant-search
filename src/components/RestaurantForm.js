import React, { Component } from 'react';

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
  };

  render() {
    return (
      <form className="mB-50">
        <label>
          City:
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
        </label>
        <button className="add-todo" onClick={this.handleAddTodo}>
          Search
        </button>
      </form>
    )
  }
}

export default RestaurantForm;

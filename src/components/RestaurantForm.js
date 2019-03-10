import React, { Component } from 'react';

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: "",
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  }

  render() {
    const { city } = this.state;

    return (
      <form
        onSubmit={event => this.handleSubmit(event)}
        className="rest-search-from" 
      >
        <label id="labelCity" htmlFor="inputCity">
          City:
          <input
            id="inputCity"
            name="city"
            onChange={event => this.handleInputChange(event)}
            value={city}
            required
            aria-required="true"
            aria-label="Enter your city"
          />
        </label>
        <input type="submit" value="Search" className="btn-search" />
      </form>
    )
  }
}

export default RestaurantForm;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { addCity } from './redux/actions';

import RestaurantForm from './components/RestaurantForm';
import RestaurantTable from './components/RestaurantTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurantData: null,
      isLoading: false,
      isError: false,
    }

    this.sendAjaxCall = this.sendAjaxCall.bind(this);
  }

  handleFormSubmit(inputs) {
    const { allCities } = this.props;
    const { city } = inputs;
    let cityLowerCase = city.toLowerCase();
    this.setState({ currentCity: cityLowerCase });

    if (!(cityLowerCase in allCities)) {
      this.fetchRestaurantsForCity(cityLowerCase);
    } 
  }

  fetchRestaurantsForCity(city) {
    this.setState({
      isLoading: true,
    })
    this.sendAjaxCall(city)
    .then((response) => {
      // throw new Error()
      this.setState({ isLoading: false });
      this.props.actions.addCity(city, response.data);
    })

    .catch((error) => {
      console.log(error);
      this.setState({ 
        isLoading: false,
        isError: true,
      })
    })
  }

  sendAjaxCall(city) {
    const url = 'http://opentable.herokuapp.com/api/restaurants?city='
    return axios.get(`${url}${city}`)
  }

  render() {
    const { isError, isLoading, currentCity } = this.state;

    return (
      <div className="App">
        <h1>Restaurant Search</h1>
        <p>Please enter your city below to see a list of restaurants that have delivery available.</p>
        <RestaurantForm 
              onFormSubmit={ (formInputs) => this.handleFormSubmit(formInputs) }
            />
        { isError && (
            <div className="error-wrapper">Ooops something went wrong, please try again later.</div>
          )
        }
        { isLoading && (
            <div className="loader">Loading...</div>
          )
        }
        { !isError && !isLoading && (
            <RestaurantTable 
              city = {currentCity}
            />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    allCities: state,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      addCity
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

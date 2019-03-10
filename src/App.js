import React, { Component } from 'react';
import './App.css';
import RestaurantForm from './components/RestaurantForm'
import RestaurantTable from './components/RestaurantTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantForm />
        <RestaurantTable />
      </div>
    );
  }
}

export default App;

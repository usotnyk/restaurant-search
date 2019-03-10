import React, { Component, Fragment } from 'react';
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux';

import Restaurants from '../restaurants';

class RestaurantTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refinedRestaurants: null,
    }
  }

  handleRefineRestaurantsInputChange(event) {
    const query = event.target.value;

    this.setState({
      refinedRestaurants: Restaurants.refine(this.props.restaurants, query)
    });
  }

  renderEmptyResults() {
    return <div>Sorry, but your search returned no results.</div>
  }

  render() {
    const { refinedRestaurants } = this.state;
    const { restaurants } = this.props;

    if (!restaurants) {
      return null;
    }

    if (restaurants.length === 0) {
      return this.renderEmptyResults();
    }

    return this.renderRestaurants(refinedRestaurants || restaurants);
  }
  
  renderRestaurants(restaurants) {

    const columns = [
      {
       name: "name",
       label: "Name",
      },
      {
       name: "address",
       label: "Address",
      },
      {
       name: "area",
       label: "Area",
      },
      {
       name: "price",
       label: "Price",
      },
    ];
    
    const options = {
      selectableRows: false,
      sort: false,
      filter: false,
      search: false,
      print: false,
      download: false,
      viewColumns: false,
    };

    return (
      <Fragment>
        <div className="refine-wrapper">
          <label id="labelRefine" htmlFor="inputRefine">
            Refine your search results:
            <input
              id="inputRefine"
              name="refine"
              onChange={event => this.handleRefineRestaurantsInputChange(event)}
              placeholder="Name / Address / Area"
              aria-required="false"
              aria-label="Refine your search by entering additional parameters"
            />
          </label>
        </div>
  
        <MUIDataTable
          // title={"Restaurant List"}
          data={restaurants}
          columns={columns}
          options={options}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurants: state[ownProps.city]
  };
} 

export default connect(
  mapStateToProps,
  null,
)(RestaurantTable);

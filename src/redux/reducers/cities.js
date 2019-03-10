import { ADD_CITY } from '../actionTypes';

const initialState = {};

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_CITY : {
      return saveCity(state, action);
    }
    default:
      return state;
  }
};

function saveCity(state, action) {
  const { city, data } = action;
  let cityLowerCase = city.toLowerCase();

  const newState = {
    ...state,
    [cityLowerCase]: mapRestaurants(data.restaurants), 
  }
  return newState;
}

function mapRestaurants(restaurants) {
  if (!restaurants) return [];
  return restaurants.map((restaurant) => ({
    name: restaurant.name,
    address: restaurant.address,
    area: restaurant.area,
    price: restaurant.price,
    image_url: restaurant.image_url,
  }));
}

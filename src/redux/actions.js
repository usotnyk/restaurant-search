import { ADD_CITY } from './actionTypes';

export const addCity = (city, data) => {
  return { 
    type: ADD_CITY,
    city,
    data, 
  } 
}

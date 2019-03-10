function refine(restaurants, query) {
  return restaurants.filter(restaurant => (
    [
      restaurant.name,
      restaurant.address,
      restaurant.area
    ].some(value => value.includes(query))
  ));
}

export default {
  refine,
};

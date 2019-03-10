import Restaurants from './restaurants';

const restaurants = [
  {
    name: "10pin Bowling Lounge",
    address: "330 N State Street",
    area: "Chicago / Illinois",
    price: 4,
  },
  {
    name: "Chicago Chop House",
    address: "60 W Ontario St",
    area: "Chicago / Illinois",
    price: 4,
  },
  {
    name: "Osteria Langhe",
    address: "2824 West Armitage Avenue",
    area: "Chicago / Illinois",
    price: 2,
  },
  {
    name: "Salt Wine Bar",
    address: "225 Ossington Ave",
    area: "Toronto / SW Ontario",
    price: 4,
  }
];

describe('Restaurants', () => {
  describe('refine', () => {
    it('by restaurant name', () => {
      const refinedRestaurants = Restaurants.refine(restaurants, "10pin Bowling Lounge");
      expect(refinedRestaurants.length).toBe(1);
      expect(refinedRestaurants[0].name).toBe("10pin Bowling Lounge");
    });

    it('by address', () => {
      const refinedRestaurants = Restaurants.refine(restaurants, "2824 West Armitage Avenue");
      expect(refinedRestaurants.length).toBe(1);
      expect(refinedRestaurants[0].name).toBe("Osteria Langhe");
    });

    describe('by area', () => {
      it('when full area name is provided', () => {
        const refinedRestaurants = Restaurants.refine(restaurants, "Chicago / Illinois");
        expect(refinedRestaurants.length).toBe(3);
        expect(refinedRestaurants[0].name).toBe("10pin Bowling Lounge");
      });

      it('when city name is provided', () => {
        let refinedRestaurants = Restaurants.refine(restaurants, "Chicago");
        expect(refinedRestaurants.length).toBe(3);
        expect(refinedRestaurants[0].name).toBe("10pin Bowling Lounge");
        
        refinedRestaurants = Restaurants.refine(restaurants, "Toronto");
        expect(refinedRestaurants.length).toBe(1);
      });

      it('when region name is provided', () => {
        const refinedRestaurants = Restaurants.refine(restaurants, "Illinois");
        expect(refinedRestaurants.length).toBe(3);
        expect(refinedRestaurants[0].name).toBe("10pin Bowling Lounge");
      });
    });

    it('when no match found', () => {
      const refinedRestaurants = Restaurants.refine(restaurants, "New York");
      expect(refinedRestaurants).toEqual([]);
    });

    it('when unexpected query is provided', () => {
      const refinedRestaurants = Restaurants.refine(restaurants, 27);
      expect(refinedRestaurants).toEqual([]);
    });
  });
});
'use strict';

// Create state object.
const Store = {
  state: {
    start: Math.floor(new Date().setHours(0, 0, 0, 0) / 1000),
    end: Math.floor(new Date().setHours(23, 59, 59, 999) / 1000),
    steps: 48,
    objects: [
      {id: 1, name: 'Object 1'},
      {id: 2, name: 'Object 2'}
    ],
    bookings: [
      {id: 1, object: 1, start: 1483264800, 'end': 1483311600}
    ]
  }
};

// Return the instance.
export default Store;

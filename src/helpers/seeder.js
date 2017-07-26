'use strict';

// Dependencies.
import Store from './store';

const Seeder = {
  seed: function () {
    // Objects.
    Store.addObject({
      id: 1,
      name: 'Object 1'
    });

    Store.addObject({
      id: 2,
      name: 'Object 2'
    });

    // Bookings.
    Store.addBooking({
      id: 1,
      object: 1,
      start: 1483264800,
      end: 1483311600
    });
  }
};

export default Seeder;

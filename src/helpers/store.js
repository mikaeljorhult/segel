'use strict';

// Dependencies.
import Availability from '../helpers/availability';

// Create state object.
const Store = {
  state: {
    start: Math.floor(new Date().setHours(0, 0, 0, 0) / 1000),
    end: Math.floor(new Date().setHours(24, 0, 0, 0) / 1000),
    duration: 86400,
    steps: 48,
    objects: [
      {id: 1, name: 'Object 1'},
      {id: 2, name: 'Object 2'}
    ],
    bookings: []
  },
  changeTime: function (amount) {
    this.state.start = this.state.start + amount;
    this.state.end = this.state.end + amount;
  },
  setTime: function (start, end) {
    this.state.start = start;
    this.state.end = end;
    this.duration = end - start;
  },
  addBooking: function (data) {
    // Check availability off requested object.
    if (!Availability.isAvailable(this.state.bookings, data)) { return; }

    // Assign temporary ID to booking.
    // TODO: Get the actual ID from user.
    data.id = data.id || (Math.random() + 1).toString(36);

    // Add booking to storage.
    this.state.bookings.push(data);
  },
  updateBooking: function (data) {
    // Check availability off requested object.
    if (!Availability.isAvailable(this.state.bookings, data)) { return; }

    // Retrieve the index of the stored copy of booking.
    let index = this.state.bookings.findIndex(function (element) {
      return element.id === data.id;
    });

    // Replace booking with new data.
    this.state.bookings.splice(index, 1, data);
  },
  removeBooking: function (data) {
    // Retrieve the index of the stored copy of booking.
    let index = this.state.bookings.findIndex(function (element) {
      return element.id === data.id;
    });

    // Replace booking with new data.
    this.state.bookings.splice(index, 1, data);
  }
};

// Return the instance.
export default Store;

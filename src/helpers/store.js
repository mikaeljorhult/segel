'use strict';

// Dependencies.
import inRange from 'lodash/inRange';

// Create state object.
const Store = {
  state: {
    start: Math.floor(new Date().setHours(0, 0, 0, 0) / 1000),
    end: Math.floor(new Date().setHours(24, 0, 0, 0) / 1000),
    steps: 48,
    objects: [
      {id: 1, name: 'Object 1'},
      {id: 2, name: 'Object 2'}
    ],
    bookings: [
      {id: 1, object: 1, start: 1483264800, 'end': 1483311600}
    ]
  },
  changeTime: function (amount) {
    this.state.start = this.state.start + amount;
    this.state.end = this.state.end + amount;
  },
  setTime: function (start, end) {
    this.state.start = start;
    this.state.end = end;
  },
  addBooking: function (data) {
    // Check availability off requested object.
    if (!isAvailable(this.state.bookings, data)) { return; }

    // Assign temporary ID to booking.
    // TODO: Get the actual ID from user.
    data.id = (Math.random() + 1).toString(36);

    // Add booking to storage.
    this.state.bookings.push(data);
  },
  editBooking: function (data) {
    // Check availability off requested object.
    if (!isAvailable(this.state.bookings, data)) { return; }

    // Retrieve the index of the stored copy of booking.
    let index = this.state.bookings.findIndex(function (element) {
      return element.id === data.id;
    });

    // Replace booking with new data.
    this.state.bookings.splice(index, 1, data);
  }
};

function isAvailable (bookings, data) {
  // Bookings for the requested object.
  let objectBookings = bookings.filter(function (booking) {
    // Same object as booking but ignore itself.
    return booking.object === data.object &&
      !(data.id !== undefined && booking.id === data.id);
  });

  // Return false if any bookings are in the same time slot.
  return objectBookings.filter(function (booking) {
    return inRange(data.start, booking.start - 1, booking.end) ||
      inRange(data.end, booking.start + 1, booking.end) ||
      inRange(booking.start, data.start, data.end);
  }).length === 0;
}

// Return the instance.
export default Store;

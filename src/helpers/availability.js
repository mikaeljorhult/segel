'use strict';

// Dependencies.
import inRange from 'lodash/inRange';

export default {
  isAvailable: function (bookings, data) {
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
};

'use strict';

const Cast = {
  booking: function (booking) {
    booking.start = parseInt(booking.start);
    booking.end = parseInt(booking.end);

    return booking;
  },

  object: function (object) {
    return object;
  }
};

export default Cast;

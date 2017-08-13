'use strict';

/**
 * Far future date to compare timestamps against.
 * Is used to detect if timestamp is defined in seconds or milliseconds.
 * This will make it impossible to use dates beyond year 10000.
 *
 * @type {Date}
 */
const futureDate = new Date(10000, 1, 1);

const Cast = {
  booking: function (booking) {
    booking.start = this.date(booking.start);
    booking.end = this.date(booking.end);

    return booking;
  },

  object: function (object) {
    return object;
  },

  date: function (date) {
    let dateReturn = date;

    switch (Object.prototype.toString.call(date)) {
      case '[object Date]':
        // Get Unix timestamp (in milliseconds) and divide to seconds.
        dateReturn = date.getTime() / 1000;
        break;
      case '[object Number]':
        // If timestamp is in milliseconds it will be beyond year 10000 multiplied, otherwise assume it is in seconds.
        dateReturn = date * 1000 > futureDate.getTime() ? date / 1000 : date;
        break;
      default:
        // Leave it to Date constructor if not recognized.
        dateReturn = new Date(date).getTime();
        break;
    }

    return Math.floor(dateReturn);
  }
};

export default Cast;

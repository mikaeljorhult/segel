"use strict";

/**
 * Far future date to compare timestamps against.
 * Is used to detect if timestamp is defined in seconds or milliseconds.
 * This will make it impossible to use dates beyond year 10000.
 *
 * @type {Date}
 */
const futureDate = new Date(10000, 1, 1);

/**
 * Base cast object.
 *
 * @type {Object}
 */
const Cast = {};

/**
 * Cast properties of a booking to correct type.
 *
 * @param {Object} booking - Booking to work with.
 * @returns {Object} - Booking with properties cast to correct types.
 */
Cast.booking = function(booking) {
  booking.start = this.date(booking.start);
  booking.end = this.date(booking.end);

  return booking;
};

/**
 * Cast properties of a resource to correct type.
 *
 * @param {Object} resource - Resource to work with.
 * @returns {Object} - Resource with properties cast to correct types.
 */
Cast.resource = function(resource) {
  return resource;
};

/**
 * Convert date and time to an Unix Epoch timestamp.
 *
 * @param date - Date to be cast.
 * @returns {number} - Date in Unix Epoch timestamp (seconds).
 */
Cast.date = function(date) {
  let dateReturn = date;

  // Convert strings to integer if it's numeric.
  if (
    Object.prototype.toString.call(date) === "[object String]" &&
    /^\d+$/.test(date)
  ) {
    date = parseInt(date);
  }

  switch (Object.prototype.toString.call(date)) {
    case "[object Date]":
      // Get Unix timestamp (in milliseconds) and divide to seconds.
      dateReturn = date.getTime() / 1000;
      break;
    case "[object Number]":
      // If timestamp is in milliseconds it will be beyond year 10000 multiplied, otherwise assume it is in seconds.
      dateReturn = date * 1000 > futureDate.getTime() ? date / 1000 : date;
      break;
    default:
      // Leave it to Date constructor if not recognized.
      dateReturn = new Date(date).getTime();
      break;
  }

  return Math.floor(dateReturn);
};

// Return the instance.
export default Cast;

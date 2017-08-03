'use strict';

// Dependencies.
import castArray from 'lodash/castArray';
import forEach from 'lodash/forEach';
import inRange from 'lodash/inRange';
import isFunction from 'lodash/isFunction';

/**
 * Base validation object.
 *
 * @type {Object}
 */
const Validation = {};

/**
 * Check that no other bookings occupy the same time slot on the same object.
 *
 * @param {Object[]} bookings - Array of booking to validate against.
 * @param {Object} data - Booking object to validate.
 * @returns {boolean} - Whether data is valid to insert or update as a booking.
 */
Validation.isAvailable = function (bookings, data) {
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
};

/**
 * Check whether object with same ID already exists.
 *
 * @param {Object[]} array - Array of bookings or objects to validate against.
 * @param {Object} data - Booking or object to validate.
 * @returns {boolean} - Whether data is valid to insert or update as a booking or object.
 */
Validation.isUnique = function (array, data) {
  // Check if object with index exists in array.
  return array.findIndex(function (element) {
    return element.id === data.id;
  }) === -1;
};

/**
 * Validate against multiple rules.
 *
 * @param {String|String[]} rules
 * @param {Object[]} array - Array of bookings or objects to validate against.
 * @param {Object} data - Booking or object to validate.
 * @returns {boolean} - Whether data is valid to insert or update as a booking or object.
 */
Validation.multipleRules = function (rules, array, data) {
  let valid = true;

  // Go through each requested rule.
  forEach(castArray(rules), function (rule) {
    // Make sure that rule exists on validation object.
    if (isFunction(Validation[rule])) {
      // Validate data and set result to variable.
      valid = Validation[rule](array, data);

      // Return validation result as this will break loop on false.
      return valid;
    }
  });

  // Validation will be false if any one rule returned false.
  return valid;
};

export default Validation;

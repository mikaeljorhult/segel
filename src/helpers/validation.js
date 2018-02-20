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
 * Check that no other bookings occupy the same time slot on the same resource.
 *
 * @param {Object[]} bookings - Array of booking to validate against.
 * @param {Object} data - Booking object to validate.
 * @returns {boolean} - Whether data is valid to insert or update as a booking.
 */
Validation.isAvailable = function (bookings, data) {
  // Bookings for the requested resource.
  let resourceBookings = bookings.filter(function (booking) {
    // Same resource as booking but ignore itself.
    return booking.resource === data.resource &&
      !(data.id !== undefined && booking.id === data.id);
  });

  // Return false if any bookings are in the same time slot.
  return resourceBookings.filter(function (booking) {
    return inRange(data.start, booking.start - 1, booking.end) ||
      inRange(data.end, booking.start + 1, booking.end) ||
      inRange(booking.start, data.start, data.end);
  }).length === 0;
};

/**
 * Check whether resource with same ID already exists.
 *
 * @param {Object[]} array - Array of bookings or resources to validate against.
 * @param {Object} data - Booking or resource to validate.
 * @returns {boolean} - Whether data is valid to insert or update as a booking or resource.
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
 * @param {Object[]} array - Array of bookings or resources to validate against.
 * @param {Object} data - Booking or resource to validate.
 * @returns {boolean} - Whether data is valid to insert or update as a booking or resource.
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

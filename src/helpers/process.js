'use strict';

// Dependencies.
import castArray from 'lodash/castArray';
import forEach from 'lodash/forEach';

/**
 * Iterate over and pass arguments through callback.
 *
 * @param data - Value or array to pass to callback.
 * @param {Function} callback - Function to process each data value.
 * @constructor
 */
const Process = function (data, callback) {
  // Pass each object in array to callback.
  forEach(castArray(data), function (object) {
    callback(object);
  });
};

// Return the instance.
export default Process;

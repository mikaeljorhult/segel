'use strict';

// Dependencies.
import castArray from 'lodash/castArray';
import forEach from 'lodash/forEach';

const Process = function (data, callback) {
  // Pass each object in array to callback.
  forEach(castArray(data), function (object) {
    callback(object);
  });
};

export default Process;

'use strict';

// Dependencies.
import castArray from 'lodash/castArray';
import forEach from 'lodash/forEach';

const Process = function (data, callback) {
  forEach(castArray(data), function (object) {
    callback(object);
  });
};

export default Process;

'use strict';

import forOwn from 'lodash/forOwn';
import Cast from '../helpers/cast';

const Store = {
  config: {
    editable: true,
    set: function (config) {
      // Iterate over all supplied properties.
      forOwn(config, function (value, key) {
        // Set value if key is available in state.
        if (this[key] !== undefined) {
          this[key] = value;
        }
      });
    }
  },
  time: {
    start: Cast.date(new Date().setHours(0, 0, 0, 0)),
    end: Cast.date(new Date().setHours(24, 0, 0, 0)),
    duration: function () {
      return this.end - this.start;
    },
    steps: 48,
    current: null,
    tick: function () {
      this.current = Cast.date(new Date());
    }
  },
  user: {
    id: null,
    admin: false,
    isAdmin: function () {
      return this.admin === true;
    },
    isAuthenticated: function () {
      return this.id !== null;
    },
    set: function (user) {
      // Iterate over all supplied properties.
      forOwn(user, function (value, key) {
        // Set value if key is available in state.
        if (this[key] !== undefined) {
          this[key] = value;
        }
      });
    }
  }
};

// Start timer that ticks every second.
(function timer () {
  Store.time.tick();
  setTimeout(timer, 1000);
})();

// Return the instance.
export default Store;

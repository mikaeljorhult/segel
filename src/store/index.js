"use strict";

import forOwn from "lodash/forOwn";

const Store = {
  user: {
    id: null,
    admin: false,
    isAdmin: function() {
      return this.admin === true;
    },
    isAuthenticated: function() {
      return this.id !== null;
    },
    set: function(user) {
      // Iterate over all supplied properties.
      forOwn(user, function(value, key) {
        // Set value if key is available in state.
        if (this[key] !== undefined) {
          this[key] = value;
        }
      });
    }
  }
};

// Return the instance.
export default Store;

'use strict';

import forOwn from 'lodash/forOwn';
import Cast from '../helpers/cast';
import Events from '../helpers/events';
import Validation from '../helpers/validation';
import nanoid from "nanoid";

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
  bookings: {
    all: [],
    get: function (id) {
      return state.all.find(function (booking) {
        return booking.id === id;
      });
    },
    create: function (data) {
      // Assign temporary ID to booking.
      // TODO: Get the actual ID from user.
      data.id = data.id || nanoid();

      // TODO: Allow hooking in to do server side requests.
      this.add(data);

      // Emit event with the updated booking.
      Events.$emit('bookings:created', data);
    },
    add: function (data) {
      if (!Validation.multipleRules(['isAvailable', 'isUnique'], this.all, data)) {
        return;
      }

      // Add booking to storage.
      this.all.push(data);

      // Emit event with the added booking.
      Events.$emit('bookings:added', data);
    },
    update: function (data) {
      // Check availability off requested resource.
      if (!Validation.isAvailable(this.all, data)) {
        return;
      }

      // Retrieve the index of the stored copy of booking.
      let index = this.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace booking with new data.
      if (index !== -1) {
        this.all.splice(index, 1, data);

        // Emit event with the updated booking.
        Events.$emit('bookings:updated', data);
      }
    },
    remove: function (state, data) {
      // Retrieve the index of the stored copy of booking.
      let index = this.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace booking with new data.
      if (index !== -1) {
        this.all.splice(index, 1);

        // Emit event with the removed booking.
        Events.$emit('bookings:removed', data);
      }
    }
  },
  resources: {
    all: [],
    get: function (id) {
      return state.all.find(function (resource) {
        return resource.id === id;
      });
    },
    add: function (data) {
      // Check that resource with index don't already exist.
      if (!Validation.isUnique(this.all, data)) { return; }

      // Add resource to storage.
      this.all.push(data);

      // Emit event with the added resource.
      Events.$emit('resources:added', data);
    },
    update: function (data) {
      // Retrieve the index of the stored copy of resource.
      let index = this.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace resource with new data.
      if (index !== -1) {
        this.all.splice(index, 1, data);

        // Emit event with the updated resource.
        Events.$emit('resources:updated', data);
      }
    },
    remove: function (data) {
      // Retrieve the index of the stored copy of resource.
      let index = this.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace resource with new data.
      if (index !== -1) {
        this.all.splice(index, 1);

        // Emit event with the removed resource.
        Events.$emit('resources:removed', data);
      }
    }
  },
  time: {
    start: Cast.date(new Date().setHours(0, 0, 0, 0)),
    end: Cast.date(new Date().setHours(24, 0, 0, 0)),
    set: function (start, end) {
      this.start = start;
      this.end = start;
    },
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

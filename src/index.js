'use strict';

// Components.
import Events from './helpers/events';
import Instance from './vue';
import Process from './helpers/process';
import Store from './helpers/store';
import Seeder from './helpers/seeder';

// Include test data if development build.
if (process.env.NODE_ENV === 'development') {
  Seeder.seed();
}

/**
 * Constructor.
 * Takes a CSS selector to which it will insert the schedule,
 *
 * @param selector
 * @constructor
 */
const Segel = function (selector) {
  Instance.$mount(selector);
};

/**
 * Root instance of Vue.
 *
 * @type {Vue}
 */
Segel.instance = Instance;

// Republish events.
Events.$on('bookings:add', function (data) {
  Instance.$emit('bookings:add', data);
  Store.addBooking(data);
});

Events.$on('bookings:update', function (data) {
  Instance.$emit('bookings:update', data);
  Store.updateBooking(data);
});

/**
 * Base for methods manipulating bookings in store.
 *
 * @type object
 */
Segel.bookings = {};

/**
 * Add one or more bookings to the store.
 *
 * @param {Object|Object[]} bookings - Bookings to add.
 * @returns {Segel.bookings}
 */
Segel.bookings.add = function (bookings) {
  Process(bookings, function (booking) {
    Store.addBooking(booking);
  });

  return this;
};

/**
 * Update one or more bookings in the store.
 *
 * @param {Object|Object[]} bookings - Bookings to update.
 * @returns {Segel.bookings}
 */
Segel.bookings.update = function (bookings) {
  Process(bookings, function (booking) {
    Store.updateBooking(booking);
  });

  return this;
};

/**
 * Remove one ore more bookings from the store.
 *
 * @param {Object|Object[]} bookings - Bookings to remove.
 * @returns {Segel.bookings}
 */
Segel.bookings.remove = function (bookings) {
  Process(bookings, function (booking) {
    Store.removeBooking(booking);
  });

  return this;
};

/**
 * Base for methods manipulating objects in store.
 *
 * @type object
 */
Segel.objects = {};

/**
 * Add one or more objects to the store.
 *
 * @param {Object|Object[]} objects - Objects to add.
 * @returns {Segel.objects}
 */
Segel.objects.add = function (objects) {
  Process(objects, function (object) {
    Store.addObject(object);
  });

  return this;
};

/**
 * Update one or more objects in the store.
 *
 * @param {Object|Object[]} objects - Objects to update.
 * @returns {Segel.objects}
 */
Segel.objects.update = function (objects) {
  Process(objects, function (object) {
    Store.updateObject(object);
  });

  return this;
};

/**
 * Remove one ore more objects from the store.
 *
 * @param {Object|Object[]} objects - Objects to remove.
 * @returns {Segel.objects}
 */
Segel.objects.remove = function (objects) {
  Process(objects, function (object) {
    Store.removeObject(object);
  });

  return this;
};

export default Segel;

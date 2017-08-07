'use strict';

// Components.
import Instance from './vue';
import Cast from './helpers/cast';
import Events from './helpers/events';
import Process from './helpers/process';
import Store from './store/store';

/**
 * Constructor.
 * Takes a CSS selector to which it will insert the schedule,
 *
 * @param {string} selector
 * @constructor
 */
const Segel = function (selector) {
  Instance.$mount(selector);
  return Segel;
};

/**
 * Root instance of Vue.
 *
 * @type {Vue}
 */
Segel.instance = Instance;

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
    Store.commit('bookings/add', Cast.booking(booking));
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
    Store.commit('bookings/update', Cast.booking(booking));
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
    Store.commit('bookings/remove', Cast.booking(booking));
  });

  return this;
};

/**
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
Segel.bookings.end = function () {
  return Segel;
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
    Store.commit('objects/add', Cast.object(object));
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
    Store.commit('objects/update', Cast.object(object));
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
    Store.commit('objects/remove', Cast.object(object));
  });

  return this;
};

/**
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
Segel.objects.end = function () {
  return Segel;
};

/**
 * Assign callback handler for events.
 *
 * @param {string|string[]} event - Event to subscribe to.
 * @param {Function} callback - Function to run when event is broadcast.
 * @returns {Segel}
 */
Segel.on = function (event, callback) {
  Events.$on(event, callback);

  return Segel;
};

/**
 * Remove an assigned callback event handler.
 *
 * @param {string|string[]} event - Event to unsubscribe to.
 * @param {Function} callback - Function to remove.
 * @returns {Segel}
 */
Segel.off = function (event, callback) {
  Events.$off(event, callback);

  return Segel;
};

export default Segel;

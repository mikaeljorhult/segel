'use strict';

// Components.
import Instance from './vue';
import Cast from './helpers/cast';
import Events from './helpers/events';
import Process from './helpers/process';
import Store from './store/store';

/**
 * Constructor.
 *
 * @param {String} selector - CSS selector to which it will insert the schedule.
 * @param {Object} [config] - Configuration to use.
 * @constructor
 */
const Segel = function (selector, config) {
  if (typeof config === 'object') {
    Store.commit('config/set', config);
  }

  // Mount the Vue instance to document.
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
 * @type {Object}
 */
Segel.bookings = {};

/**
 * Get all stored bookings.
 *
 * @returns {Array} - All stored bookings.
 */
Segel.bookings.all = function () {
  return Store.getter['bookings/all'];
};

/**
 * Get a store booking based on ID.
 *
 * @param id - ID of requested booking.
 * @returns {Object|null} - Booking if found, otherwise null.
 */
Segel.bookings.get = function (id) {
  return Store.getters['bookings/get'](id) || null;
};

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
 * @type {Object}
 */
Segel.objects = {};

/**
 * Get all stored objects.
 *
 * @returns {Array} - All stored objects.
 */
Segel.objects.all = function () {
  return Store.getter['objects/all'];
};

/**
 * Get a store object based on ID.
 *
 * @param id - ID of requested object.
 * @returns {Object|null} - Object if found, otherwise null.
 */
Segel.objects.get = function (id) {
  return Store.getters['objects/get'](id) || null;
};

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
 * Base for methods manipulating user in store.
 *
 * @type {Object}
 */
Segel.user = {};

/**
 * Set the current user.
 *
 * @param user
 * @returns {Segel.user}
 */
Segel.user.set = function (user) {
  if (['[object String]', '[object Number]'].indexOf(Object.prototype.toString.call(user)) > -1) {
    user = {id: user};
  }

  Store.commit('user/set', user);

  return this;
};

/**
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
Segel.user.end = function () {
  return Segel;
};

/**
 * Assign callback handler for events.
 *
 * @param {String|String[]} event - Event to subscribe to.
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
 * @param {String|String[]} event - Event to unsubscribe to.
 * @param {Function} callback - Function to remove.
 * @returns {Segel}
 */
Segel.off = function (event, callback) {
  Events.$off(event, callback);

  return Segel;
};

export default Segel;

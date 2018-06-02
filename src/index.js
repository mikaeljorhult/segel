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
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
function returnSegel () {
  return Segel;
}

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
Segel.bookings.end = returnSegel;

/**
 * Base for methods manipulating resources in store.
 *
 * @type {Object}
 */
Segel.resources = {};

/**
 * Get all stored resources.
 *
 * @returns {Array} - All stored resources.
 */
Segel.resources.all = function () {
  return Store.getter['resources/all'];
};

/**
 * Get a store resource based on ID.
 *
 * @param id - ID of requested resource.
 * @returns {Object|null} - Resource if found, otherwise null.
 */
Segel.resources.get = function (id) {
  return Store.getters['resources/get'](id) || null;
};

/**
 * Add one or more resources to the store.
 *
 * @param {Object|Object[]} resources - Resources to add.
 * @returns {Segel.resources}
 */
Segel.resources.add = function (resources) {
  Process(resources, function (resource) {
    Store.commit('resources/add', Cast.resource(resource));
  });

  return this;
};

/**
 * Update one or more resources in the store.
 *
 * @param {Object|Object[]} resources - Resources to update.
 * @returns {Segel.resources}
 */
Segel.resources.update = function (resources) {
  Process(resources, function (resource) {
    Store.commit('resources/update', Cast.resource(resource));
  });

  return this;
};

/**
 * Remove one ore more resources from the store.
 *
 * @param {Object|Object[]} resources - Resources to remove.
 * @returns {Segel.resources}
 */
Segel.resources.remove = function (resources) {
  Process(resources, function (resource) {
    Store.commit('resources/remove', Cast.resource(resource));
  });

  return this;
};

/**
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
Segel.resources.end = returnSegel;

/**
 * Base for methods manipulating time in store.
 *
 * @type {Object}
 */
Segel.time = {};

/**
 * Set the current user.
 *
 * @param start
 * @param end
 * @returns {Segel.time}
 */
Segel.time.set = function (start, end) {
  Store.commit('setTime', {
    start: start,
    end: end
  });

  return this;
};

/**
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
Segel.time.end = returnSegel;

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
    user = { id: user };
  }

  Store.commit('user/set', user);

  return this;
};

/**
 * Return traversal to main Segel object.
 *
 * @returns {Segel}
 */
Segel.user.end = returnSegel;

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

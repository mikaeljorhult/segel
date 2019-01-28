# Segel

Vue component for creating Gantt-like timeline charts for bookings.

[![Build Status](https://img.shields.io/travis/mikaeljorhult/segel.svg)](https://travis-ci.org/mikaeljorhult/segel)
[![Downloads](https://img.shields.io/npm/dt/segel.svg)](https://www.npmjs.com/package/segel)
[![Version](https://img.shields.io/npm/v/segel.svg)](https://www.npmjs.com/package/segel)
[![License](https://img.shields.io/npm/l/segel.svg)](http://mikaeljorhult.mit-license.org)

## Installation

Install using NPM:

```
npm install segel
```

Install using Yarn:

```
yarn add segel
```

Also available for use in browser through [unpkg](https://unpkg.com):

## Usage

Basic usage:

```html
<body>
  <div id="app">
    <Segel
      v-bind:resources="resources"
      v-bind:bookings="bookings"
      v-on:bookings-create="handleCreate"
      v-on:bookings-update="handleUpdate"
      v-on:bookings-delete="handleDelete"
    ></Segel>
  </div>

  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/interactjs"></script>
  <script src="https://unpkg.com/segel"></script>
  <script>
    let today = new Date();

    let app = new Vue({
      el: "#app",
      data: {
        resources: [{ id: 1, name: "Conference Room A" }],
        bookings: [
          {
            id: 1,
            resource: 1,
            start: today.setHours(8, 0, 0, 0) / 1000,
            end: today.setHours(10, 0, 0, 0) / 1000
          },
          {
            id: 2,
            resource: 1,
            start: today.setHours(11, 0, 0, 0) / 1000,
            end: today.setHours(12, 0, 0, 0) / 1000
          },
          {
            id: 3,
            resource: 1,
            start: today.setHours(13, 0, 0, 0) / 1000,
            end: today.setHours(17, 0, 0, 0) / 1000
          }
        ],
        bookingID: 10
      },
      methods: {
        handleCreate: function(booking) {
          // Give booking a unique ID and append to array.
          booking.id = ++this.bookingID;
          this.bookings.push(booking);
        },
        handleUpdate: function(booking) {
          // Find index of updated booking.
          let index = this.bookings.findIndex(function(stored) {
            return stored.id == booking.id;
          });

          this.bookings.splice(index, 1, booking);
        },
        handleDelete: function(booking) {
          // Find index of deleted booking.
          let index = this.bookings.findIndex(function(stored) {
            return stored.id == booking.id;
          });

          // Remove booking from array.
          this.bookings.splice(index, 1);
        }
      }
    });
  </script>
</body>
```

## License

Segel is released under the [MIT license](http://mikaeljorhult.mit-license.org).

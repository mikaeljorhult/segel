# Segel

Vue-based module for creating Gantt-like timeline charts for bookings.

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
```html
<body>
    <div id="segel"></div>

    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/interact.js"></script>
    <script src="https://unpkg.com/segel"></script>
    <script>
        Segel('#segel');
    </script>
</body>
```

## Usage
Basic usage:
```javascript
Segel('#segel');
```

The constructor also takes an optional configuration to disable the possibility for the user to edit bookings.
```javascript
Segel('#segel', {
  editable: false
});
```

Add objects and bookings:
```javascript
let segel = Segel('#segel');

// Add an new object.
segel.objects.add({
  id: 1,
  name: 'Conference Room'
});

// Create a new booking of the object on current date between 10 am and 11 am.
segel.bookings.add({
  id: 1,
  object: 1,
  start: Math.floor(new Date().setHours(10, 0, 0, 0) / 1000),
  end: Math.floor(new Date().setHours(11, 0, 0, 0) / 1000)
});
```

## License
Segel is released under the [MIT license](http://mikaeljorhult.mit-license.org).

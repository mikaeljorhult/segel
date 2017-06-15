'use strict';

// Dependencies.
import interact from 'interact.js';

function snapGrid (coordinates) {
  return [
    interact.createSnapGrid(coordinates)
  ];
}

export default {
  create: function (width, height, steps) {
    return snapGrid({
      x: width / steps,
      y: height
    });
  },
  round: function (timestamp, duration, steps) {
    var size = duration / steps;
    var offset = timestamp % size;
    var rounded = timestamp - offset;

    return offset > (size / 2) ? rounded + size : rounded;
  }
};

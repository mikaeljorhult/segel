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
  }
};

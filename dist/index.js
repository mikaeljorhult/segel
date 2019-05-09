(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("interactjs"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("Segel", ["interactjs", "vue"], factory);
	else if(typeof exports === 'object')
		exports["Segel"] = factory(require("interactjs"), require("vue"));
	else
		root["Segel"] = factory(root["interact"], root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_interactjs__, __WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_reactive_provide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-reactive-provide */ "./node_modules/vue-reactive-provide/dist/VueReactiveProvide.umd.min.js");
/* harmony import */ var vue_reactive_provide__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_reactive_provide__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _indicator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator.vue */ "./src/components/indicator.vue");
/* harmony import */ var _ruler_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ruler.vue */ "./src/components/ruler.vue");
/* harmony import */ var _resources_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources.vue */ "./src/components/resources.vue");
/* harmony import */ var _helpers_cast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/cast */ "./src/helpers/cast.js");
/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/events */ "./src/helpers/events.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    editable: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    bookings: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    resources: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    start: {
      type: Number,
      "default": function _default() {
        return _helpers_cast__WEBPACK_IMPORTED_MODULE_4__["default"].date(new Date().setHours(0, 0, 0, 0));
      }
    },
    end: {
      type: Number,
      "default": function _default() {
        return _helpers_cast__WEBPACK_IMPORTED_MODULE_4__["default"].date(new Date().setHours(24, 0, 0, 0));
      }
    },
    steps: {
      type: Number,
      "default": function _default() {
        return 48;
      }
    }
  },
  data: function data() {
    return {
      timer: null,
      current: _helpers_cast__WEBPACK_IMPORTED_MODULE_4__["default"].date(new Date()),
      duration: function duration() {
        return this.end - this.start;
      }
    };
  },
  mixins: [Object(vue_reactive_provide__WEBPACK_IMPORTED_MODULE_0__["ReactiveProvideMixin"])({
    name: 'config',
    include: ['editable', 'steps']
  }), Object(vue_reactive_provide__WEBPACK_IMPORTED_MODULE_0__["ReactiveProvideMixin"])({
    name: 'time',
    include: ['start', 'end', 'current', 'duration']
  })],
  components: {
    "segel-indicator": _indicator_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "segel-ruler": _ruler_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "segel-resources": _resources_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    updateTimer: function updateTimer() {
      this.current = _helpers_cast__WEBPACK_IMPORTED_MODULE_4__["default"].date(new Date());
    },
    cancelTimer: function cancelTimer() {
      clearInterval(this.timer);
    }
  },
  created: function created() {
    var _this = this;

    this.timer = setInterval(this.updateTimer, 1000);
    _helpers_events__WEBPACK_IMPORTED_MODULE_5__["default"].$on("bookings-create", function (booking) {
      _this.$emit("bookings-create", booking);
    });
    _helpers_events__WEBPACK_IMPORTED_MODULE_5__["default"].$on("bookings-update", function (booking) {
      _this.$emit("bookings-update", booking);
    });
    _helpers_events__WEBPACK_IMPORTED_MODULE_5__["default"].$on("bookings-delete", function (booking) {
      _this.$emit("bookings-delete", booking);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.cancelTimer();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/booking.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/booking.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! interactjs */ "interactjs");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/inRange */ "./node_modules/lodash/inRange.js");
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_inRange__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/events */ "./src/helpers/events.js");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/grid */ "./src/helpers/grid.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    resource: {
      type: [String, Number],
      required: true
    },
    status: {
      type: String,
      "default": "confirmed"
    },
    editable: {
      type: Boolean,
      "default": true
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      isInteractDragging: false,
      isInteractResizing: false,
      interactPosition: {
        x: 0,
        y: 0
      },
      interactSize: {
        width: null,
        height: null
      }
    };
  },
  inject: ["config", "time"],
  watch: {
    isEditable: function isEditable(value) {
      // Deactivate interactions when not editable.
      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).draggable().enabled = value;
      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).resizable().enabled = value;
    }
  },
  computed: {
    isEditable: function isEditable() {
      // Check if bookings should be editable at all.
      if (!this.config.editable) {
        return false;
      } // Check if this specific booking is editable.


      if (!this.editable) {
        return false;
      } // Check if status isn't updating.


      if (this.status === "updating") {
        return false;
      } // Past and current bookings can't be edited.


      return this.start > this.time.current;
    },
    isInView: function isInView() {
      return lodash_inRange__WEBPACK_IMPORTED_MODULE_2___default()(this.start, this.time.start, this.time.end) || lodash_inRange__WEBPACK_IMPORTED_MODULE_2___default()(this.end, this.time.start, this.time.end) || this.start < this.time.start && this.end > this.time.start || this.end < this.time.end && this.end > this.time.end;
    },
    duration: function duration() {
      return this.end - this.start;
    },
    styleLeft: function styleLeft() {
      return "".concat((this.start - this.time.start) / this.time.duration() * 100, "%");
    },
    styleWidth: function styleWidth() {
      if (this.isInteractResizing) {
        return "".concat(this.interactSize.width, "px");
      } else {
        return "".concat(this.duration / this.time.duration() * 100, "%");
      }
    },
    styleTransform: function styleTransform() {
      if (this.isInteractDragging || this.isInteractResizing) {
        var _this$interactPositio = this.interactPosition,
            x = _this$interactPositio.x,
            y = _this$interactPositio.y;
        return "translate(".concat(x, "px, ").concat(y, "px)");
      }

      return null;
    }
  },
  methods: {
    handleDblclick: function handleDblclick() {
      // Disregard all clicks when Segel is not editable.
      if (!this.config.editable) {
        return;
      } // Emit event to delete booking.


      _helpers_events__WEBPACK_IMPORTED_MODULE_3__["default"].$emit("bookings-delete", {
        id: this.id
      }); // Reset cursor style.

      window.document.documentElement.setAttribute("style", "");
    },
    handleResize: function handleResize() {
      // Calculate new snap grid.
      var snapGrid = _helpers_grid__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.$parent.$el.clientWidth, 36, this.config.steps); // Set new grid based on current widths.
      // TODO: Calculate height.

      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).draggable().modifiers[0].options.targets = snapGrid;
      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).resizable().modifiers[0].options.targets = snapGrid;
      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).resizable().modifiers[1].options.min = {
        width: this.$parent.$el.clientWidth / this.config.steps,
        height: 1
      };
      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).resizable().modifiers[1].options.max = {
        width: this.$parent.$el.clientWidth,
        height: 40
      };
    },
    interactSetPosition: function interactSetPosition(coordinates) {
      var _coordinates$x = coordinates.x,
          x = _coordinates$x === void 0 ? 0 : _coordinates$x,
          _coordinates$y = coordinates.y,
          y = _coordinates$y === void 0 ? 0 : _coordinates$y;
      this.interactPosition = {
        x: x,
        y: y
      };
    },
    interactResetPosition: function interactResetPosition() {
      this.interactSetPosition({
        x: 0,
        y: 0
      });
    },
    interactSetSize: function interactSetSize(sizes) {
      var _sizes$width = sizes.width,
          width = _sizes$width === void 0 ? 0 : _sizes$width,
          _sizes$height = sizes.height,
          height = _sizes$height === void 0 ? 0 : _sizes$height;
      this.interactSize = {
        width: width,
        height: height
      };
    },
    interactResetSize: function interactResetSize() {
      this.interactSetSize({
        width: null,
        height: null
      });
    }
  },
  mounted: function mounted() {
    // Wait until all components have been mounted.
    this.$nextTick(function () {
      var _this = this;

      var snapGrid = _helpers_grid__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.$parent.$el.clientWidth, 36, this.config.steps); // Initialize interact on component this.$el.

      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).draggable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [interactjs__WEBPACK_IMPORTED_MODULE_1___default.a.modifiers.snap({
          targets: snapGrid,
          offset: "startCoords"
        })],
        restrict: {
          restriction: ".segel-resources"
        },
        onstart: function onstart() {
          _this.isInteractDragging = true;
        },
        onmove: function onmove(event) {
          // Get previous position from resource data.
          var x = _this.interactPosition.x + event.dx;
          var y = _this.interactPosition.y + event.dy; // Update the position.

          _this.interactSetPosition({
            x: x,
            y: y
          });
        },
        onend: function onend() {
          // Reset booking styles.
          _this.isInteractDragging = false;
        }
      });
      interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).resizable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [interactjs__WEBPACK_IMPORTED_MODULE_1___default.a.modifiers.snap({
          targets: snapGrid,
          offset: "startCoords"
        }), interactjs__WEBPACK_IMPORTED_MODULE_1___default.a.modifiers.restrictSize({
          min: {
            width: this.$parent.$el.clientWidth / this.config.steps,
            height: 1
          },
          max: {
            width: this.$parent.$el.clientWidth,
            height: 40
          }
        })],
        edges: {
          top: false,
          bottom: false,
          left: ".segel-resize-handle__left",
          right: ".segel-resize-handle__right"
        },
        onstart: function onstart() {
          _this.isInteractResizing = true;
        },
        onmove: function onmove(event) {
          // Get position and size of element.
          var x = _this.interactPosition.x + event.deltaRect.left;
          var y = _this.interactPosition.y + event.deltaRect.top;
          var width = event.rect.width;
          var height = event.rect.height; // Update the position.

          _this.interactSetPosition({
            x: x,
            y: y
          });

          _this.interactSetSize({
            width: width,
            height: height
          });
        },
        onend: function onend() {
          var start = Math.round((_this.$el.offsetLeft + _this.interactPosition.x) / _this.$parent.$el.clientWidth * _this.time.duration());
          var end = Math.round(_this.$el.getBoundingClientRect().width / _this.$parent.$el.clientWidth * _this.time.duration()); // Emit event to update booking.

          _helpers_events__WEBPACK_IMPORTED_MODULE_3__["default"].$emit("bookings-update", {
            id: _this.id,
            resource: _this.resource,
            start: _helpers_grid__WEBPACK_IMPORTED_MODULE_4__["default"].round(_this.time.start + start, _this.time.duration(), _this.config.steps),
            end: _helpers_grid__WEBPACK_IMPORTED_MODULE_4__["default"].round(_this.time.start + start + end, _this.time.duration(), _this.config.steps),
            editable: _this.editable
          }); // Reset booking styles.

          _this.isInteractResizing = false;

          _this.interactResetSize();

          _this.interactResetPosition();
        }
      }); // TODO: Calculate snap grid globally.

      window.addEventListener("resize", lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.handleResize.bind(), 150));
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Remove event listener for resize.
    window.removeEventListener("resize", lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.handleResize.bind(), 150)); // Destroy interact instance on component this.$el.

    interactjs__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).unset();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/indicator.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/indicator.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/inRange */ "./node_modules/lodash/inRange.js");
/* harmony import */ var lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_inRange__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  inject: ["time"],
  computed: {
    isInView: function isInView() {
      return lodash_inRange__WEBPACK_IMPORTED_MODULE_0___default()(this.time.current, this.time.start, this.time.end);
    },
    left: function left() {
      return (this.time.current - this.time.start) / this.time.duration() * 100;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resource.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! interactjs */ "interactjs");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _booking_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.vue */ "./src/components/booking.vue");
/* harmony import */ var _helpers_cast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/cast */ "./src/helpers/cast.js");
/* harmony import */ var _helpers_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/events */ "./src/helpers/events.js");
/* harmony import */ var _helpers_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/grid */ "./src/helpers/grid.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bookings: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      dropTarget: false
    };
  },
  inject: ["config", "time"],
  components: {
    "segel-booking": _booking_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    handleDblclick: function handleDblclick(event) {
      // Disregard all clicks when Segel is not editable or if event originates another this.$el.
      if (!this.config.editable || event.target.className !== "segel-bookings") {
        return;
      }

      var position = Math.round(event.offsetX / this.$parent.$el.clientWidth * this.time.duration());
      var stepSize = this.time.duration() / this.config.steps;
      var start = _helpers_grid__WEBPACK_IMPORTED_MODULE_4__["default"].round(position + this.time.start, this.time.duration(), this.config.steps); // Emit event to create booking.

      _helpers_events__WEBPACK_IMPORTED_MODULE_3__["default"].$emit("bookings-create", {
        resource: this.id,
        start: start,
        end: start + stepSize * 2
      });
    }
  },
  mounted: function mounted() {
    // Wait until all components have been mounted.
    this.$nextTick(function () {
      var _this = this;

      interactjs__WEBPACK_IMPORTED_MODULE_0___default()(this.$el).dropzone({
        ondragenter: function ondragenter() {
          _this.$el.classList.add("droppable");
        },
        ondragleave: function ondragleave() {
          _this.$el.classList.remove("droppable");
        },
        ondrop: function ondrop(event) {
          // TODO: Move access to booking component.
          var bookingComponent = event.relatedTarget.__vue__; // Convert moved pixels to change in timestamp.

          var change = Math.round(bookingComponent.interactPosition.x / _this.$el.clientWidth * _this.time.duration()); // Build object.

          var booking = {
            resource: _this.id,
            start: _helpers_cast__WEBPACK_IMPORTED_MODULE_2__["default"].date(parseInt(bookingComponent.start) + change),
            end: _helpers_cast__WEBPACK_IMPORTED_MODULE_2__["default"].date(parseInt(bookingComponent.end) + change)
          }; // Create copy if ALT key is pressed, otherwise edit existing.

          if (event.dragEvent.altKey) {
            // Emit event to create booking.
            _helpers_events__WEBPACK_IMPORTED_MODULE_3__["default"].$emit("bookings-create", booking);
          } else {
            // Append ID of moved booking.
            booking.id = bookingComponent.id; // Emit event to update booking.

            _helpers_events__WEBPACK_IMPORTED_MODULE_3__["default"].$emit("bookings-update", booking);
          }

          _this.$el.classList.remove("droppable"); // Reset booking position.


          bookingComponent.interactResetPosition();
        }
      });
    });
  },
  beforeDestroy: function beforeDestroy() {
    // Destroy interact instance on component this.$el.
    interactjs__WEBPACK_IMPORTED_MODULE_0___default()(this.$el).unset();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource.vue */ "./src/components/resource.vue");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    resources: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    bookings: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  components: {
    "segel-resource": _resource_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    relatedBookings: function relatedBookings(resource) {
      return this.bookings.filter(function (booking) {
        return booking.resource === resource;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ruler.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ruler.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    leadingZero: function leadingZero(value) {
      return ("0" + value).slice(-2);
    }
  }
});

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseInRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseInRange.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

module.exports = baseInRange;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/inRange.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/inRange.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseInRange = __webpack_require__(/*! ./_baseInRange */ "./node_modules/lodash/_baseInRange.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

module.exports = inRange;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main.vue?vue&type=template&id=54d3a52e&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main.vue?vue&type=template&id=54d3a52e& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { ref: "main", staticClass: "segel" }, [
    _c(
      "div",
      { staticClass: "segel-container" },
      [
        _c(
          "ul",
          { staticClass: "segel-grid" },
          _vm._l(24, function(n) {
            return _c("li", [_vm._v(" ")])
          }),
          0
        ),
        _vm._v(" "),
        _c("segel-indicator"),
        _vm._v(" "),
        _c("segel-ruler"),
        _vm._v(" "),
        _c("segel-resources", {
          attrs: { resources: _vm.resources, bookings: _vm.bookings }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/booking.vue?vue&type=template&id=4698bdf9&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/booking.vue?vue&type=template&id=4698bdf9& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isInView
    ? _c(
        "li",
        {
          class: {
            "segel-booking": true,
            editable: _vm.isEditable,
            dragging: _vm.isInteractDragging,
            resizing: _vm.isInteractResizing
          },
          style: {
            left: _vm.styleLeft,
            width: _vm.styleWidth,
            transform: _vm.styleTransform
          },
          on: { dblclick: _vm.handleDblclick }
        },
        [
          _vm.isEditable
            ? _c(
                "span",
                {
                  staticClass: "segel-resize-handle segel-resize-handle__left"
                },
                [_vm._v("⋮")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isEditable
            ? _c(
                "span",
                {
                  staticClass: "segel-resize-handle segel-resize-handle__right"
                },
                [_vm._v("⋮")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.status === "updating"
            ? _c("div", { staticClass: "progress" })
            : _vm._e()
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/indicator.vue?vue&type=template&id=ddd032a2&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/indicator.vue?vue&type=template&id=ddd032a2& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isInView
    ? _c("div", {
        class: { "segel-indicator": true },
        style: { left: _vm.left + "%" }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resource.vue?vue&type=template&id=071bd91e&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource.vue?vue&type=template&id=071bd91e& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "segel-resource" }, [
    _vm._v("\n  " + _vm._s(_vm.name) + "\n\n  "),
    _c(
      "ul",
      { staticClass: "segel-bookings", on: { dblclick: _vm.handleDblclick } },
      _vm._l(_vm.bookings, function(booking) {
        return _c("segel-booking", {
          key: booking.id,
          attrs: {
            id: booking.id,
            resource: _vm.id,
            status: booking.status,
            start: booking.start,
            end: booking.end,
            editable: booking.editable
          }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=template&id=3fea2876&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=template&id=3fea2876& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "segel-resources" },
    _vm._l(_vm.resources, function(resource) {
      return _c("segel-resource", {
        key: resource.id,
        attrs: {
          id: resource.id,
          name: resource.name,
          bookings: _vm.relatedBookings(resource.id)
        }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ruler.vue?vue&type=template&id=08c0abd4&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ruler.vue?vue&type=template&id=08c0abd4& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "segel-ruler" }, [
    _c(
      "ul",
      _vm._l(24, function(n) {
        return _c("li", [
          _c(
            "span",
            { class: [n === new Date().getHours() + 1 ? "current" : ""] },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm._f("leadingZero")(n - 1)) +
                  "\n            "
              )
            ]
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-reactive-provide/dist/VueReactiveProvide.umd.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-reactive-provide/dist/VueReactiveProvide.umd.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t(__webpack_require__(/*! vue */ "vue")):undefined})("undefined"!==typeof self?self:this,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="fb15")}({"8bbf":function(t,o){t.exports=e},fb15:function(e,t,o){"use strict";var n;(o.r(t),"undefined"!==typeof window)&&((n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(o.p=n[1]));var r=o("8bbf"),i=o.n(r);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var c=function(){return i.a.observable({})},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(e)||"object"!==u(e))return e;var o=Array.isArray(t)?t:Object.keys(t),n=!Array.isArray(t);return o.reduce(function(o,r){var i=n?t[r]:r;return o[i]=e[r],o},{})};function a(e){console.error("[vue-reactive-provide]: ".concat(e))}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,o=e.nameForComputed,n=void 0===o?null:o,r=e.props,u=void 0!==r&&r,p=e.attrs,d=void 0!==p&&p,l=e.listeners,v=void 0!==l&&l,y=e.include,b=void 0!==y&&y,m=e.inheritAs,h=void 0!==m&&m;if(t){var j="",g=n||t;return{beforeCreate:function(){j="$_reactiveProvide-".concat(t,"-Data"),this[j]=c()},provide:function(){return s({},t,this[j])},inject:h?s({},h,{from:t,default:{}}):void 0,computed:s({},g,function(){var e={};return h&&Object.assign(e,this[h]),b&&Object.assign(e,f(this,b)),u&&Object.assign(e,this.$props),d&&Object.assign(e,this.$attrs),v&&Object.assign(e,this.$listeners),e}),watch:s({},g,{immediate:!0,handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this[j];Object.keys(e).forEach(function(o){t.hasOwnProperty(o)?t[o]=e[o]:i.a.set(t,o,e[o])})}})}}a("[vue-reactive-provide]: No name property found on options object when trying to create mixin.\n      the 'name' property is required.")}function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var l=i.a.config.optionMergeStrategies,v=l.provide,y=l.computed,b=l.inject,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,o=void 0===t?"reactiveProvide":t;return{beforeCreate:function(){var e=this,t=this.$options[o];if(t&&("function"===typeof t&&(t=t.call(this,this)),"object"===d(t))){var n=p(t),r=n.beforeCreate,i=n.provide,u=n.inject,c=n.computed,f=n.watch;r.call(this,this),this.$options.computed=y(this.$options.computed,c,this,"computed"),this.$options.provide=v(this.$options.provide,i,this,"provide"),this.$options.inject=b(this.$options.inject,u,this,"inject"),this.$once("hook:created",function(){var o=e.$watch(function(){return e[t.name]},f[t.name].handler,{immediate:!0});e.$on("hook:beforeDestroy",o)})}}}};function h(e,t){e.mixin(m(t))}var j={install:h,version:"0.3.0"};o.d(t,"ReactiveProvideMixin",function(){return p});t["default"]=j}})});
//# sourceMappingURL=VueReactiveProvide.umd.min.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/Main.vue":
/*!*********************************!*\
  !*** ./src/components/Main.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_54d3a52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=54d3a52e& */ "./src/components/Main.vue?vue&type=template&id=54d3a52e&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./src/components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_54d3a52e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_54d3a52e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Main.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/Main.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Main.vue?vue&type=template&id=54d3a52e&":
/*!****************************************************************!*\
  !*** ./src/components/Main.vue?vue&type=template&id=54d3a52e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_54d3a52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=54d3a52e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main.vue?vue&type=template&id=54d3a52e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_54d3a52e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_54d3a52e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/booking.vue":
/*!************************************!*\
  !*** ./src/components/booking.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _booking_vue_vue_type_template_id_4698bdf9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.vue?vue&type=template&id=4698bdf9& */ "./src/components/booking.vue?vue&type=template&id=4698bdf9&");
/* harmony import */ var _booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.vue?vue&type=script&lang=js& */ "./src/components/booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _booking_vue_vue_type_template_id_4698bdf9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _booking_vue_vue_type_template_id_4698bdf9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/booking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/booking.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/booking.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./booking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/booking.vue?vue&type=template&id=4698bdf9&":
/*!*******************************************************************!*\
  !*** ./src/components/booking.vue?vue&type=template&id=4698bdf9& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_template_id_4698bdf9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./booking.vue?vue&type=template&id=4698bdf9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/booking.vue?vue&type=template&id=4698bdf9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_template_id_4698bdf9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_booking_vue_vue_type_template_id_4698bdf9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/indicator.vue":
/*!**************************************!*\
  !*** ./src/components/indicator.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_ddd032a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator.vue?vue&type=template&id=ddd032a2& */ "./src/components/indicator.vue?vue&type=template&id=ddd032a2&");
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator.vue?vue&type=script&lang=js& */ "./src/components/indicator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indicator_vue_vue_type_template_id_ddd032a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indicator_vue_vue_type_template_id_ddd032a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/indicator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/indicator.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/indicator.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./indicator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/indicator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/indicator.vue?vue&type=template&id=ddd032a2&":
/*!*********************************************************************!*\
  !*** ./src/components/indicator.vue?vue&type=template&id=ddd032a2& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_template_id_ddd032a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./indicator.vue?vue&type=template&id=ddd032a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/indicator.vue?vue&type=template&id=ddd032a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_template_id_ddd032a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_template_id_ddd032a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/resource.vue":
/*!*************************************!*\
  !*** ./src/components/resource.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resource_vue_vue_type_template_id_071bd91e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource.vue?vue&type=template&id=071bd91e& */ "./src/components/resource.vue?vue&type=template&id=071bd91e&");
/* harmony import */ var _resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource.vue?vue&type=script&lang=js& */ "./src/components/resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resource_vue_vue_type_template_id_071bd91e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resource_vue_vue_type_template_id_071bd91e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/resource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/resource.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/resource.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./resource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/resource.vue?vue&type=template&id=071bd91e&":
/*!********************************************************************!*\
  !*** ./src/components/resource.vue?vue&type=template&id=071bd91e& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resource_vue_vue_type_template_id_071bd91e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./resource.vue?vue&type=template&id=071bd91e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resource.vue?vue&type=template&id=071bd91e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resource_vue_vue_type_template_id_071bd91e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resource_vue_vue_type_template_id_071bd91e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/resources.vue":
/*!**************************************!*\
  !*** ./src/components/resources.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.vue?vue&type=template&id=3fea2876& */ "./src/components/resources.vue?vue&type=template&id=3fea2876&");
/* harmony import */ var _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.vue?vue&type=script&lang=js& */ "./src/components/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__["render"],
  _resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/resources.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/resources.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/resources.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/resources.vue?vue&type=template&id=3fea2876&":
/*!*********************************************************************!*\
  !*** ./src/components/resources.vue?vue&type=template&id=3fea2876& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./resources.vue?vue&type=template&id=3fea2876& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/resources.vue?vue&type=template&id=3fea2876&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_resources_vue_vue_type_template_id_3fea2876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ruler.vue":
/*!**********************************!*\
  !*** ./src/components/ruler.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ruler_vue_vue_type_template_id_08c0abd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ruler.vue?vue&type=template&id=08c0abd4& */ "./src/components/ruler.vue?vue&type=template&id=08c0abd4&");
/* harmony import */ var _ruler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ruler.vue?vue&type=script&lang=js& */ "./src/components/ruler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ruler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ruler_vue_vue_type_template_id_08c0abd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ruler_vue_vue_type_template_id_08c0abd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ruler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ruler.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/ruler.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ruler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./ruler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ruler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ruler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ruler.vue?vue&type=template&id=08c0abd4&":
/*!*****************************************************************!*\
  !*** ./src/components/ruler.vue?vue&type=template&id=08c0abd4& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ruler_vue_vue_type_template_id_08c0abd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ruler.vue?vue&type=template&id=08c0abd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ruler.vue?vue&type=template&id=08c0abd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ruler_vue_vue_type_template_id_08c0abd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ruler_vue_vue_type_template_id_08c0abd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/helpers/cast.js":
/*!*****************************!*\
  !*** ./src/helpers/cast.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Far future date to compare timestamps against.
 * Is used to detect if timestamp is defined in seconds or milliseconds.
 * This will make it impossible to use dates beyond year 10000.
 *
 * @type {Date}
 */
var futureDate = new Date(10000, 1, 1);
/**
 * Base cast object.
 *
 * @type {Object}
 */

var Cast = {};
/**
 * Cast properties of a booking to correct type.
 *
 * @param {Object} booking - Booking to work with.
 * @returns {Object} - Booking with properties cast to correct types.
 */

Cast.booking = function (booking) {
  booking.start = this.date(booking.start);
  booking.end = this.date(booking.end);
  return booking;
};
/**
 * Cast properties of a resource to correct type.
 *
 * @param {Object} resource - Resource to work with.
 * @returns {Object} - Resource with properties cast to correct types.
 */


Cast.resource = function (resource) {
  return resource;
};
/**
 * Convert date and time to an Unix Epoch timestamp.
 *
 * @param date - Date to be cast.
 * @returns {number} - Date in Unix Epoch timestamp (seconds).
 */


Cast.date = function (date) {
  var dateReturn = date; // Convert strings to integer if it's numeric.

  if (Object.prototype.toString.call(date) === "[object String]" && /^\d+$/.test(date)) {
    date = parseInt(date);
  }

  switch (Object.prototype.toString.call(date)) {
    case "[object Date]":
      // Get Unix timestamp (in milliseconds) and divide to seconds.
      dateReturn = date.getTime() / 1000;
      break;

    case "[object Number]":
      // If timestamp is in milliseconds it will be beyond year 10000 multiplied, otherwise assume it is in seconds.
      dateReturn = date * 1000 > futureDate.getTime() ? date / 1000 : date;
      break;

    default:
      // Leave it to Date constructor if not recognized.
      dateReturn = new Date(date).getTime();
      break;
  }

  return Math.floor(dateReturn);
}; // Return the instance.


/* harmony default export */ __webpack_exports__["default"] = (Cast);

/***/ }),

/***/ "./src/helpers/events.js":
/*!*******************************!*\
  !*** ./src/helpers/events.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies.

/**
 * Create base events object.
 * This is just a separate Vue instance that only handles emitting and listening to events.
 *
 * @type {Vue}
 */

var Events = new vue__WEBPACK_IMPORTED_MODULE_0___default.a(); // Return the instance.

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ "./src/helpers/grid.js":
/*!*****************************!*\
  !*** ./src/helpers/grid.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! interactjs */ "interactjs");
/* harmony import */ var interactjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(interactjs__WEBPACK_IMPORTED_MODULE_0__);
// Dependencies.

/**
 * Create an interact.js snap grid.
 *
 * @param {Object} coordinates - Size of grid in pixels.
 * @returns {Array} - interact.js snap grid.
 */

function snapGrid(coordinates) {
  return [interactjs__WEBPACK_IMPORTED_MODULE_0___default.a.createSnapGrid(coordinates)];
}
/**
 * Base grid object.
 *
 * @type {Object}
 */


var Grid = {};
/**
 * Create snap grid.
 *
 * @param {Number} width - Width of the available area in pixels.
 * @param {Number} height - Height of the grid in pixels.
 * @param {Number} steps - Number of steps to divide the horizontal space in.
 * @returns {Array} - interact.js snap grid.
 */

Grid.create = function (width, height, steps) {
  return snapGrid({
    x: width / steps,
    y: height
  });
};
/**
 * Round timestamp to closest step.
 *
 * @param {Number} timestamp - Timestamp to round.
 * @param {Number} duration - Duration of the calendar.
 * @param {Number} steps - Number of steps within the duration of the calendar.
 * @returns {Number} - Rounded timestamp.
 */


Grid.round = function (timestamp, duration, steps) {
  var size = duration / steps;
  var offset = timestamp % size;
  var rounded = timestamp - offset;
  return offset >= size / 2 ? rounded + size : rounded;
}; // Return the instance.


/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.vue");
// Import main Segel component.
 // Declare install function executed by Vue.use().

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Segel", _components_Main__WEBPACK_IMPORTED_MODULE_0__["default"]);
} // Create module definition for Vue.use().

var plugin = {
  install: install
}; // Auto-install when Vue is found (eg. in browser via <script> tag).

var GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // To allow use as module (npm/webpack/etc.) export component.


/* harmony default export */ __webpack_exports__["default"] = (_components_Main__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/index.js ./src/styles/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mikaeljorhult/Dropbox/Projekt/Hydrofon/Segel/Source/src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! /Users/mikaeljorhult/Dropbox/Projekt/Hydrofon/Segel/Source/src/styles/main.scss */"./src/styles/main.scss");


/***/ }),

/***/ "interactjs":
/*!********************************************************************************************************!*\
  !*** external {"commonjs":"interactjs","commonjs2":"interactjs","amd":"interactjs","root":"interact"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_interactjs__;

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ })["default"];
});
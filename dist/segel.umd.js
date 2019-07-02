(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("interactjs"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "interactjs"], factory);
	else if(typeof exports === 'object')
		exports["segel"] = factory(require("vue"), require("interactjs"));
	else
		root["segel"] = factory(root["Vue"], root["interact"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE__9720__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

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

/***/ "1310":
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

/***/ "1a8c":
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

/***/ "28e9":
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t(__webpack_require__("8bbf")):undefined})("undefined"!==typeof self?self:this,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="fb15")}({"8bbf":function(t,o){t.exports=e},fb15:function(e,t,o){"use strict";var n;(o.r(t),"undefined"!==typeof window)&&((n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(o.p=n[1]));var r=o("8bbf"),i=o.n(r);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var c=function(){return i.a.observable({})},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(Array.isArray(e)||"object"!==u(e))return e;var o=Array.isArray(t)?t:Object.keys(t),n=!Array.isArray(t);return o.reduce(function(o,r){var i=n?t[r]:r;return o[i]=e[r],o},{})};function a(e){console.error("[vue-reactive-provide]: ".concat(e))}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,o=e.nameForComputed,n=void 0===o?null:o,r=e.props,u=void 0!==r&&r,p=e.attrs,d=void 0!==p&&p,l=e.listeners,v=void 0!==l&&l,y=e.include,b=void 0!==y&&y,m=e.inheritAs,h=void 0!==m&&m;if(t){var j="",g=n||t;return{beforeCreate:function(){j="$_reactiveProvide-".concat(t,"-Data"),this[j]=c()},provide:function(){return s({},t,this[j])},inject:h?s({},h,{from:t,default:{}}):void 0,computed:s({},g,function(){var e={};return h&&Object.assign(e,this[h]),b&&Object.assign(e,f(this,b)),u&&Object.assign(e,this.$props),d&&Object.assign(e,this.$attrs),v&&Object.assign(e,this.$listeners),e}),watch:s({},g,{immediate:!0,handler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this[j];Object.keys(e).forEach(function(o){t.hasOwnProperty(o)?t[o]=e[o]:i.a.set(t,o,e[o])})}})}}a("[vue-reactive-provide]: No name property found on options object when trying to create mixin.\n      the 'name' property is required.")}function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}var l=i.a.config.optionMergeStrategies,v=l.provide,y=l.computed,b=l.inject,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,o=void 0===t?"reactiveProvide":t;return{beforeCreate:function(){var e=this,t=this.$options[o];if(t&&("function"===typeof t&&(t=t.call(this,this)),"object"===d(t))){var n=p(t),r=n.beforeCreate,i=n.provide,u=n.inject,c=n.computed,f=n.watch;r.call(this,this),this.$options.computed=y(this.$options.computed,c,this,"computed"),this.$options.provide=v(this.$options.provide,i,this,"provide"),this.$options.inject=b(this.$options.inject,u,this,"inject"),this.$once("hook:created",function(){var o=e.$watch(function(){return e[t.name]},f[t.name].handler,{immediate:!0});e.$on("hook:beforeDestroy",o)})}}}};function h(e,t){e.mixin(m(t))}var j={install:h,version:"0.3.0"};o.d(t,"ReactiveProvideMixin",function(){return p});t["default"]=j}})});
//# sourceMappingURL=VueReactiveProvide.umd.min.js.map

/***/ }),

/***/ "29f3":
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

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "345a":
/***/ (function(module, exports, __webpack_require__) {

var baseInRange = __webpack_require__("cb16"),
    toFinite = __webpack_require__("6428"),
    toNumber = __webpack_require__("b4b0");

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

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

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

/***/ "408c":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

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

/***/ "5456":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73fdae25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main.vue?vue&type=template&id=542315fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"main",staticClass:"segel"},[_c('div',{staticClass:"segel-container"},[_c('ul',{staticClass:"segel-grid"},_vm._l((_vm.labels.length),function(n){return _c('li',[_vm._v(" ")])}),0),_c('segel-indicator'),_c('segel-ruler',{attrs:{"labels":_vm.labels}}),_c('segel-resources',{attrs:{"resources":_vm.resources,"bookings":_vm.bookings}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/main.vue?vue&type=template&id=542315fe&

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__("b047");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ./node_modules/vue-reactive-provide/dist/VueReactiveProvide.umd.min.js
var VueReactiveProvide_umd_min = __webpack_require__("28e9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73fdae25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/indicator.vue?vue&type=template&id=38e63325&
var indicatorvue_type_template_id_38e63325_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isInView)?_c('div',{class:{ 'segel-indicator': true },style:({ left: _vm.left + '%' })}):_vm._e()}
var indicatorvue_type_template_id_38e63325_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/indicator.vue?vue&type=template&id=38e63325&

// EXTERNAL MODULE: ./node_modules/lodash/inRange.js
var inRange = __webpack_require__("345a");
var inRange_default = /*#__PURE__*/__webpack_require__.n(inRange);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/indicator.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var indicatorvue_type_script_lang_js_ = ({
  data: function() {
    return {};
  },

  inject: ["time"],

  computed: {
    isInView: function() {
      return inRange_default()(this.time.current, this.time.start, this.time.end);
    },
    left: function() {
      return ((this.time.current - this.time.start) / this.time.duration) * 100;
    }
  }
});

// CONCATENATED MODULE: ./src/components/indicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_indicatorvue_type_script_lang_js_ = (indicatorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/components/indicator.vue





/* normalize component */

var component = normalizeComponent(
  components_indicatorvue_type_script_lang_js_,
  indicatorvue_type_template_id_38e63325_render,
  indicatorvue_type_template_id_38e63325_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var indicator = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73fdae25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ruler.vue?vue&type=template&id=34e3965c&
var rulervue_type_template_id_34e3965c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"segel-ruler"},[_c('ul',_vm._l((_vm.labels),function(label){return _c('li',[_c('span',[_vm._v("\n        "+_vm._s(label)+"\n      ")])])}),0)])}
var rulervue_type_template_id_34e3965c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ruler.vue?vue&type=template&id=34e3965c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ruler.vue?vue&type=script&lang=js&
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

/* harmony default export */ var rulervue_type_script_lang_js_ = ({
  props: ["labels"]
});

// CONCATENATED MODULE: ./src/components/ruler.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_rulervue_type_script_lang_js_ = (rulervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ruler.vue





/* normalize component */

var ruler_component = normalizeComponent(
  components_rulervue_type_script_lang_js_,
  rulervue_type_template_id_34e3965c_render,
  rulervue_type_template_id_34e3965c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ruler = (ruler_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73fdae25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=template&id=07908458&
var resourcesvue_type_template_id_07908458_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"segel-resources"},[_vm._l((_vm.resources),function(resource){return _c('segel-resource',{key:resource.id,attrs:{"id":resource.id,"name":resource.name,"bookings":_vm.relatedBookings(resource.id)}})}),(_vm.resources.length === 0)?_c('li',{staticClass:"segel-no-resources"},[_vm._v("\n    No resources have been selected.\n  ")]):_vm._e()],2)}
var resourcesvue_type_template_id_07908458_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resources.vue?vue&type=template&id=07908458&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73fdae25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource.vue?vue&type=template&id=6bfd20ea&
var resourcevue_type_template_id_6bfd20ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"segel-resource"},[_vm._v("\n  "+_vm._s(_vm.name)+"\n\n  "),_c('ul',{staticClass:"segel-bookings",on:{"dblclick":_vm.handleDblclick}},_vm._l((_vm.bookings),function(booking){return _c('segel-booking',{key:booking.id,attrs:{"id":booking.id,"resource":_vm.id,"status":booking.status,"start":booking.start,"end":booking.end,"editable":booking.editable,"classes":booking.classes,"title":booking.title}})}),1)])}
var resourcevue_type_template_id_6bfd20ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resource.vue?vue&type=template&id=6bfd20ea&

// EXTERNAL MODULE: external {"commonjs":"interactjs","commonjs2":"interactjs","amd":"interactjs","root":"interact"}
var external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_ = __webpack_require__("9720");
var external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73fdae25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/booking.vue?vue&type=template&id=101bbabf&
var bookingvue_type_template_id_101bbabf_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isInView)?_c('li',{class:_vm.classAttribute,style:(_vm.styleAttribute),attrs:{"title":_vm.title},on:{"dblclick":_vm.handleDblclick}},[(_vm.isEditable)?_c('span',{staticClass:"segel-resize-handle segel-resize-handle__left"},[_vm._v("⋮")]):_vm._e(),(_vm.isEditable)?_c('span',{staticClass:"segel-resize-handle segel-resize-handle__right"},[_vm._v("⋮")]):_vm._e(),(_vm.status === 'updating')?_c('div',{staticClass:"progress"}):_vm._e()]):_vm._e()}
var bookingvue_type_template_id_101bbabf_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/booking.vue?vue&type=template&id=101bbabf&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_);

// CONCATENATED MODULE: ./src/helpers/events.js
// Dependencies.


/**
 * Create base events object.
 * This is just a separate Vue instance that only handles emitting and listening to events.
 *
 * @type {Vue}
 */
const Events = new external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_default.a();

// Return the instance.
/* harmony default export */ var events = (Events);

// CONCATENATED MODULE: ./src/helpers/grid.js
// Dependencies.


/**
 * Create an interact.js snap grid.
 *
 * @param {Object} coordinates - Size of grid in pixels.
 * @returns {Array} - interact.js snap grid.
 */
function snapGrid(coordinates) {
  return [external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default.a.createSnapGrid(coordinates)];
}

/**
 * Base grid object.
 *
 * @type {Object}
 */
const Grid = {};

/**
 * Create snap grid.
 *
 * @param {Number} width - Width of the available area in pixels.
 * @param {Number} height - Height of the grid in pixels.
 * @param {Number} steps - Number of steps to divide the horizontal space in.
 * @returns {Array} - interact.js snap grid.
 */
Grid.create = function(width, height, steps) {
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
Grid.round = function(timestamp, duration, steps) {
  let size = duration / steps;
  let offset = timestamp % size;
  let rounded = timestamp - offset;

  return offset >= size / 2 ? rounded + size : rounded;
};

// Return the instance.
/* harmony default export */ var grid = (Grid);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/booking.vue?vue&type=script&lang=js&
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






/* harmony default export */ var bookingvue_type_script_lang_js_ = ({
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
      default: "confirmed"
    },
    editable: {
      type: Boolean,
      default: true
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    },
    classes: {
      type: Array,
      required: false,
      default: function() {
        return [];
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  },

  data: function() {
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

  inject: ["config", "grid", "time"],

  watch: {
    isEditable: function(value) {
      // Deactivate interactions when not editable.
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).draggable().enabled = value;
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).resizable().enabled = value;
    },
    grid: {
      handler: function() {
        this.handleResize();
      },
      deep: true
    }
  },

  computed: {
    isEditable: function() {
      // Check if bookings should be editable at all.
      if (!this.config.editable) {
        return false;
      }

      // Check if this specific booking is editable.
      if (!this.editable) {
        return false;
      }

      // Check if status isn't updating.
      if (this.status === "updating") {
        return false;
      }

      // Past and current bookings can't be edited.
      if (!this.config.editableInPast) {
        return this.start > this.time.current;
      } else {
        return true;
      }
    },
    isInView: function() {
      return (
        inRange_default()(this.start, this.time.start, this.time.end) ||
        inRange_default()(this.end, this.time.start, this.time.end) ||
        (this.start < this.time.start && this.end > this.time.start) ||
        (this.end < this.time.end && this.end > this.time.end)
      );
    },
    duration: function() {
      return this.end - this.start;
    },
    styleLeft: function() {
      return `${((this.start - this.time.start) / this.time.duration) * 100}%`;
    },
    styleWidth: function() {
      if (this.isInteractResizing) {
        return `${this.interactSize.width}px`;
      } else {
        return `${(this.duration / this.time.duration) * 100}%`;
      }
    },
    styleTransform: function() {
      if (this.isInteractDragging || this.isInteractResizing) {
        const { x, y } = this.interactPosition;
        return `translate(${x}px, ${y}px)`;
      }

      return null;
    },
    classAttribute: function() {
      let classObject = {
        "segel-booking": true,
        editable: this.isEditable,
        dragging: this.isInteractDragging,
        resizing: this.isInteractResizing
      };

      if (Array.isArray(this.classes) && this.classes.length > 0) {
        this.classes.forEach(function(className) {
          classObject[className] = true;
        });
      }

      return classObject;
    },
    styleAttribute: function() {
      return {
        left: this.styleLeft,
        width: this.styleWidth,
        transform: this.styleTransform
      };
    }
  },

  methods: {
    handleDblclick: function() {
      // Disregard all clicks when Segel is not editable.
      if (!this.isEditable) {
        return;
      }

      // Emit event to delete booking.
      events.$emit("bookings-delete", {
        id: this.id
      });

      // Reset cursor style.
      window.document.documentElement.setAttribute("style", "");
    },
    handleResize: function() {
      // Set new grid based on current widths.
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(
        this.$el
      ).draggable().modifiers[0].options.targets = this.grid.snap;
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(
        this.$el
      ).resizable().modifiers[0].options.targets = this.grid.snap;
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(
        this.$el
      ).resizable().modifiers[1].options.min = this.grid.size.min;
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(
        this.$el
      ).resizable().modifiers[1].options.max = this.grid.size.max;
    },

    interactSetPosition: function(coordinates) {
      const { x = 0, y = 0 } = coordinates;
      this.interactPosition = { x, y };
    },

    interactResetPosition: function() {
      this.interactSetPosition({ x: 0, y: 0 });
    },

    interactSetSize: function(sizes) {
      const { width = 0, height = 0 } = sizes;
      this.interactSize = { width, height };
    },

    interactResetSize: function() {
      this.interactSetSize({ width: null, height: null });
    }
  },

  mounted: function() {
    // Wait until all components have been mounted.
    this.$nextTick(function() {
      if (this.grid.height === null) {
        events.$emit("grid-height", this.$el.offsetHeight + 1);
      }

      // Initialize interact on component this.$el.
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).draggable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [
          external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default.a.modifiers.snap({
            targets: this.grid.snap,
            offset: "startCoords"
          })
        ],
        restrict: {
          restriction: ".segel-resources"
        },
        onstart: () => {
          this.isInteractDragging = true;
        },
        onmove: event => {
          // Get previous position from resource data.
          const x = this.interactPosition.x + event.dx;
          const y = this.interactPosition.y + event.dy;

          // Update the position.
          this.interactSetPosition({ x, y });
        },
        onend: () => {
          // Reset booking styles.
          this.isInteractDragging = false;
        }
      });

      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).resizable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [
          external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default.a.modifiers.snap({
            targets: this.grid.snap,
            offset: "startCoords"
          }),
          external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default.a.modifiers.restrictSize(this.grid.size)
        ],
        edges: {
          top: false,
          bottom: false,
          left: ".segel-resize-handle__left",
          right: ".segel-resize-handle__right"
        },
        onstart: () => {
          this.isInteractResizing = true;
        },
        onmove: event => {
          // Get position and size of element.
          const x = this.interactPosition.x + event.deltaRect.left;
          const y = this.interactPosition.y + event.deltaRect.top;
          const width = event.rect.width;
          const height = event.rect.height;

          // Update the position.
          this.interactSetPosition({ x, y });
          this.interactSetSize({ width, height });
        },
        onend: () => {
          let start = Math.round(
            ((this.$el.offsetLeft + this.interactPosition.x) /
              this.$parent.$el.clientWidth) *
              this.time.duration
          );
          let end = Math.round(
            (this.$el.getBoundingClientRect().width /
              this.$parent.$el.clientWidth) *
              this.time.duration
          );

          // Emit event to update booking.
          events.$emit("bookings-update", {
            id: this.id,
            resource: this.resource,
            start: grid.round(
              this.time.start + start,
              this.time.duration,
              this.config.steps
            ),
            end: grid.round(
              this.time.start + start + end,
              this.time.duration,
              this.config.steps
            ),
            editable: this.editable,
            classes: this.classes,
            status: this.status,
            title: this.title
          });

          // Reset booking styles.
          this.isInteractResizing = false;
          this.interactResetSize();
          this.interactResetPosition();
        }
      });
    });
  },
  beforeDestroy: function() {
    // Destroy interact instance on component this.$el.
    external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).unset();
  }
});

// CONCATENATED MODULE: ./src/components/booking.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bookingvue_type_script_lang_js_ = (bookingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/booking.vue





/* normalize component */

var booking_component = normalizeComponent(
  components_bookingvue_type_script_lang_js_,
  bookingvue_type_template_id_101bbabf_render,
  bookingvue_type_template_id_101bbabf_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_booking = (booking_component.exports);
// CONCATENATED MODULE: ./src/helpers/cast.js
/**
 * Far future date to compare timestamps against.
 * Is used to detect if timestamp is defined in seconds or milliseconds.
 * This will make it impossible to use dates beyond year 10000.
 *
 * @type {Date}
 */
const futureDate = new Date(10000, 1, 1);

/**
 * Base cast object.
 *
 * @type {Object}
 */
const Cast = {};

/**
 * Cast properties of a booking to correct type.
 *
 * @param {Object} booking - Booking to work with.
 * @returns {Object} - Booking with properties cast to correct types.
 */
Cast.booking = function(booking) {
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
Cast.resource = function(resource) {
  return resource;
};

/**
 * Convert date and time to an Unix Epoch timestamp.
 *
 * @param date - Date to be cast.
 * @returns {number} - Date in Unix Epoch timestamp (seconds).
 */
Cast.date = function(date) {
  let dateReturn = date;

  // Convert strings to integer if it's numeric.
  if (
    Object.prototype.toString.call(date) === "[object String]" &&
    /^\d+$/.test(date)
  ) {
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
};

// Return the instance.
/* harmony default export */ var cast = (Cast);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resource.vue?vue&type=script&lang=js&
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







/* harmony default export */ var resourcevue_type_script_lang_js_ = ({
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
      default: function() {
        return [];
      }
    }
  },

  data: function() {
    return {
      dropTarget: false
    };
  },

  inject: ["config", "time"],

  methods: {
    handleDblclick: function(event) {
      // Disregard all clicks when Segel is not editable or if event originates another this.$el.
      if (
        !this.config.editable ||
        event.target.className !== "segel-bookings"
      ) {
        return;
      }

      let position = Math.round(
        (event.offsetX / this.$parent.$el.clientWidth) * this.time.duration
      );
      let stepSize = this.time.duration / this.config.steps;
      let start = grid.round(
        position + this.time.start,
        this.time.duration,
        this.config.steps
      );

      // Emit event to create booking.
      events.$emit("bookings-create", {
        resource: this.id,
        start: start,
        end: start + stepSize * 2
      });
    }
  },

  mounted: function() {
    // Wait until all components have been mounted.
    this.$nextTick(function() {
      external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).dropzone({
        ondragenter: () => {
          this.$el.classList.add("droppable");
        },
        ondragleave: () => {
          this.$el.classList.remove("droppable");
        },
        ondrop: event => {
          // TODO: Move access to booking component.
          let bookingComponent = event.relatedTarget.__vue__;

          // Convert moved pixels to change in timestamp.
          let change = Math.round(
            (bookingComponent.interactPosition.x / this.$el.clientWidth) *
              this.time.duration
          );

          // Build object.
          let booking = {
            resource: this.id,
            start: cast.date(parseInt(bookingComponent.start) + change),
            end: cast.date(parseInt(bookingComponent.end) + change)
          };

          // Create copy if ALT key is pressed, otherwise edit existing.
          if (event.dragEvent.altKey) {
            // Emit event to create booking.
            events.$emit("bookings-create", booking);
          } else {
            // Append ID of moved booking.
            booking.id = bookingComponent.id;

            // Emit event to update booking.
            events.$emit("bookings-update", booking);
          }

          this.$el.classList.remove("droppable");

          // Reset booking position.
          bookingComponent.interactResetPosition();
        }
      });
    });
  },

  beforeDestroy: function() {
    // Destroy interact instance on component this.$el.
    external_commonjs_interactjs_commonjs2_interactjs_amd_interactjs_root_interact_default()(this.$el).unset();
  },

  components: {
    "segel-booking": components_booking
  }
});

// CONCATENATED MODULE: ./src/components/resource.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_resourcevue_type_script_lang_js_ = (resourcevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/resource.vue





/* normalize component */

var resource_component = normalizeComponent(
  components_resourcevue_type_script_lang_js_,
  resourcevue_type_template_id_6bfd20ea_render,
  resourcevue_type_template_id_6bfd20ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var resource = (resource_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/resources.vue?vue&type=script&lang=js&
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



/* harmony default export */ var resourcesvue_type_script_lang_js_ = ({
  props: {
    resources: {
      type: Array,
      default: function() {
        return [];
      }
    },
    bookings: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },

  data() {
    return {};
  },

  methods: {
    relatedBookings: function(resource) {
      return this.bookings.filter(function(booking) {
        return booking.resource === resource;
      });
    }
  },

  components: {
    "segel-resource": resource
  }
});

// CONCATENATED MODULE: ./src/components/resources.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_resourcesvue_type_script_lang_js_ = (resourcesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/resources.vue





/* normalize component */

var resources_component = normalizeComponent(
  components_resourcesvue_type_script_lang_js_,
  resourcesvue_type_template_id_07908458_render,
  resourcesvue_type_template_id_07908458_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var resources = (resources_component.exports);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__("fb98");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/main.vue?vue&type=script&lang=js&
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












/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  props: {
    editable: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    editableInPast: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    bookings: {
      type: Array,
      default: function() {
        return [];
      }
    },
    resources: {
      type: Array,
      default: function() {
        return [];
      }
    },
    start: {
      type: Number,
      default: function() {
        return cast.date(
          new Date().setHours(0, 0, 0, 0) -
            new Date().getTimezoneOffset() * 60 * 1000
        );
      }
    },
    end: {
      type: Number,
      default: function() {
        return cast.date(
          new Date().setHours(24, 0, 0, 0) -
            new Date().getTimezoneOffset() * 60 * 1000
        );
      }
    },
    steps: {
      type: Number,
      default: function() {
        return 48;
      }
    },
    labels: {
      type: [Array, String],
      default: function() {
        return Array(24)
          .fill(1)
          .map((_, i) => ("0" + i).slice(-2));
      }
    }
  },

  data: function() {
    return {
      timer: null,
      current: cast.date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
      ),
      snap: null,
      size: null,
      height: null
    };
  },

  computed: {
    duration: function() {
      return this.end - this.start;
    }
  },

  mixins: [
    Object(VueReactiveProvide_umd_min["ReactiveProvideMixin"])({
      name: "config",
      include: ["editable", "editableInPast", "steps"]
    }),
    Object(VueReactiveProvide_umd_min["ReactiveProvideMixin"])({
      name: "grid",
      include: ["height", "size", "snap"]
    }),
    Object(VueReactiveProvide_umd_min["ReactiveProvideMixin"])({
      name: "time",
      include: ["start", "end", "current", "duration"]
    })
  ],

  methods: {
    updateTimer: function() {
      this.current = cast.date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
      );
    },

    cancelTimer: function() {
      clearInterval(this.timer);
    },

    handleResize: function() {
      // Calculate new snap grid.
      this.snap = grid.create(
        this.$el.clientWidth,
        this.height || 36,
        this.steps
      );

      // Calculate new size restriction.
      this.size = {
        min: {
          width: this.$el.clientWidth / this.steps,
          height: 1
        },
        max: {
          width: this.$el.clientWidth,
          height: 40
        }
      };
    }
  },

  created: function() {
    this.timer = setInterval(this.updateTimer, 1000);

    events.$on("grid-height", height => {
      this.height = height;
      this.handleResize();
    });

    events.$on("bookings-create", booking => {
      this.$emit("bookings-create", booking);
    });
    events.$on("bookings-update", booking => {
      this.$emit("bookings-update", booking);
    });
    events.$on("bookings-delete", booking => {
      this.$emit("bookings-delete", booking);
    });
  },

  mounted: function() {
    this.handleResize();

    window.addEventListener("resize", debounce_default()(this.handleResize.bind(), 150));
  },

  beforeDestroy: function() {
    this.cancelTimer();

    // Remove event listener for resize.
    window.removeEventListener(
      "resize",
      debounce_default()(this.handleResize.bind(), 150)
    );
  },

  components: {
    "segel-indicator": indicator,
    "segel-ruler": ruler,
    "segel-resources": resources
  }
});

// CONCATENATED MODULE: ./src/components/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/main.vue





/* normalize component */

var main_component = normalizeComponent(
  components_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_main = __webpack_exports__["a"] = (main_component.exports);

/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6428":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("b4b0");

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

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9720":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9720__;

/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "b047":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    now = __webpack_require__("408c"),
    toNumber = __webpack_require__("b4b0");

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

/***/ "b4b0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isSymbol = __webpack_require__("ffd6");

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

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return install; });
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5456");
// Import main Segel component.


// Declare install function executed by Vue.use().
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Segel", _components_main__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
}

// Create module definition for Vue.use().
const plugin = {
  install
};

// Auto-install when Vue is found (eg. in browser via <script> tag).
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component.
/* harmony default export */ __webpack_exports__["a"] = (_components_main__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
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

/***/ "cb16":
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

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/index.js
var src = __webpack_require__("b635");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport install */__webpack_require__.d(__webpack_exports__, "install", function() { return src["b" /* install */]; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src["a" /* default */]);



/***/ }),

/***/ "fb98":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ffd6":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

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


/***/ })

/******/ });
});
//# sourceMappingURL=segel.umd.js.map
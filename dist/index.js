!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("interact"),require("Vue")):"function"==typeof define&&define.amd?define("Segel",["interact","Vue"],e):"object"==typeof exports?exports.Segel=e(require("interact"),require("Vue")):t.Segel=e(t.interact,t.Vue)}("undefined"!=typeof self?self:this,function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=25)}([function(t,e){t.exports=function(t,e,n,r,o,i){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var c,f="function"==typeof u?u.options:u;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=c):r&&(c=r),c){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=c,f.render=function(t,e){return c.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,c):[c]}return{esModule:s,exports:u,options:f}}},function(t,e,n){"use strict";var r=n(29),o=n.n(r),i=n(20),s=n(21),u=n(22),a=n.n(u),c=n(23),f=n.n(c),l=n(8),d=n.n(l),p=n(18),b=n.n(p),v={isAvailable:function(t,e){return 0===t.filter(function(t){return t.resource===e.resource&&!(void 0!==e.id&&t.id===e.id)}).filter(function(t){return d()(e.start,t.start-1,t.end)||d()(e.end,t.start+1,t.end)||d()(t.start,e.start,e.end)}).length},isUnique:function(t,e){return-1===t.findIndex(function(t){return t.id===e.id})},multipleRules:function(t,e,n){var r=!0;return f()(a()(t),function(t){if(b()(v[t]))return r=v[t](e,n)}),r}},g=v,h=n(58),m=n.n(h),x={config:{editable:!0,set:function(t){o()(t,function(t,e){void 0!==this[e]&&(this[e]=t)})}},bookings:{all:[],get:function(t){return state.all.find(function(e){return e.id===t})},create:function(t){t.id=t.id||m()(),this.add(t),s.a.$emit("bookings:created",t)},add:function(t){g.multipleRules(["isAvailable","isUnique"],this.all,t)&&(this.all.push(t),s.a.$emit("bookings:added",t))},update:function(t){if(g.isAvailable(this.all,t)){var e=this.all.findIndex(function(e){return e.id===t.id});-1!==e&&(this.all.splice(e,1,t),s.a.$emit("bookings:updated",t))}},remove:function(t,e){var n=this.all.findIndex(function(t){return t.id===e.id});-1!==n&&(this.all.splice(n,1),s.a.$emit("bookings:removed",e))}},resources:{all:[],get:function(t){return state.all.find(function(e){return e.id===t})},add:function(t){g.isUnique(this.all,t)&&(this.all.push(t),s.a.$emit("resources:added",t))},update:function(t){var e=this.all.findIndex(function(e){return e.id===t.id});-1!==e&&(this.all.splice(e,1,t),s.a.$emit("resources:updated",t))},remove:function(t){var e=this.all.findIndex(function(e){return e.id===t.id});-1!==e&&(this.all.splice(e,1),s.a.$emit("resources:removed",t))}},time:{start:i.a.date((new Date).setHours(0,0,0,0)),end:i.a.date((new Date).setHours(24,0,0,0)),set:function(t,e){this.start=t,this.end=t},duration:function(){return this.end-this.start},steps:48,current:null,tick:function(){this.current=i.a.date(new Date)}},user:{id:null,admin:!1,isAdmin:function(){return!0===this.admin},isAuthenticated:function(){return null!==this.id},set:function(t){o()(t,function(t,e){void 0!==this[e]&&(this[e]=t)})}}};!function t(){x.time.tick(),setTimeout(t,1e3)}();e.a=x},function(t,e,n){var r=n(13),o=n(38),i=n(39),s="[object Null]",u="[object Undefined]",a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?u:s:a&&a in Object(t)?o(t):i(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(e,n){e.exports=t},function(t,e,n){var r=n(14),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(55),o=n(56),i=n(9);t.exports=function(t,e,n){return e=o(e),void 0===n?(n=e,e=0):n=o(n),t=i(t),r(t,e,n)}},function(t,e,n){var r=n(7),o=n(57),i=NaN,s=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return i;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=a.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):u.test(t)?i:+t}},function(t,e,n){"use strict";var r=n(4),o=n.n(r);var i={};i.create=function(t,e,n){return r={x:t/n,y:e},[o.a.createSnapGrid(r)];var r},i.round=function(t,e,n){var r=e/n,o=t%r,i=t-o;return o>=r/2?i+r:i},e.a=i},function(t,n){t.exports=e},function(t,e,n){var r=n(30),o=n(32);t.exports=function(t,e){return t&&r(t,e,o)}},function(t,e,n){var r=n(5).Symbol;t.exports=r},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n(37))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},function(t,e,n){var r=n(18),o=n(16);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e,n){var r=n(2),o=n(7),i="[object AsyncFunction]",s="[object Function]",u="[object GeneratorFunction]",a="[object Proxy]";t.exports=function(t){if(!o(t))return!1;var e=r(t);return e==s||e==u||e==i||e==a}},function(t,e,n){var r=n(51);t.exports=function(t){return"function"==typeof t?t:r}},function(t,e,n){"use strict";var r=new Date(1e4,1,1),o={booking:function(t){return t.start=this.date(t.start),t.end=this.date(t.end),t},resource:function(t){return t},date:function(t){var e=t;switch("[object String]"===Object.prototype.toString.call(t)&&/^\d+$/.test(t)&&(t=parseInt(t)),Object.prototype.toString.call(t)){case"[object Date]":e=t.getTime()/1e3;break;case"[object Number]":e=1e3*t>r.getTime()?t/1e3:t;break;default:e=new Date(t).getTime()}return Math.floor(e)}};e.a=o},function(t,e,n){"use strict";var r=n(11),o=new(n.n(r).a);e.a=o},function(t,e,n){var r=n(6);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return r(t)?t:[t]}},function(t,e,n){var r=n(52),o=n(53),i=n(19),s=n(6);t.exports=function(t,e){return(s(t)?r:o)(t,i(e))}},function(t,e,n){var r=n(7),o=n(72),i=n(9),s="Expected a function",u=Math.max,a=Math.min;t.exports=function(t,e,n){var c,f,l,d,p,b,v=0,g=!1,h=!1,m=!0;if("function"!=typeof t)throw new TypeError(s);function x(e){var n=c,r=f;return c=f=void 0,v=e,d=t.apply(r,n)}function y(t){var n=t-b;return void 0===b||n>=e||n<0||h&&t-v>=l}function j(){var t=o();if(y(t))return _(t);p=setTimeout(j,function(t){var n=e-(t-b);return h?a(n,l-(t-v)):n}(t))}function _(t){return p=void 0,m&&c?x(t):(c=f=void 0,d)}function k(){var t=o(),n=y(t);if(c=arguments,f=this,b=t,n){if(void 0===p)return function(t){return v=t,p=setTimeout(j,e),g?x(t):d}(b);if(h)return p=setTimeout(j,e),x(b)}return void 0===p&&(p=setTimeout(j,e)),d}return e=i(e)||0,r(n)&&(g=!!n.leading,l=(h="maxWait"in n)?u(i(n.maxWait)||0,e):l,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==p&&clearTimeout(p),v=0,c=b=f=p=void 0},k.flush=function(){return void 0===p?d:_(o())},k}},function(t,e,n){t.exports=n(26)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),o=n.n(r),i=n(27),s=n.n(i),u=new o.a({template:"<segel-main></segel-main>",components:{"segel-main":s.a}}),a=n(20),c=n(21),f=n(22),l=n.n(f),d=n(23),p=n.n(d),b=function(t,e){p()(l()(t),function(t){e(t)})},v=n(1),g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function t(e,n){return"object"===(void 0===n?"undefined":g(n))&&v.a.commit("config/set",n),u.$mount(e),t};function m(){return h}h.instance=u,h.bookings={},h.bookings.all=function(){return v.a.bookings.all},h.bookings.get=function(t){return v.a.bookings.get(t)||null},h.bookings.add=function(t){return b(t,function(t){v.a.bookings.add(a.a.booking(t))}),this},h.bookings.update=function(t){return b(t,function(t){v.a.bookings.update(a.a.booking(t))}),this},h.bookings.remove=function(t){return b(t,function(t){v.a.bookings.remove(a.a.booking(t))}),this},h.bookings.end=m,h.resources={},h.resources.all=function(){return v.a.resources.all},h.resources.get=function(t){return v.a.resources.get(t)||null},h.resources.add=function(t){return b(t,function(t){v.a.resources.add(a.a.resource(t))}),this},h.resources.update=function(t){return b(t,function(t){v.a.resources.update(a.a.resource(t))}),this},h.resources.remove=function(t){return b(t,function(t){v.a.resources.remove(a.a.resource(t))}),this},h.resources.end=m,h.time={},h.time.set=function(t,e){return v.a.time.set(a.a.date(t),a.a.date(e)),this},h.time.end=m,h.user={},h.user.set=function(t){return["[object String]","[object Number]"].indexOf(Object.prototype.toString.call(t))>-1&&(t={id:t}),v.a.user.set(t),this},h.user.end=m,h.on=function(t,e){return c.a.$on(t,e),h},h.off=function(t,e){return c.a.$off(t,e),h};e.default=h},function(t,e,n){var r=n(0)(n(28),n(76),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(60),i=n.n(o),s=n(63),u=n.n(s),a=n(66),c=n.n(a);e.default={data:function(){return r.a},provide:function(){var t={};return Object.defineProperty(t,"config",{enumerable:!0,get:function(){return r.a.config}}),Object.defineProperty(t,"time",{enumerable:!0,get:function(){return r.a.time}}),Object.defineProperty(t,"user",{enumerable:!0,get:function(){return r.a.user}}),{state:t}},components:{"segel-indicator":i.a,"segel-ruler":u.a,"segel-resources":c.a}}},function(t,e,n){var r=n(12),o=n(19);t.exports=function(t,e){return t&&r(t,o(e))}},function(t,e,n){var r=n(31)();t.exports=r},function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),u=s.length;u--;){var a=s[t?u:++o];if(!1===n(i[a],a,i))break}return e}}},function(t,e,n){var r=n(33),o=n(47),i=n(17);t.exports=function(t){return i(t)?r(t):o(t)}},function(t,e,n){var r=n(34),o=n(35),i=n(6),s=n(40),u=n(42),a=n(43),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),f=!n&&o(t),l=!n&&!f&&s(t),d=!n&&!f&&!l&&a(t),p=n||f||l||d,b=p?r(t.length,String):[],v=b.length;for(var g in t)!e&&!c.call(t,g)||p&&("length"==g||l&&("offset"==g||"parent"==g)||d&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||u(g,v))||b.push(g);return b}},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(36),o=n(3),i=Object.prototype,s=i.hasOwnProperty,u=i.propertyIsEnumerable,a=r(function(){return arguments}())?r:function(t){return o(t)&&s.call(t,"callee")&&!u.call(t,"callee")};t.exports=a},function(t,e,n){var r=n(2),o=n(3),i="[object Arguments]";t.exports=function(t){return o(t)&&r(t)==i}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(13),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(e?t[u]=n:delete t[u]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){(function(t){var r=n(5),o=n(41),i="object"==typeof e&&e&&!e.nodeType&&e,s=i&&"object"==typeof t&&t&&!t.nodeType&&t,u=s&&s.exports===i?r.Buffer:void 0,a=(u?u.isBuffer:void 0)||o;t.exports=a}).call(e,n(15)(t))},function(t,e){t.exports=function(){return!1}},function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var o=typeof t;return!!(e=null==e?n:e)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,n){var r=n(44),o=n(45),i=n(46),s=i&&i.isTypedArray,u=s?o(s):r;t.exports=u},function(t,e,n){var r=n(2),o=n(16),i=n(3),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!s[r(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){(function(t){var r=n(14),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,s=i&&i.exports===o&&r.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=u}).call(e,n(15)(t))},function(t,e,n){var r=n(48),o=n(49),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(50)(Object.keys,Object);t.exports=r},function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},function(t,e){t.exports=function(t){return t}},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},function(t,e,n){var r=n(12),o=n(54)(r);t.exports=o},function(t,e,n){var r=n(17);t.exports=function(t,e){return function(n,o){if(null==n)return n;if(!r(n))return t(n,o);for(var i=n.length,s=e?i:-1,u=Object(n);(e?s--:++s<i)&&!1!==o(u[s],s,u););return n}}},function(t,e){var n=Math.max,r=Math.min;t.exports=function(t,e,o){return t>=r(e,o)&&t<n(e,o)}},function(t,e,n){var r=n(9),o=1/0,i=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*i:t==t?t:0:0===t?t:0}},function(t,e,n){var r=n(2),o=n(3),i="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||o(t)&&r(t)==i}},function(t,e,n){var r=n(59);t.exports=function(t){for(var e="",n=r(t=t||21);0<t--;)e+="_~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[63&n[t]];return e}},function(t,e){var n=self.crypto||self.msCrypto;t.exports=function(t){return n.getRandomValues(new Uint8Array(t))}},function(t,e,n){var r=n(0)(n(61),n(62),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n.n(r);e.default={data:function(){return{}},inject:["state"],computed:{isInView:function(){return o()(this.state.time.current,this.state.time.start,this.state.time.end)},left:function(){return(this.state.time.current-this.state.time.start)/this.state.time.duration()*100}}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isInView?e("div",{class:{"segel-indicator":!0},style:{left:this.left+"%"}}):this._e()},staticRenderFns:[]}},function(t,e,n){var r=n(0)(n(64),n(65),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={filters:{leadingZero:function(t){return("0"+t).slice(-2)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"segel-ruler"},[n("ul",t._l(24,function(e){return n("li",[n("span",{class:[e===(new Date).getHours()+1?"current":""]},[t._v("\n                "+t._s(t._f("leadingZero")(e-1))+"\n            ")])])}))])},staticRenderFns:[]}},function(t,e,n){var r=n(0)(n(67),n(75),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(68),o=n.n(r);e.default={props:{resources:{type:Array,default:function(){return[]}},bookings:{type:Array,default:function(){return[]}}},data:function(){return{}},components:{"segel-resource":o.a},methods:{relatedBookings:function(t){return this.bookings.filter(function(e){return e.resource===t})}}}},function(t,e,n){var r=n(0)(n(69),n(74),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(70),o=n.n(r),i=n(4),s=n.n(i),u=n(10),a=n(1),c={bind:function(t,e,n){s()(t).dropzone({ondragenter:function(){t.classList.add("droppable")},ondragleave:function(){t.classList.remove("droppable")},ondrop:function(e){var r=Math.round(e.dragEvent.dx/n.context.$root.$el.clientWidth*n.context.state.time.duration());e.dragEvent.altKey?a.a.bookings.create({resource:n.context.id,start:e.relatedTarget.__vue__.start+r,end:e.relatedTarget.__vue__.end+r}):a.a.bookings.update({id:e.relatedTarget.__vue__.id,resource:n.context.id,start:e.relatedTarget.__vue__.start+r,end:e.relatedTarget.__vue__.end+r}),t.classList.remove("droppable")}}).on("doubletap",function(e){if(e.target===t){var r=Math.round(e.offsetX/n.context.$root.$el.clientWidth*n.context.state.time.duration()),o=n.context.state.time.duration()/n.context.state.time.steps,i=u.a.round(r+n.context.state.time.start,n.context.state.time.duration(),n.context.state.time.steps);a.a.bookings.create({resource:n.context.id,start:i,end:i+2*o})}else e.stopPropagation()})},unbind:function(t){s()(t).unset()}};e.default={props:{id:{type:[String,Number],required:!0},name:{type:String,required:!0},bookings:{type:Array,default:function(){return[]}}},directives:{dropzone:c},data:function(){return{dropTarget:!1}},inject:["state"],components:{"segel-booking":o.a},methods:{dragenter:function(){this.dropTarget=!0},dragleave:function(){this.dropTarget=!1},dragover:function(t){this.dropTarget=!0,t.dataTransfer.dropEffect=t.altKey?"copy":"move"},drop:function(){this.dropTarget=!1}}}},function(t,e,n){var r=n(0)(n(71),n(73),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(8),o=n.n(r),i=n(4),s=n.n(i),u=n(24),a=n.n(u),c=n(10),f=function(t,e){s()(t).draggable().snap.targets=c.a.create(e.context.$root.$el.clientWidth,36,e.context.state.time.steps)},l={bind:function(t,e,n){window.addEventListener("resize",a()(f.bind(null,t,n),150)),s()(t).draggable({enabled:void 0===e.value||e.value,snap:{targets:c.a.create(n.context.$root.$el.clientWidth,36,n.context.state.time.steps),offset:"startCoords"},restrict:{restriction:".segel-resources"},onstart:function(){t.classList.add("dragging")},onmove:function(e){var r=(n.context.dragX||0)+e.dx,o=(n.context.dragY||0)+e.dy;t.style.webkitTransform=t.style.transform="translate("+r+"px, "+o+"px)",n.context.dragX=parseFloat(r),n.context.dragY=parseFloat(o)},onend:function(){t.classList.remove("dragging"),t.webkitTransform=t.style.transform="",t.style.height="",n.context.dragX=0,n.context.dragY=0}})},unbind:function(t,e,n){window.removeEventListener("resize",a()(f.bind(null,t,n),150)),s()(t).unset()},update:function(t,e){e.value!==e.oldValue&&(s()(t).draggable().enabled=void 0===e.value||e.value)}},d=n(1),p=function(t,e){s()(t).resizable().snap.targets=c.a.create(e.context.$root.$el.clientWidth,35,e.context.state.time.steps)},b={bind:function(t,e,n){window.addEventListener("resize",a()(p.bind(null,t,n),150)),s()(t).resizable({enabled:void 0===e.value||e.value,snap:{targets:c.a.create(n.context.$root.$el.clientWidth,35,n.context.state.time.steps),offset:"startCoords"},edges:{top:!1,bottom:!1,left:!0,right:!0},onmove:function(e){var r=n.context.resizeX||0,o=n.context.resizeY||0;t.style.width=e.rect.width+"px",t.style.height=e.rect.height+"px",r+=e.deltaRect.left,o+=e.deltaRect.top,t.style.webkitTransform=t.style.transform="translate("+r+"px,"+o+"px)",n.context.resizeX=parseFloat(r),n.context.resizeY=parseFloat(o)},onend:function(){var e=Math.round((t.offsetLeft+n.context.resizeX)/n.context.$root.$el.clientWidth*n.context.state.time.duration()),r=Math.round(t.getBoundingClientRect().width/n.context.$root.$el.clientWidth*n.context.state.time.duration());d.a.bookings.update({id:n.context.id,resource:n.context.resource,start:c.a.round(n.context.state.time.start+e,n.context.state.time.duration(),n.context.state.time.steps),end:c.a.round(n.context.state.time.start+e+r,n.context.state.time.duration(),n.context.state.time.steps)}),t.webkitTransform=t.style.transform="",t.style.width=n.context.width+"%",t.style.height="",n.context.resizeX=0,n.context.resizeY=0}})},unbind:function(t,e,n){window.removeEventListener("resize",a()(p.bind(null,t,n),150)),s()(t).unset()},update:function(t,e){e.value!==e.oldValue&&(s()(t).resizable().enabled=void 0===e.value||e.value)}};e.default={props:{id:{type:[String,Number],required:!0},resource:{type:[String,Number],required:!0},user:{type:[String,Number]},start:{type:Number,required:!0},end:{type:Number,required:!0}},directives:{draggable:l,resizable:b},data:function(){return{}},inject:["state"],computed:{isEditable:function(){return!!this.state.config.editable&&((!this.state.user.isAuthenticated()||this.user===this.state.user.id||!0===this.state.user.isAdmin())&&this.start>this.state.time.current)},isInView:function(){return o()(this.start,this.state.time.start,this.state.time.end)||o()(this.end,this.state.time.start,this.state.time.end)||this.start<this.state.time.start&&this.end>this.state.time.start||this.end<this.state.time.end&&this.end>this.state.time.end},duration:function(){return this.end-this.start},left:function(){return(this.start-this.state.time.start)/this.state.time.duration()*100},width:function(){return this.duration/this.state.time.duration()*100}}}},function(t,e,n){var r=n(5);t.exports=function(){return r.Date.now()}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isInView?e("li",{directives:[{name:"draggable",rawName:"v-draggable",value:this.isEditable,expression:"isEditable"},{name:"resizable",rawName:"v-resizable",value:this.isEditable,expression:"isEditable"}],class:{"segel-booking":!0,editable:this.isEditable},style:{left:this.left+"%",width:this.width+"%"}}):this._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"segel-resource"},[t._v("\n    "+t._s(t.name)+"\n\n    "),n("ul",{directives:[{name:"dropzone",rawName:"v-dropzone"}],staticClass:"segel-bookings"},t._l(t.bookings,function(e){return n("segel-booking",{key:e.id,attrs:{id:e.id,resource:t.id,user:e.user,start:e.start,end:e.end}})}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"segel-resources"},t._l(t.resources,function(e){return n("segel-resource",{key:e.id,attrs:{id:e.id,name:e.name,bookings:t.relatedBookings(e.id)}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"segel"},[n("div",{staticClass:"segel-container"},[n("ul",{staticClass:"segel-grid"},t._l(24,function(e){return n("li",[t._v(" ")])})),t._v(" "),n("segel-indicator"),t._v(" "),n("segel-ruler"),t._v(" "),n("segel-resources",{attrs:{resources:t.resources.all,bookings:t.bookings.all}})],1)])},staticRenderFns:[]}}]).default});
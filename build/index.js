module.exports=function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}();t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(n){function s(e){i(this,s);var t=r(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,e));return t.state={force:0,pressing:!1},t}return o(s,n),c(s,[{key:"componentDidMount",value:function(){var e=this;f.default.set(this.refs.press,{start:function(t){e.setState({pressing:!0})},change:function(t,n){e.setState({force:t})},end:function(){e.setState({force:0,pressing:!1})},unsupported:function(){t.debug&&console.warn("react-pressure: Unsupported device, verify 'only' devices"),e.setState({force:0,pressing:!1})}},t||{})}}]),c(s,[{key:"render",value:function(){return l.default.createElement("div",{ref:"press"},l.default.createElement(e,u({},this.props,this.state)))}}]),s}(h.Component)};var h=n(3),l=s(h),a=n(2),f=s(a)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default=i.default},function(e,t,n){var s,i,r;!function(n,o){i=[],s=o,void 0!==(r="function"==typeof s?s.apply(t,i):s)&&(e.exports=r)}(0,function(){"use strict";function e(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),r={set:function(e,t,n){f(e,t,n)},config:function(e){a.set(e)},map:function(e,t,n,s,i){return d.apply(null,arguments)}},o=function(){function e(t,s,i){n(this,e),this.routeEvents(t,s,i),this.preventSelect(t,i)}return i(e,[{key:"routeEvents",value:function(e,t,n){var s=a.get("only",n);this.adapter=!P||"pointer"!==s&&null!==s?!v||"touch"!==s&&null!==s?!y||"mouse"!==s&&null!==s?new u(e,t).bindUnsupportedEvent():new c(e,t,n).bindEvents():new h(e,t,n).bindEvents():new l(e,t,n).bindEvents()}},{key:"preventSelect",value:function(e,t){a.get("preventSelect",t)&&(e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",e.style.khtmlUserSelect="none",e.style.MozUserSelect="none",e.style.msUserSelect="none",e.style.userSelect="none")}}]),e}(),u=function(){function e(t,s,i){n(this,e),this.el=t,this.block=s,this.options=i,this.pressed=!1,this.deepPressed=!1,this.nativeSupport=!1,this.runningPolyfill=!1,this.runKey=Math.random()}return i(e,[{key:"setPressed",value:function(e){this.pressed=e}},{key:"setDeepPressed",value:function(e){this.deepPressed=e}},{key:"isPressed",value:function(){return this.pressed}},{key:"isDeepPressed",value:function(){return this.deepPressed}},{key:"add",value:function(e,t){this.el.addEventListener(e,t,!1)}},{key:"runClosure",value:function(e){e in this.block&&this.block[e].apply(this.el,Array.prototype.slice.call(arguments,1))}},{key:"fail",value:function(e,t){a.get("polyfill",this.options)?this.runKey===t&&this.runPolyfill(e):this.runClosure("unsupported",e)}},{key:"bindUnsupportedEvent",value:function(){var e=this;this.add(v?"touchstart":"mousedown",function(t){return e.runClosure("unsupported",t)})}},{key:"_startPress",value:function(e){!1===this.isPressed()&&(this.runningPolyfill=!1,this.setPressed(!0),this.runClosure("start",e))}},{key:"_startDeepPress",value:function(e){this.isPressed()&&!1===this.isDeepPressed()&&(this.setDeepPressed(!0),this.runClosure("startDeepPress",e))}},{key:"_changePress",value:function(e,t){this.nativeSupport=!0,this.runClosure("change",e,t)}},{key:"_endDeepPress",value:function(){this.isPressed()&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress"))}},{key:"_endPress",value:function(){!1===this.runningPolyfill?(this.isPressed()&&(this._endDeepPress(),this.setPressed(!1),this.runClosure("end")),this.runKey=Math.random(),this.nativeSupport=!1):this.setPressed(!1)}},{key:"deepPress",value:function(e,t){e>=.5?this._startDeepPress(t):this._endDeepPress()}},{key:"runPolyfill",value:function(e){this.increment=0===a.get("polyfillSpeedUp",this.options)?1:10/a.get("polyfillSpeedUp",this.options),this.decrement=0===a.get("polyfillSpeedDown",this.options)?1:10/a.get("polyfillSpeedDown",this.options),this.setPressed(!0),this.runClosure("start",e),!1===this.runningPolyfill&&this.loopPolyfillForce(0,e)}},{key:"loopPolyfillForce",value:function(e,t){!1===this.nativeSupport&&(this.isPressed()?(this.runningPolyfill=!0,e=e+this.increment>1?1:e+this.increment,this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10)):(e=e-this.decrement<0?0:e-this.decrement,e<.5&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress")),0===e?(this.runningPolyfill=!1,this.setPressed(!0),this._endPress()):(this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10))))}}]),e}(),c=function(s){function r(t,s,i){return n(this,r),e(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,s,i))}return t(r,s),i(r,[{key:"bindEvents",value:function(){this.add("webkitmouseforcewillbegin",this._startPress.bind(this)),this.add("mousedown",this.support.bind(this)),this.add("webkitmouseforcechanged",this.change.bind(this)),this.add("webkitmouseforcedown",this._startDeepPress.bind(this)),this.add("webkitmouseforceup",this._endDeepPress.bind(this)),this.add("mouseleave",this._endPress.bind(this)),this.add("mouseup",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&this.fail(e,this.runKey)}},{key:"change",value:function(e){this.isPressed()&&e.webkitForce>0&&this._changePress(this.normalizeForce(e.webkitForce),e)}},{key:"normalizeForce",value:function(e){return this.reachOne(d(e,1,3,0,1))}},{key:"reachOne",value:function(e){return e>.995?1:e}}]),r}(u),h=function(s){function r(t,s,i){return n(this,r),e(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,s,i))}return t(r,s),i(r,[{key:"bindEvents",value:function(){g?(this.add("touchforcechange",this.start.bind(this)),this.add("touchstart",this.support.bind(this,0)),this.add("touchend",this._endPress.bind(this))):(this.add("touchstart",this.startLegacy.bind(this)),this.add("touchend",this._endPress.bind(this)))}},{key:"start",value:function(e){e.touches.length>0&&(this._startPress(e),this.touch=this.selectTouch(e),this.touch&&this._changePress(this.touch.force,e))}},{key:"support",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.runKey;!1===this.isPressed()&&(e<=6?(e++,setTimeout(this.support.bind(this,e,t,n),10)):this.fail(t,n))}},{key:"startLegacy",value:function(e){this.initialForce=e.touches[0].force,this.supportLegacy(0,e,this.runKey,this.initialForce)}},{key:"supportLegacy",value:function(e,t,n,s){s!==this.initialForce?(this._startPress(t),this.loopForce(t)):e<=6?(e++,setTimeout(this.supportLegacy.bind(this,e,t,n,s),10)):this.fail(t,n)}},{key:"loopForce",value:function(e){this.isPressed()&&(this.touch=this.selectTouch(e),setTimeout(this.loopForce.bind(this,e),10),this._changePress(this.touch.force,e))}},{key:"selectTouch",value:function(e){if(1===e.touches.length)return this.returnTouch(e.touches[0],e);for(var t=0;t<e.touches.length;t++)if(e.touches[t].target===this.el||this.el.contains(e.touches[t].target))return this.returnTouch(e.touches[t],e)}},{key:"returnTouch",value:function(e,t){return this.deepPress(e.force,t),e}}]),r}(u),l=function(s){function r(t,s,i){return n(this,r),e(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,s,i))}return t(r,s),i(r,[{key:"bindEvents",value:function(){this.add("pointerdown",this.support.bind(this)),this.add("pointermove",this.change.bind(this)),this.add("pointerup",this._endPress.bind(this)),this.add("pointerleave",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&(0===e.pressure||.5===e.pressure?this.fail(e,this.runKey):(this._startPress(e),this._changePress(e.pressure,e)))}},{key:"change",value:function(e){this.isPressed()&&e.pressure>0&&.5!==e.pressure&&(this._changePress(e.pressure,e),this.deepPress(e.pressure,e))}}]),r}(u),a={polyfill:!0,polyfillSpeedUp:1e3,polyfillSpeedDown:0,preventSelect:!0,only:null,get:function(e,t){return t.hasOwnProperty(e)?t[e]:this[e]},set:function(e){for(var t in e)e.hasOwnProperty(t)&&this.hasOwnProperty(t)&&"get"!=t&&"set"!=t&&(this[t]=e[t])}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e||e instanceof String)for(var s=document.querySelectorAll(e),i=0;i<s.length;i++)new o(s[i],t,n);else if(p(e))new o(e,t,n);else for(var i=0;i<e.length;i++)new o(e[i],t,n)},p=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":s(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":s(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},d=function(e,t,n,s,i){return(e-t)*(i-s)/(n-t)+s},y=!1,v=!1,P=!1,b=!1,g=!1;if("undefined"!=typeof window){if("undefined"!=typeof Touch)try{(Touch.prototype.hasOwnProperty("force")||"force"in new Touch)&&(b=!0)}catch(e){}v="ontouchstart"in window.document&&b,y="onmousemove"in window.document&&!v,P="onpointermove"in window.document,g="ontouchforcechange"in window.document}return r})},function(e,t){e.exports=require("react")}]);
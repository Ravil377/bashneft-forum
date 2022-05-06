/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger/hamburger */ "./src/components/hamburger/hamburger.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule/schedule */ "./src/components/schedule/schedule.js");
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_schedule_schedule__WEBPACK_IMPORTED_MODULE_2__);
// Form
// import './form/form'
// Hamburger




/***/ }),

/***/ "./src/components/hamburger/hamburger.js":
/*!***********************************************!*\
  !*** ./src/components/hamburger/hamburger.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _overlay_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../overlay/overlay */ "./src/components/overlay/overlay.js");


var $hamburger = document.querySelector('.hamburger--js');
var $mainmenu = document.querySelector('.mainmenu--js');
var $closeBtn = document.querySelector('.mainmenu--close');

function showMenu() {
  $mainmenu.classList.add('is-active');
  $hamburger.classList.add('is-active');
  (0,_overlay_overlay__WEBPACK_IMPORTED_MODULE_1__.overlayAdd)();
}

function hideMenu() {
  $mainmenu.classList.remove('is-active');
  $hamburger.classList.remove('is-active');
  (0,_overlay_overlay__WEBPACK_IMPORTED_MODULE_1__.overlayRemove)();
}

var clickHandler = function clickHandler(event) {
  event.preventDefault();

  if ($mainmenu.classList.contains('is-active')) {
    hideMenu();
  } else {
    showMenu();
  }
};

enquire_js__WEBPACK_IMPORTED_MODULE_0___default().register('screen and (max-width: 992px)', {
  // deferSetup: true,
  match: function match() {
    $hamburger.addEventListener('click', clickHandler);
    document.addEventListener('click', function (event) {
      if (event.target.dataset.backdrop === 'overlay') {
        hideMenu();
      }
    });
    $closeBtn.addEventListener('click', hideMenu);
  },
  unmatch: function unmatch() {
    $hamburger.removeEventListener('click', clickHandler);
    $closeBtn.removeEventListener('click', hideMenu);
  }
});

/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ (() => {

var modalOpenBtns = document.querySelectorAll('[data-id="openmodal"]');
var modalCloseBtns = document.querySelectorAll('[data-id="closemodal"]');
var modal = document.querySelector('.modal-js');

var closeModal = function closeModal() {
  modal.classList.remove('modal_opened');
  modalCloseBtns.forEach(function (btn) {
    return btn.removeEventListener('click', closeModal);
  });
};

var checkKeyPress = function checkKeyPress(e) {
  if (e.code === "Escape") {
    closeModal();
  }
};

var checkPressOverlay = function checkPressOverlay(e) {
  if (e.target === modal) {
    closeModal();
  }
};

var openModal = function openModal() {
  modal.classList.add('modal_opened');
  modalCloseBtns.forEach(function (btn) {
    return btn.addEventListener('click', closeModal);
  });
};

document.addEventListener('keydown', function (e) {
  return checkKeyPress(e);
});
modal && modal.addEventListener("click", function (e) {
  return checkPressOverlay(e);
});
modalCloseBtns.forEach(function (btn) {
  return btn.addEventListener('click', closeModal);
});
modalOpenBtns.forEach(function (btn) {
  return btn.addEventListener('click', openModal);
});

/***/ }),

/***/ "./src/components/overlay/overlay.js":
/*!*******************************************!*\
  !*** ./src/components/overlay/overlay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overlayAdd": () => (/* binding */ overlayAdd),
/* harmony export */   "overlayRemove": () => (/* binding */ overlayRemove)
/* harmony export */ });
var body = document.body;
function overlayAdd() {
  var overlay = document.createElement('div');
  overlay.setAttribute('data-backdrop', 'overlay');
  overlay.classList.add('overlay');
  body.classList.add('is-active');
  setTimeout(function () {
    return body.classList.add('is-animate');
  }, 100);
  body.appendChild(overlay);
}
function overlayRemove() {
  var overlay = document.querySelector('.overlay');

  if (overlay) {
    overlay.remove();
  }

  body.classList.remove('is-animate', 'is-active');
}

/***/ }),

/***/ "./src/components/schedule/schedule.js":
/*!*********************************************!*\
  !*** ./src/components/schedule/schedule.js ***!
  \*********************************************/
/***/ (() => {

var tabs = document.querySelector('.schedule__tabs');
tabs && tabs.addEventListener('click', function (e) {
  var tab = e.target.closest('.schedule__tab');
  var id = tab.dataset.day;

  if (tab) {
    tabs.querySelector('.schedule__tab_active').classList.remove('schedule__tab_active');
    tab.classList.add('schedule__tab_active');
    tabContentActive(id);
  }
});

var tabContentActive = function tabContentActive(id) {
  document.querySelector('.schedule__tab-content_active').classList.remove('schedule__tab-content_active');
  document.querySelector("[id = \"".concat(id, "\"]")).classList.add('schedule__tab-content_active');
};

/***/ }),

/***/ "./src/vendor/go-top/go-top.js":
/*!*************************************!*\
  !*** ./src/vendor/go-top/go-top.js ***!
  \*************************************/
/***/ (() => {

function scrollTo(to) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;
  var element = document.scrollingElement || document.documentElement;
  var start = element.scrollTop;
  var change = to - start;
  var startDate = +new Date(); // t = current time
  // b = start value
  // c = change in value
  // d = duration

  var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;

    if (t < 1) {
      return c / 2 * t * t + b;
    }

    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  var animateScroll = function animateScroll() {
    var currentDate = +new Date();
    var currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration), 10);

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };

  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  var $btn = document.querySelector('.go-top--js');

  if ($btn) {
    window.addEventListener('scroll', function () {
      if (pageYOffset > 100) {
        $btn.classList.add('is-show');
      } else {
        $btn.classList.remove('is-show');
      }
    }); // Click on $btn

    $btn.addEventListener('click', function (event) {
      event.preventDefault();
      scrollTo(0, 200);
    });
  }
});

/***/ }),

/***/ "./src/vendor/vendor.js":
/*!******************************!*\
  !*** ./src/vendor/vendor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _go_top_go_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-top/go-top */ "./src/vendor/go-top/go-top.js");
/* harmony import */ var _go_top_go_top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_go_top_go_top__WEBPACK_IMPORTED_MODULE_0__);
 // Magnific Popup
// import './magnific-popup/init'
// Owl Carousel
// import './owl-carousel/init'
// Simple ajax form
// import './simple-ajax-form-submit/jquery.simple-ajax-form'
// Fixed block
// import './fixedblock'

/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = (__webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each);

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/base/js/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/vendor */ "./src/vendor/vendor.js");
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components */ "./src/components/components.js");
// Vendor
 // Components


})();

/******/ })()
;
//# sourceMappingURL=main.js.map
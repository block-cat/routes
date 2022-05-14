module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/ForumApplication */ "flarum/forum/ForumApplication");
/* harmony import */ var flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_ForumApplication__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Application */ "flarum/common/Application");
/* harmony import */ var flarum_common_Application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_changePaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/changePaths */ "./src/forum/settings/changePaths.js");
/* harmony import */ var flarum_common_components_ModalManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/ModalManager */ "flarum/common/components/ModalManager");
/* harmony import */ var flarum_common_components_ModalManager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_ModalManager__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_AlertManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/AlertManager */ "flarum/common/components/AlertManager");
/* harmony import */ var flarum_common_components_AlertManager__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_AlertManager__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/Drawer */ "flarum/common/utils/Drawer");
/* harmony import */ var flarum_common_utils_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_mapRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/mapRoutes */ "flarum/common/utils/mapRoutes");
/* harmony import */ var flarum_common_utils_mapRoutes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mapRoutes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ScrollListener */ "flarum/common/utils/ScrollListener");
/* harmony import */ var flarum_common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ScrollListener__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/liveHumanTimes */ "flarum/common/utils/liveHumanTimes");
/* harmony import */ var flarum_common_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_liveHumanTimes__WEBPACK_IMPORTED_MODULE_9__);










app.initializers.add('block-cat/routes', function () {
  // override(Application.prototype, 'mount', function(original) {
  //   this.routes['discussion'].path = '/articol/:id';
  //   this.routes['discussion.near'].path = '/articol/:id/:near';
  //   // this.routes['settings'].path = '/setari';
  //   // console.log(arguments);
  //   // An object with a callable view property is used in order to pass arguments to the component; see https://mithril.js.org/mount.html
  //   m.mount(document.getElementById('modal'), { view: () => ModalManager.component({ state: this.modal }) });
  //   m.mount(document.getElementById('alerts'), { view: () => AlertManager.component({ state: this.alerts }) });
  //   this.drawer = new Drawer();
  //   m.route(document.getElementById('content'), arguments[1] + '/', mapRoutes(this.routes, arguments[1]));
  //   // Add a class to the body which indicates that the page has been scrolled
  //   // down. When this happens, we'll add classes to the header and app body
  //   // which will set the navbar's position to fixed. We don't want to always
  //   // have it fixed, as that could overlap with custom headers.
  //   const scrollListener = new ScrollListener((top) => {
  //     const $app = $('#app');
  //     const offset = $app.offset().top;
  //     $app.toggleClass('affix', top >= offset).toggleClass('scrolled', top > offset);
  //     $('.App-header').toggleClass('navbar-fixed-top', top >= offset);
  //   });
  //   scrollListener.start();
  //   scrollListener.update();
  //   $(() => {
  //     $('body').addClass('ontouchstart' in window ? 'touch' : 'no-touch');
  //   });
  //   liveHumanTimes();
  // });
  // console.log(Application);
  Object(_settings_changePaths__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/forum/settings/changePaths.js":
/*!*******************************************!*\
  !*** ./src/forum/settings/changePaths.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // get all used Flarum routes
  var routes = app.routes; // get all routes defined in admin page

  var routesCustom = JSON.parse(app.data.resources[0].attributes["block-cat.defaultRoutes"]); // map all keys from Flarum routes

  Object.keys(routes).map(function (key) {
    // check if key is specified in admin page
    if (routesCustom.hasOwnProperty(key)) {
      // check if key from admin page has value
      if (routesCustom[key].path !== "") {
        // set new path for specific key
        app.routes[key].path = routesCustom[key].path;
      }
    }
  });
});
;

/***/ }),

/***/ "flarum/common/Application":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/Application']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Application'];

/***/ }),

/***/ "flarum/common/components/AlertManager":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['common/components/AlertManager']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/AlertManager'];

/***/ }),

/***/ "flarum/common/components/ModalManager":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['common/components/ModalManager']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/ModalManager'];

/***/ }),

/***/ "flarum/common/utils/Drawer":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Drawer']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/Drawer'];

/***/ }),

/***/ "flarum/common/utils/ScrollListener":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ScrollListener']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ScrollListener'];

/***/ }),

/***/ "flarum/common/utils/liveHumanTimes":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['common/utils/liveHumanTimes']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/liveHumanTimes'];

/***/ }),

/***/ "flarum/common/utils/mapRoutes":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/mapRoutes']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/mapRoutes'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/ForumApplication":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['forum/ForumApplication']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/ForumApplication'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map
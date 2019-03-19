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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const pkgA = __webpack_require__(/*! learn-npm-pkg-a */ \"./node_modules/learn-npm-pkg-a/index.js\");\nconst pkgB = __webpack_require__(/*! learn-npm-pkg-b */ \"./node_modules/learn-npm-pkg-b/index.js\");\n\nfunction output () {\n  console.log();\n  console.log();\n  pkgA('call pkgA');\n  console.log();\n  console.log();\n  pkgB('call pkgB');\n  console.log();\n  console.log();\n}\n\noutput();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/learn-npm-pkg-a/index.js":
/*!***********************************************!*\
  !*** ./node_modules/learn-npm-pkg-a/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const version = '2.0.0';\n\nmodule.exports = function (tip) {\n  console.log(`==== package A version ${version} ====`);\n  if (tip) console.log(`[tip in A] : ${tip}`);\n};\n\n\n//# sourceURL=webpack:///./node_modules/learn-npm-pkg-a/index.js?");

/***/ }),

/***/ "./node_modules/learn-npm-pkg-b/index.js":
/*!***********************************************!*\
  !*** ./node_modules/learn-npm-pkg-b/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const pkgA = __webpack_require__(/*! learn-npm-pkg-a */ \"./node_modules/learn-npm-pkg-b/node_modules/learn-npm-pkg-a/index.js\");\nconst version = '1.0.0';\n\nmodule.exports = function (tip) {\n  console.log(`==== package B version ${version} ====`);\n  if (tip) console.log(`[tip in B] : ${tip}`);\n  console.log('>>>>>>>>>>>');\n  pkgA('call package A in package B');\n  console.log('<<<<<<<<<<<');\n};\n\n\n//# sourceURL=webpack:///./node_modules/learn-npm-pkg-b/index.js?");

/***/ }),

/***/ "./node_modules/learn-npm-pkg-b/node_modules/learn-npm-pkg-a/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/learn-npm-pkg-b/node_modules/learn-npm-pkg-a/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const version = '1.0.0';\n\nmodule.exports = function (tip) {\n  console.log(`==== package A version ${version} ====`);\n  if (tip) console.log(`[tip in A] : ${tip}`);\n};\n\n\n//# sourceURL=webpack:///./node_modules/learn-npm-pkg-b/node_modules/learn-npm-pkg-a/index.js?");

/***/ })

/******/ });
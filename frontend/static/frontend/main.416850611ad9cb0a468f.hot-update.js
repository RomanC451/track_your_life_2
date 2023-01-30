"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefrontend"]("main",{

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAnimation\": () => (/* reexport safe */ _useAnimation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"useIndexIterator\": () => (/* reexport safe */ _useIndexIterator__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"useLocalStorage\": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"useObjectOfRefs\": () => (/* reexport safe */ _useObjectOfRefs__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"useWaitCallback\": () => (/* reexport safe */ _useWaitCallback__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useLocalStorage */ \"./src/hooks/useLocalStorage.js\");\n/* harmony import */ var _useAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAnimation */ \"./src/hooks/useAnimation.js\");\n/* harmony import */ var _useIndexIterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useIndexIterator */ \"./src/hooks/useIndexIterator.js\");\n/* harmony import */ var _useWaitCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useWaitCallback */ \"./src/hooks/useWaitCallback.js\");\n/* harmony import */ var _useObjectOfRefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useObjectOfRefs */ \"./src/hooks/useObjectOfRefs.js\");\n\n\n\n\n\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\index.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\index.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/hooks/index.js?");

/***/ }),

/***/ "./src/hooks/useObjectOfRefs.js":
/*!**************************************!*\
  !*** ./src/hooks/useObjectOfRefs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useObjectOfRefs = (data = {}) => {\n  const refsObject = {};\n  Object.keys(data).forEach(key => {\n    refsObject[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(inputs[key]);\n  });\n  function handleChange(event) {\n    const {\n      name,\n      value\n    } = event.target;\n    refsObject[name].current = value;\n  }\n  return [refsObject, handleChange];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObjectOfRefs);\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useObjectOfRefs.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useObjectOfRefs.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/hooks/useObjectOfRefs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca90503694fec357d66b")
/******/ })();
/******/ 
/******/ }
);
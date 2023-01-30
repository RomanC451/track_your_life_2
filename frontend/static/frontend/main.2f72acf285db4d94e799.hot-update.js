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

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isNumeric\": () => (/* reexport safe */ _isNumeric__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"refsObjectToFetchBody\": () => (/* reexport safe */ _refsObjectToFetchBody__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNumeric */ \"./src/utils/isNumeric.js\");\n/* harmony import */ var _refsObjectToFetchBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refsObjectToFetchBody */ \"./src/utils/refsObjectToFetchBody.js\");\n\n\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\utils\\\\index.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\utils\\\\index.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/refsObjectToFetchBody.js":
/*!********************************************!*\
  !*** ./src/utils/refsObjectToFetchBody.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Description: Converts an object with useRef into a normal object used in a fetch request as request body.\r\n * @param {Object<string, Object<string, any>>} refsObject - The object that contains the useRefs\r\n * @returns {Object<string, any>} Returns a normal object used in a fetch request as request body.\r\n */\n\nfunction refsObjectToFetchBody(refsObject) {\n  if (typeof refsObject !== \"object\") {\n    throw new TypeError(\"the argument `refsObject` must be an object\");\n  }\n  const fetchBody = {};\n  Object.keys(refsObject).forEach(key => {\n    if (!refsObject[key].hasOwnProperty(\"current\")) {\n      throw new TypeError(\"the argument `refsObject` must have only useRefs components.\");\n    }\n    fetchBody[key] = refsObject[key].current;\n  });\n  return fetchBody;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refsObjectToFetchBody);\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\utils\\\\refsObjectToFetchBody.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\utils\\\\refsObjectToFetchBody.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/utils/refsObjectToFetchBody.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1025a736ad6856b92b1c")
/******/ })();
/******/ 
/******/ }
);
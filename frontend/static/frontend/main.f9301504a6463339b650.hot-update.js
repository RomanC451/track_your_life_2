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

/***/ "./src/hooks/useObjectOfRefs.js":
/*!**************************************!*\
  !*** ./src/hooks/useObjectOfRefs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * Description - Creates an object with useRefs for desired keys passed as arguments.\r\n * @param {Object{string: string||number}} data={} - The object with the desired keys and corresponding values.\r\n * @returns {Object{MutableRefObject}} - Returns an object of refs.\r\n */\nconst useObjectOfRefs = (data = {}) => {\n  const refsObject = {};\n  Object.keys(data).forEach(key => {\n    refsObject[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(data[key]);\n  });\n  function handleChange(event) {\n    console.log(event);\n    const {\n      name,\n      value\n    } = event.target;\n    refsObject[name].current = value;\n  }\n  return [refsObject, handleChange];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObjectOfRefs);\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useObjectOfRefs.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useObjectOfRefs.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/hooks/useObjectOfRefs.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("032d5844a6f950fcb156")
/******/ })();
/******/ 
/******/ }
);
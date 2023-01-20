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

/***/ "./src/hooks/useLocalStorage.js":
/*!**************************************!*\
  !*** ./src/hooks/useLocalStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useLocalStorage = (varName, defaultValue) => {\n  const storagedValue = localStorage.getItem(varName);\n  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(storagedValue !== null ? storagedValue : defaultValue);\n\n  function setValueToLocalStorage(newValue) {\n    localStorage.setItem(varName, newValue);\n    setValue(newValue);\n  }\n\n  return [value, setValueToLocalStorage];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);\nvoid function register() {\n  // eslint-disable-line no-extra-semi\n\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useLocalStorage.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useLocalStorage.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/hooks/useLocalStorage.js?");

/***/ }),

/***/ "./src/pages/authentication/animations/useCardAnimation.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/authentication/animations/useCardAnimation.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useLocalStorage */ \"./src/hooks/useLocalStorage.js\");\n\n\n\nconst useCardAnimation = ({\n  duration,\n  defaultPosition\n}) => {\n  const [cardPosition, setCardPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPosition);\n  const inProgress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n\n  function startAnimation() {\n    if (inProgress.current) {\n      return;\n    }\n\n    setCardPosition(cardPosition === \"left\" ? \"right\" : \"left\");\n    inProgress.current = true;\n    setTimeout(() => {\n      inProgress.current = false;\n    }, duration * 1000);\n  }\n\n  return {\n    cardPosition,\n    setCardPosition\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCardAnimation);\n\n//# sourceURL=webpack://frontend/./src/pages/authentication/animations/useCardAnimation.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c9aee665a0449db2de3")
/******/ })();
/******/ 
/******/ }
);
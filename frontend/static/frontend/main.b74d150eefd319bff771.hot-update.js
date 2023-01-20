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

/***/ "./src/pages/authentication/animations/useCardAnimation.js":
/*!*****************************************************************!*\
  !*** ./src/pages/authentication/animations/useCardAnimation.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/useAnimation */ \"./src/hooks/useAnimation.js\");\n\n\n\nconst useCardAnimation = (duration, defaultPosition) => {\n  const cardPos = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(defaultPosition);\n  const [startAnimation] = (0,_hooks_useAnimation__WEBPACK_IMPORTED_MODULE_1__.useAnimation)();\n  const inProgress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n\n  function startCardAnimation() {\n    cardPos.current = cardPos.current === \"left\" ? \"right\" : \"left\";\n  }\n\n  return [cardPos, startCardAnimation];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCardAnimation);\nvoid function register() {\n  // eslint-disable-line no-extra-semi\n\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\pages\\\\authentication\\\\animations\\\\useCardAnimation.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\pages\\\\authentication\\\\animations\\\\useCardAnimation.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/pages/authentication/animations/useCardAnimation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("edc110adb35b4aee7f62")
/******/ })();
/******/ 
/******/ }
);
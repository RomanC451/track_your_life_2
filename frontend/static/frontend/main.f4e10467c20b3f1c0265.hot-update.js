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

/***/ "./src/pages/authentication/animations/useCardAnimation.jsx":
/*!******************************************************************!*\
  !*** ./src/pages/authentication/animations/useCardAnimation.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useCardAnimation = (duration, defaultPosition) => {\n  const [cardPos, setCardPos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPosition);\n  const inProgress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n  const animationTriggered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n\n  function startCardAnimation() {\n    animationTriggered = true;\n\n    if (inProgress.current) {\n      return;\n    }\n\n    console.log(inProgress.current);\n    setCardPos(cardPos === \"left\" ? \"right\" : \"left\");\n    inProgress.current = true;\n    console.log(duration);\n    setTimeout(() => {\n      inProgress.current = false;\n    }, duration * 1000);\n  }\n\n  return [cardPos, startCardAnimation];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCardAnimation);\n\n//# sourceURL=webpack://frontend/./src/pages/authentication/animations/useCardAnimation.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("92e92ab5de473c296635")
/******/ })();
/******/ 
/******/ }
);
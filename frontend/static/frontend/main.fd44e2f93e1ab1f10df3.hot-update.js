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

/***/ "./src/animations/Slider/SliderComponent.jsx":
/*!***************************************************!*\
  !*** ./src/animations/Slider/SliderComponent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\nconst SliderComponent = ({\n  component,\n  pos,\n  sliderWidth\n}) => {\n  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  if (pos === \"right\") {\n    initialPosition.current = sliderWidth;\n  } else if (pos === \"left\") {\n    initialPosition.current = 0 - sliderWidth;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    console.log(divRef);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n    className: \"absolute top-0 float-left flex w-full flex-col items-center\",\n    initial: {\n      x: 0\n    },\n    animate: {},\n    ref: divRef\n  }, component);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderComponent);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/SliderComponent.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ce4763b1396ee9144f7")
/******/ })();
/******/ 
/******/ }
);
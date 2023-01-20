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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n\n\n\n\nconst sliderAnimationProps = {\n  transition: {\n    type: \"spring\",\n    duration: 1.5\n  }\n};\nconst SliderComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({\n  component,\n  sliderWidth,\n  pos\n}, ref) => {\n  const sliderAnimationSteps = [{\n    x: -sliderWidth\n  }, {\n    x: 0\n  }, {\n    x: sliderWidth\n  }];\n  var initialPos = 0;\n  var currentStep = 0;\n\n  if (pos === \"right\") {\n    initialPos = sliderWidth;\n    currentStep = 1;\n  } else if (pos === \"left\") {\n    initialPos = 0 - sliderWidth;\n    currentStep = -1;\n  }\n\n  const [currentindex, nextStep, prevStep] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useIndexIterator)(sliderAnimationSteps.length, currentStep);\n  const [slideAnimationRef, startAnimation] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useAnimation)(sliderAnimationSteps, sliderAnimationProps, false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({\n    startSlideAnimation(direction) {\n      console.log(direction);\n\n      if (direction === \"right\") {\n        nextStep();\n      } else if (direction === \"left\") {\n        prevStep();\n      }\n\n      startAnimation(currentindex.current);\n    }\n\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n    className: `absolute top-0  float-left flex w-full flex-col items-center`,\n    transition: {\n      duration: 5\n    },\n    animate: slideAnimationRef,\n    initial: {\n      x: initialPos\n    }\n  }, component);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderComponent);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/SliderComponent.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8b28e40d58200d675f8")
/******/ })();
/******/ 
/******/ }
);
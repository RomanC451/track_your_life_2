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

/***/ "./src/animations/Slider/index.js":
/*!****************************************!*\
  !*** ./src/animations/Slider/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* reexport safe */ _Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./src/animations/Slider/Slider.jsx\");\n\nvoid function register() {\n  // eslint-disable-line no-extra-semi\n\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\animations\\\\Slider\\\\index.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\animations\\\\Slider\\\\index.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/index.js?");

/***/ }),

/***/ "./src/animations/Slider/Slider.jsx":
/*!******************************************!*\
  !*** ./src/animations/Slider/Slider.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderComponent */ \"./src/animations/Slider/SliderComponent.jsx\");\n\n\n\n\nconst Slider = ({\n  width,\n  height,\n  sliderComponents,\n  showedComponentIndex\n}) => {\n  const [currentComponentIndex, nextIndex, previosIndex] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useIndexIterator)(sliderComponents.length, showedComponentIndex);\n\n  function getComponentPosition(index) {\n    var position;\n\n    if (index === currentComponentIndex.current) {\n      position = \"ceneter\";\n    } else if (index > currentComponentIndex.current) {\n      position = \"right\";\n    } else {\n      position = \"left\";\n    }\n\n    return position;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `relative h-[${height}] w-[${width}] overflow-hidden`\n  }, sliderComponents.map((component, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      component: component,\n      pos: getComponentPosition(index),\n      sliderWidth: width\n    });\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/Slider.jsx?");

/***/ }),

/***/ "./src/animations/Slider/SliderComponent.jsx":
/*!***************************************************!*\
  !*** ./src/animations/Slider/SliderComponent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst SliderComponent = ({\n  component,\n  pos,\n  sliderWidth\n}) => {\n  console.log(component.props);\n\n  if (pos === \"right\") {\n    component.props.initial.x += sliderWidth;\n  } else if (pos === \"left\") {\n    component.props.initial.x -= sliderWidth;\n  }\n\n  component.props.animate = \"\";\n  return component;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderComponent);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/SliderComponent.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("be022c9b30234ac01387")
/******/ })();
/******/ 
/******/ }
);
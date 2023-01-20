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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* reexport safe */ _Slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"SliderComponent\": () => (/* reexport safe */ _SliderComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ \"./src/animations/Slider/Slider.jsx\");\n/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderComponent */ \"./src/animations/Slider/SliderComponent.jsx\");\n\n\nvoid function register() {\n  // eslint-disable-line no-extra-semi\n\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\animations\\\\Slider\\\\index.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\animations\\\\Slider\\\\index.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/index.js?");

/***/ }),

/***/ "./src/animations/Slider/Slider.jsx":
/*!******************************************!*\
  !*** ./src/animations/Slider/Slider.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderComponent */ \"./src/animations/Slider/SliderComponent.jsx\");\n\n\n\n\nconst Slider = ({\n  children,\n  width,\n  height,\n  sliderComponents,\n  showedComponentIndex\n}) => {\n  const [currentComponentIndex, nextIndex, previosIndex] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useIndexIterator)(children.length, showedComponentIndex);\n\n  function getComponentPosition(index) {\n    var position;\n\n    if (index === currentComponentIndex.current) {\n      position = \"ceneter\";\n    } else if (index > currentComponentIndex.current) {\n      position = \"right\";\n    } else {\n      position = \"left\";\n    }\n\n    return position;\n  }\n\n  console.log(children);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `relative h-[${height}] w-[${width}] overflow-hidden`\n  }, children.map((child, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index\n    }, child);\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/Slider.jsx?");

/***/ }),

/***/ "./src/animations/Slider/SliderComponent.jsx":
/*!***************************************************!*\
  !*** ./src/animations/Slider/SliderComponent.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\nconst SliderComponent = ({\n  children,\n  className\n}) => {\n  console.log(children);\n  console.log(\"called\");\n\n  function alabala() {} //   if (pos === \"right\") {\n  //     component.props.initial.x += sliderWidth;\n  //   } else if (pos === \"left\") {\n  //     component.props.initial.x -= sliderWidth;\n  //   }\n  //   component.props.animate = \"\";\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n    className: \"absolute top-0 float-left flex w-full flex-col items-center\",\n    initial: {\n      x: 0\n    },\n    animate: {}\n  }, children);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderComponent);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/SliderComponent.jsx?");

/***/ }),

/***/ "./src/features/authentication/components/SignUpSlider.jsx":
/*!*****************************************************************!*\
  !*** ./src/features/authentication/components/SignUpSlider.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _animations_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations/Slider */ \"./src/animations/Slider/index.js\");\n/* harmony import */ var _components_text_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/text_fields */ \"./src/components/text_fields/index.jsx\");\n\n\n\n\nconst SignUpSlider = () => {\n  function renderComponent() {}\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_animations_Slider__WEBPACK_IMPORTED_MODULE_1__.Slider, {\n    width: \"100%\",\n    height: \"225px\",\n    sliderComponents: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n      label: \"Email\",\n      className: \"mt-4  w-[80%]\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_2__.PasswordField, {\n      label: \"Password\",\n      className: \"mt-4 w-[80%]\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_2__.PasswordField, {\n      label: \"Confirm password\",\n      className: \"mt-4 w-[80%]\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n      label: \"Email\",\n      className: \"mt-4  w-[80%]\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_2__.PasswordField, {\n      label: \"Password\",\n      className: \"mt-4 w-[80%]\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_2__.PasswordField, {\n      label: \"Confirm password\",\n      className: \"mt-4 w-[80%]\"\n    }))],\n    showedComponentIndex: 0\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpSlider);\n\n//# sourceURL=webpack://frontend/./src/features/authentication/components/SignUpSlider.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cba564aa6f880e928012")
/******/ })();
/******/ 
/******/ }
);
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

/***/ "./src/animations/Slider/Slider.jsx":
/*!******************************************!*\
  !*** ./src/animations/Slider/Slider.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _SliderComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderComponent */ \"./src/animations/Slider/SliderComponent.jsx\");\n\n\n\n\n\nconst Slider = ({\n  width,\n  className,\n  sliderComponents,\n  showedComponentIndex\n}) => {\n  const [currentComponentIndex, nextIndex, previosIndex] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useIndexIterator)(sliderComponents.length, showedComponentIndex);\n  var componentsRef = [];\n  sliderComponents.forEach((sliderComponent, index) => {\n    componentsRef.push((0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null));\n  });\n\n  function hadnleLeftButton() {\n    console.log(componentsRef[0].current);\n    componentsRef[0].current.startSlideAnimation(\"left\");\n  }\n\n  function getComponentPosition(index) {\n    var position;\n\n    if (index === currentComponentIndex.current) {\n      position = \"ceneter\";\n    } else if (index > currentComponentIndex.current) {\n      position = \"right\";\n    } else {\n      position = \"left\";\n    }\n\n    return position;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `relative overflow-hidden ${className} flex items-end`\n  }, sliderComponents.map((component, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SliderComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      pos: getComponentPosition(index),\n      sliderWidth: width,\n      component: component,\n      ref: componentsRef[index]\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: ` flex w-[90%] justify-end gap-2`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex h-[35px] w-[35px] items-center justify-center rounded-full hover:bg-slate-100 hover:shadow-lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: hadnleButton,\n    className: \"text-3xl\",\n    style: {\n      color: \"gray\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowDropleft, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex h-[35px] w-[35px] items-center justify-center rounded-full hover:bg-slate-100 hover:shadow-lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: hadnleButton,\n    className: \"text-3xl\",\n    style: {\n      color: \"gray\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoIosArrowDropright, null)))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://frontend/./src/animations/Slider/Slider.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4b747a5590b4df85ec3")
/******/ })();
/******/ 
/******/ }
);
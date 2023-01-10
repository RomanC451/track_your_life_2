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

/***/ "./src/pages/LoginPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/LoginPage.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n/* harmony import */ var _contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AppGeneralContextProvider */ \"./src/contexts/AppGeneralContextProvider.js\");\n\n\n\n\nconst LoginPage = () => {\n  const {\n    screenSize\n  } = (0,_contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_2__.useAppGeneralStateContext)();\n  const {\n    scaleRatio,\n    setScaleRatio\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [screenSize]);\n  console.log(\"render\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"absolute left-0 top-0 h-[110%] w-full bg-black overflow-hidden\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text-center ml \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets__WEBPACK_IMPORTED_MODULE_1__.LoginBackgroundImage,\n    className: \"absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-none ml-auto mr-auto -scale-y-100\"\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n//# sourceURL=webpack://frontend/./src/pages/LoginPage.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ac03a5f8bba659d1b58")
/******/ })();
/******/ 
/******/ }
);
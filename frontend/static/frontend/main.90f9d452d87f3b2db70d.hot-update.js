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

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginBackgroundImage\": () => (/* reexport safe */ _login_backgound_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"LoginBackgroundImageSm\": () => (/* reexport safe */ _login_backgound_sm_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _login_backgound_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-backgound.png */ \"./src/assets/login-backgound.png\");\n/* harmony import */ var _login_backgound_sm_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-backgound-sm.png */ \"./src/assets/login-backgound-sm.png\");\n\n\nvoid function register() {\n  // eslint-disable-line no-extra-semi\n\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\assets\\\\index.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\assets\\\\index.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/assets/index.js?");

/***/ }),

/***/ "./src/pages/LoginPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/LoginPage.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets */ \"./src/assets/index.js\");\n/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons */ \"./src/components/buttons/index.jsx\");\n/* harmony import */ var _contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AppGeneralContextProvider */ \"./src/contexts/AppGeneralContextProvider.js\");\n\n\n\n\n\nconst LoginPage = () => {\n  const {\n    screenSize\n  } = (0,_contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_3__.useAppGeneralStateContext)();\n  console.log(\"render\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"absolute left-0 top-[-10%] h-[110%] w-full bg-black overflow-hidden\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"text-center ml \"\n  }, screenSize > 700 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets__WEBPACK_IMPORTED_MODULE_1__.LoginBackgroundImage,\n    className: \"absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-none ml-auto mr-auto\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _assets__WEBPACK_IMPORTED_MODULE_1__.LoginBackgroundImageSm,\n    className: \"absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-none ml-auto mr-auto scale-[0.6]\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center flex-wrap\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full\"\n  }, \"LOG IN \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full\"\n  }, \"Take control of your life\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    className: \" w-full\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"lname\",\n    name: \"lname\",\n    className: \" w-full\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    text: \"Log in\",\n    classNames: \"w-full\"\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n//# sourceURL=webpack://frontend/./src/pages/LoginPage.jsx?");

/***/ }),

/***/ "./src/assets/login-backgound-sm.png":
/*!*******************************************!*\
  !*** ./src/assets/login-backgound-sm.png ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"95a7f0c762e31e8fcd7dfcbb112a121c.png\");\n\n//# sourceURL=webpack://frontend/./src/assets/login-backgound-sm.png?");

/***/ }),

/***/ "./src/assets/login-backgound.png":
/*!****************************************!*\
  !*** ./src/assets/login-backgound.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"efc7b0740b16e16cba9b3b75e2371483.png\");\n\n//# sourceURL=webpack://frontend/./src/assets/login-backgound.png?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ebfc51ec8296824d071c")
/******/ })();
/******/ 
/******/ }
);
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

/***/ "./src/pages/authentication/AuthenticationPage.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/authentication/AuthenticationPage.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_authentication___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/authentication/ */ \"./src/features/authentication/index.js\");\n/* harmony import */ var _hooks___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/ */ \"./src/hooks/index.js\");\n/* harmony import */ var _contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AppGeneralContextProvider */ \"./src/contexts/AppGeneralContextProvider.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Card */ \"./src/pages/authentication/components/Card.jsx\");\n/* harmony import */ var _animations_useCardAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations/useCardAnimation */ \"./src/pages/authentication/animations/useCardAnimation.js\");\n\n\n\n\n\n\n\nconst LoginPage = () => {\n  const {\n    screenSize\n  } = (0,_contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_3__.useAppGeneralStateContext)();\n  const [authMode, setAuthMode] = (0,_hooks___WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)(\"authenticationMethode\", \"logIn\");\n  const [cardAnimationRef, startCardAnimation] = (0,_animations_useCardAnimation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(authMode == \"logIn\" ? 0 : 1);\n\n  function switchAuthMode() {\n    setAuthMode(authMode === \"logIn\" ? \"signUp\" : \"logIn\");\n    startCardAnimation();\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \" flex min-h-[100vh] items-center justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-[600px] rounded-2xl shadow-2xl shadow-gray-700\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative top-[50%] left-[50%] flex h-[95%] w-[97%] translate-x-[-50%] translate-y-[-50%] items-center justify-around  rounded-2xl   border-1 border-gray-200 bg-white shadow-xl \"\n  }, screenSize > 900 || authMode === \"signUp\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_authentication___WEBPACK_IMPORTED_MODULE_1__.SignUpForm, {\n    switchAuthMode: switchAuthMode\n  }) : null, screenSize > 900 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    cardAnimationRef: cardAnimationRef\n  }) : null, screenSize > 900 || authMode === \"logIn\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_authentication___WEBPACK_IMPORTED_MODULE_1__.LogInForm, {\n    switchAuthMode: switchAuthMode\n  }) : null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n//# sourceURL=webpack://frontend/./src/pages/authentication/AuthenticationPage.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7c6fa67a70a5401ccd4")
/******/ })();
/******/ 
/******/ }
);
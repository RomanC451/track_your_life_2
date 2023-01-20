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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useCardAnimation = (duration, defaultPosition) => {\n  const [cardPos, setCardPos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPosition);\n  const inProgress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n\n  function startCardAnimation() {\n    if (inProgress.current) {\n      return;\n    }\n\n    setCardPos(cardPos === \"left\" ? \"right\" : \"left\");\n    inProgress.current = true;\n    setTimeout(() => {\n      inProgress.current = false;\n    }, duration * 1000);\n  }\n\n  return [cardPos, startCardAnimation];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCardAnimation);\nvoid function register() {\n  // eslint-disable-line no-extra-semi\n\n  /* react-hot-loader/webpack */\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n  /* eslint-disable camelcase, no-undef */\n\n\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;\n  /* eslint-enable camelcase, no-undef */\n\n  if (!webpackExports) {\n    return;\n  }\n\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\pages\\\\authentication\\\\animations\\\\useCardAnimation.js\");\n    return;\n  }\n  /* eslint-disable no-restricted-syntax */\n\n\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */\n    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n\n    var namedExport = void 0;\n\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\pages\\\\authentication\\\\animations\\\\useCardAnimation.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/pages/authentication/animations/useCardAnimation.js?");

/***/ }),

/***/ "./src/pages/authentication/AuthenticationPage.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/authentication/AuthenticationPage.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_authentication___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/authentication/ */ \"./src/features/authentication/index.js\");\n/* harmony import */ var _hooks___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/ */ \"./src/hooks/index.js\");\n/* harmony import */ var _contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AppGeneralContextProvider */ \"./src/contexts/AppGeneralContextProvider.js\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Card */ \"./src/pages/authentication/components/Card.jsx\");\n/* harmony import */ var _animations_useCardAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animations/useCardAnimation */ \"./src/pages/authentication/animations/useCardAnimation.js\");\n\n\n\n\n\n\nconst cardAnimationProps = {\n  duration: 1.5,\n  //seconds\n  cardPostions: {\n    logIn: \"left\",\n    signUp: \"right\"\n  }\n};\n\nconst LoginPage = () => {\n  const {\n    screenSize\n  } = (0,_contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_3__.useAppGeneralStateContext)();\n  const [authMode, setAuthMode] = (0,_hooks___WEBPACK_IMPORTED_MODULE_2__.useLocalStorage)(\"authenticationMethode\", \"logIn\");\n  const [cardPosition, startCardAnimation] = (0,_animations_useCardAnimation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(cardAnimationProps.duration, cardAnimationProps.cardPostions[authMode]);\n  console.log(cardPosition);\n\n  function switchAuthMode() {\n    console.log(\"switch mode called\");\n    console.log(authMode);\n    setAuthMode(authMode === \"logIn\" ? \"signUp\" : \"logIn\");\n    startCardAnimation();\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \" flex min-h-[100vh] items-center justify-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"h-[600px] rounded-2xl shadow-2xl shadow-gray-700\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative top-[50%] left-[50%] flex h-[95%] w-[97%] translate-x-[-50%] translate-y-[-50%] items-center justify-around  rounded-2xl   border-1 border-gray-200 bg-white shadow-xl \"\n  }, screenSize > 900 || cardPosition === \"right\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_authentication___WEBPACK_IMPORTED_MODULE_1__.SignUpForm, {\n    switchAuthMode: switchAuthMode\n  }) : null, screenSize > 900 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    position: cardPosition\n  }) : null, screenSize > 900 || cardPosition === \"left\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_features_authentication___WEBPACK_IMPORTED_MODULE_1__.LogInForm, {\n    switchAuthMode: switchAuthMode\n  }) : null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n//# sourceURL=webpack://frontend/./src/pages/authentication/AuthenticationPage.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dacc695da9d36606b728")
/******/ })();
/******/ 
/******/ }
);
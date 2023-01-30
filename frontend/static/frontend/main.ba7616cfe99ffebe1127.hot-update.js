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

/***/ "./src/features/authentication/hooks/useLogin.js":
/*!*******************************************************!*\
  !*** ./src/features/authentication/hooks/useLogin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~/hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/utils */ \"./src/utils/index.js\");\n/* harmony import */ var _services_postLogIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/postLogIn */ \"./src/features/authentication/services/postLogIn.js\");\n\n\n\n\n/**\r\n * Description - Custom hook for the login form. Stores the user data and provides the handle of login request.\r\n * @returns {Object< Object<MutableRefObject>, function, function>}\r\n */\nconst useLogin = () => {\n  const [userDataRefs, changeUserData] = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.useObjectOfRefs)({\n    email: \"\",\n    password: \"\"\n  });\n  function handleLogInRequest() {\n    const userData = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.refsObjectToFetchBody)(userDataRefs);\n    (0,_services_postLogIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userData).json(data => {\n      console.log(data);\n    });\n  }\n  return {\n    changeUserData,\n    handleLogInRequest\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLogin);\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\features\\\\authentication\\\\hooks\\\\useLogin.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\features\\\\authentication\\\\hooks\\\\useLogin.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/features/authentication/hooks/useLogin.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5eaaef944c9d3bcb97f0")
/******/ })();
/******/ 
/******/ }
);
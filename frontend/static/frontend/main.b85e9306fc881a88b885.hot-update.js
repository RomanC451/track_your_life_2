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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _services_postLogIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/postLogIn */ \"./src/features/authentication/services/postLogIn.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n/**\r\n * Description - Custom hook for the login form. Stores the user data and provides the handle of login request.\r\n * @return\r\n */\nvar useLogin = function useLogin() {\n  var _useObjectOfRefs = (0,_hooks__WEBPACK_IMPORTED_MODULE_0__.useObjectOfRefs)({\n      email: \"\",\n      password: \"\"\n    }),\n    _useObjectOfRefs2 = _slicedToArray(_useObjectOfRefs, 2),\n    userDataRefs = _useObjectOfRefs2[0],\n    changeUserData = _useObjectOfRefs2[1];\n  function handleLogInRequest() {\n    var userData = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.refsObjectToFetchBody)(userDataRefs);\n    (0,_services_postLogIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userData).json(function (data) {\n      console.log(data);\n    });\n  }\n  return {\n    changeUserData: changeUserData,\n    handleLogInRequest: handleLogInRequest\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLogin);\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"] : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\features\\\\authentication\\\\hooks\\\\useLogin.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\features\\\\authentication\\\\hooks\\\\useLogin.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/features/authentication/hooks/useLogin.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e5f2fa8842da4479b89")
/******/ })();
/******/ 
/******/ }
);
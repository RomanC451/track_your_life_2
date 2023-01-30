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

/***/ "./src/features/authentication/components/LogInForm.jsx":
/*!**************************************************************!*\
  !*** ./src/features/authentication/components/LogInForm.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_text_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/text_fields */ \"./src/components/text_fields/index.jsx\");\n/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components/buttons */ \"./src/components/buttons/index.jsx\");\n/* harmony import */ var _hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useLogin */ \"./src/features/authentication/hooks/useLogin.js\");\n\n\n\n\nconst LogInForm = ({\n  switchAuthMode\n}) => {\n  const {\n    userData,\n    changeUserData,\n    handleLogInRequest\n  } = (0,_hooks_useLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mt-2 ml-4 mr-4 flex h-[500px] w-[370px]  flex-col  flex-wrap items-center justify-start rounded-lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mt-[10%] w-full text-center text-2xl font-bold\"\n  }, \"LOG IN\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mt-[5%] w-full text-center text-xs font-bold text-gray-400\"\n  }, \"Take control of your life\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mt-[5%] h-[1px] w-[80%] bg-gray-400\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    label: \"Email\",\n    className: \"mt-8 w-[80%]\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_text_fields__WEBPACK_IMPORTED_MODULE_1__.PasswordField, {\n    label: \"Password\",\n    className: \"mt-8 w-[80%]\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_buttons__WEBPACK_IMPORTED_MODULE_2__.AuthenticationButton, {\n    className: \"mt-12\",\n    text: \"Log In\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    className: \"mt-8 hover:underline\",\n    onClick: () => switchAuthMode()\n  }, \"I don't have an account.\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogInForm);\n\n//# sourceURL=webpack://frontend/./src/features/authentication/components/LogInForm.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6f1f92fcbe1ea3f9ab2c")
/******/ })();
/******/ 
/******/ }
);
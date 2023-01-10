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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n/* harmony import */ var _contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AppGeneralContextProvider */ \"./src/contexts/AppGeneralContextProvider.js\");\n\n\n\n\nconst LoginPage = () => {\n  const {\n    screenSize\n  } = (0,_contexts_AppGeneralContextProvider__WEBPACK_IMPORTED_MODULE_2__.useAppGeneralStateContext)();\n  console.log(\"render\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"absolute left-0 top-0 h-full w-full bg-black overflow-hidden text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: `h-full w-full bg-[url(${_assets__WEBPACK_IMPORTED_MODULE_1__.LoginBackgroundImage})]`\n  }, \"asdaasdass\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n//# sourceURL=webpack://frontend/./src/pages/LoginPage.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/index.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '${LoginBackgroundImage}'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\n/*\\r\\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\\r\\n*/\\r\\n\\r\\n/*\\r\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\r\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\r\\n*/\\r\\n\\r\\n*,\\r\\n::before,\\r\\n::after {\\r\\n  box-sizing: border-box; /* 1 */\\r\\n  border-width: 0; /* 2 */\\r\\n  border-style: solid; /* 2 */\\r\\n  border-color: #e5e7eb; /* 2 */\\r\\n}\\r\\n\\r\\n::before,\\r\\n::after {\\r\\n  --tw-content: '';\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Use a consistent sensible line-height in all browsers.\\r\\n2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n3. Use a more readable tab size.\\r\\n4. Use the user's configured `sans` font-family by default.\\r\\n*/\\r\\n\\r\\nhtml {\\r\\n  line-height: 1.5; /* 1 */\\r\\n  -webkit-text-size-adjust: 100%; /* 2 */\\r\\n  -moz-tab-size: 4; /* 3 */\\r\\n  -o-tab-size: 4;\\r\\n     tab-size: 4; /* 3 */\\r\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; /* 4 */\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Remove the margin in all browsers.\\r\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\r\\n*/\\r\\n\\r\\nbody {\\r\\n  margin: 0; /* 1 */\\r\\n  line-height: inherit; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Add the correct height in Firefox.\\r\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\r\\n3. Ensure horizontal rules are visible by default.\\r\\n*/\\r\\n\\r\\nhr {\\r\\n  height: 0; /* 1 */\\r\\n  color: inherit; /* 2 */\\r\\n  border-top-width: 1px; /* 3 */\\r\\n}\\r\\n\\r\\n/*\\r\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\r\\n*/\\r\\n\\r\\nabbr:where([title]) {\\r\\n  -webkit-text-decoration: underline dotted;\\r\\n          text-decoration: underline dotted;\\r\\n}\\r\\n\\r\\n/*\\r\\nRemove the default font size and weight for headings.\\r\\n*/\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n  font-size: inherit;\\r\\n  font-weight: inherit;\\r\\n}\\r\\n\\r\\n/*\\r\\nReset links to optimize for opt-in styling instead of opt-out.\\r\\n*/\\r\\n\\r\\na {\\r\\n  color: inherit;\\r\\n  text-decoration: inherit;\\r\\n}\\r\\n\\r\\n/*\\r\\nAdd the correct font weight in Edge and Safari.\\r\\n*/\\r\\n\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Use the user's configured `mono` font family by default.\\r\\n2. Correct the odd `em` font sizing in all browsers.\\r\\n*/\\r\\n\\r\\ncode,\\r\\nkbd,\\r\\nsamp,\\r\\npre {\\r\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace; /* 1 */\\r\\n  font-size: 1em; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\nAdd the correct font size in all browsers.\\r\\n*/\\r\\n\\r\\nsmall {\\r\\n  font-size: 80%;\\r\\n}\\r\\n\\r\\n/*\\r\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\r\\n*/\\r\\n\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -0.25em;\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -0.5em;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\r\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\r\\n3. Remove gaps between table borders by default.\\r\\n*/\\r\\n\\r\\ntable {\\r\\n  text-indent: 0; /* 1 */\\r\\n  border-color: inherit; /* 2 */\\r\\n  border-collapse: collapse; /* 3 */\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Change the font styles in all browsers.\\r\\n2. Remove the margin in Firefox and Safari.\\r\\n3. Remove default padding in all browsers.\\r\\n*/\\r\\n\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit; /* 1 */\\r\\n  font-size: 100%; /* 1 */\\r\\n  font-weight: inherit; /* 1 */\\r\\n  line-height: inherit; /* 1 */\\r\\n  color: inherit; /* 1 */\\r\\n  margin: 0; /* 2 */\\r\\n  padding: 0; /* 3 */\\r\\n}\\r\\n\\r\\n/*\\r\\nRemove the inheritance of text transform in Edge and Firefox.\\r\\n*/\\r\\n\\r\\nbutton,\\r\\nselect {\\r\\n  text-transform: none;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Correct the inability to style clickable types in iOS and Safari.\\r\\n2. Remove default button styles.\\r\\n*/\\r\\n\\r\\nbutton,\\r\\n[type='button'],\\r\\n[type='reset'],\\r\\n[type='submit'] {\\r\\n  -webkit-appearance: button; /* 1 */\\r\\n  background-color: transparent; /* 2 */\\r\\n  background-image: none; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\nUse the modern Firefox focus style for all focusable elements.\\r\\n*/\\r\\n\\r\\n:-moz-focusring {\\r\\n  outline: auto;\\r\\n}\\r\\n\\r\\n/*\\r\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\r\\n*/\\r\\n\\r\\n:-moz-ui-invalid {\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n/*\\r\\nAdd the correct vertical alignment in Chrome and Firefox.\\r\\n*/\\r\\n\\r\\nprogress {\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/*\\r\\nCorrect the cursor style of increment and decrement buttons in Safari.\\r\\n*/\\r\\n\\r\\n::-webkit-inner-spin-button,\\r\\n::-webkit-outer-spin-button {\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Correct the odd appearance in Chrome and Safari.\\r\\n2. Correct the outline style in Safari.\\r\\n*/\\r\\n\\r\\n[type='search'] {\\r\\n  -webkit-appearance: textfield; /* 1 */\\r\\n  outline-offset: -2px; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\nRemove the inner padding in Chrome and Safari on macOS.\\r\\n*/\\r\\n\\r\\n::-webkit-search-decoration {\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Correct the inability to style clickable types in iOS and Safari.\\r\\n2. Change font properties to `inherit` in Safari.\\r\\n*/\\r\\n\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button; /* 1 */\\r\\n  font: inherit; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\nAdd the correct display in Chrome and Safari.\\r\\n*/\\r\\n\\r\\nsummary {\\r\\n  display: list-item;\\r\\n}\\r\\n\\r\\n/*\\r\\nRemoves the default spacing and border for appropriate elements.\\r\\n*/\\r\\n\\r\\nblockquote,\\r\\ndl,\\r\\ndd,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\nhr,\\r\\nfigure,\\r\\np,\\r\\npre {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nfieldset {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nlegend {\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nol,\\r\\nul,\\r\\nmenu {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/*\\r\\nPrevent resizing textareas horizontally by default.\\r\\n*/\\r\\n\\r\\ntextarea {\\r\\n  resize: vertical;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\r\\n2. Set the default placeholder color to the user's configured gray 400 color.\\r\\n*/\\r\\n\\r\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\r\\n  opacity: 1; /* 1 */\\r\\n  color: #9ca3af; /* 2 */\\r\\n}\\r\\n\\r\\ninput::placeholder,\\r\\ntextarea::placeholder {\\r\\n  opacity: 1; /* 1 */\\r\\n  color: #9ca3af; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\nSet the default cursor for buttons.\\r\\n*/\\r\\n\\r\\nbutton,\\r\\n[role=\\\"button\\\"] {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/*\\r\\nMake sure disabled buttons don't get the pointer cursor.\\r\\n*/\\r\\n\\r\\n:disabled {\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\n/*\\r\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\r\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\r\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\r\\n*/\\r\\n\\r\\nimg,\\r\\nsvg,\\r\\nvideo,\\r\\ncanvas,\\r\\naudio,\\r\\niframe,\\r\\nembed,\\r\\nobject {\\r\\n  display: block; /* 1 */\\r\\n  vertical-align: middle; /* 2 */\\r\\n}\\r\\n\\r\\n/*\\r\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\r\\n*/\\r\\n\\r\\nimg,\\r\\nvideo {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n*, ::before, ::after{\\r\\n  --tw-border-spacing-x: 0;\\r\\n  --tw-border-spacing-y: 0;\\r\\n  --tw-translate-x: 0;\\r\\n  --tw-translate-y: 0;\\r\\n  --tw-rotate: 0;\\r\\n  --tw-skew-x: 0;\\r\\n  --tw-skew-y: 0;\\r\\n  --tw-scale-x: 1;\\r\\n  --tw-scale-y: 1;\\r\\n  --tw-pan-x:  ;\\r\\n  --tw-pan-y:  ;\\r\\n  --tw-pinch-zoom:  ;\\r\\n  --tw-scroll-snap-strictness: proximity;\\r\\n  --tw-ordinal:  ;\\r\\n  --tw-slashed-zero:  ;\\r\\n  --tw-numeric-figure:  ;\\r\\n  --tw-numeric-spacing:  ;\\r\\n  --tw-numeric-fraction:  ;\\r\\n  --tw-ring-inset:  ;\\r\\n  --tw-ring-offset-width: 0px;\\r\\n  --tw-ring-offset-color: #fff;\\r\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\r\\n  --tw-ring-offset-shadow: 0 0 #0000;\\r\\n  --tw-ring-shadow: 0 0 #0000;\\r\\n  --tw-shadow: 0 0 #0000;\\r\\n  --tw-shadow-colored: 0 0 #0000;\\r\\n  --tw-blur:  ;\\r\\n  --tw-brightness:  ;\\r\\n  --tw-contrast:  ;\\r\\n  --tw-grayscale:  ;\\r\\n  --tw-hue-rotate:  ;\\r\\n  --tw-invert:  ;\\r\\n  --tw-saturate:  ;\\r\\n  --tw-sepia:  ;\\r\\n  --tw-drop-shadow:  ;\\r\\n  --tw-backdrop-blur:  ;\\r\\n  --tw-backdrop-brightness:  ;\\r\\n  --tw-backdrop-contrast:  ;\\r\\n  --tw-backdrop-grayscale:  ;\\r\\n  --tw-backdrop-hue-rotate:  ;\\r\\n  --tw-backdrop-invert:  ;\\r\\n  --tw-backdrop-opacity:  ;\\r\\n  --tw-backdrop-saturate:  ;\\r\\n  --tw-backdrop-sepia:  ;\\r\\n}\\r\\n\\r\\n::-webkit-backdrop{\\r\\n  --tw-border-spacing-x: 0;\\r\\n  --tw-border-spacing-y: 0;\\r\\n  --tw-translate-x: 0;\\r\\n  --tw-translate-y: 0;\\r\\n  --tw-rotate: 0;\\r\\n  --tw-skew-x: 0;\\r\\n  --tw-skew-y: 0;\\r\\n  --tw-scale-x: 1;\\r\\n  --tw-scale-y: 1;\\r\\n  --tw-pan-x:  ;\\r\\n  --tw-pan-y:  ;\\r\\n  --tw-pinch-zoom:  ;\\r\\n  --tw-scroll-snap-strictness: proximity;\\r\\n  --tw-ordinal:  ;\\r\\n  --tw-slashed-zero:  ;\\r\\n  --tw-numeric-figure:  ;\\r\\n  --tw-numeric-spacing:  ;\\r\\n  --tw-numeric-fraction:  ;\\r\\n  --tw-ring-inset:  ;\\r\\n  --tw-ring-offset-width: 0px;\\r\\n  --tw-ring-offset-color: #fff;\\r\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\r\\n  --tw-ring-offset-shadow: 0 0 #0000;\\r\\n  --tw-ring-shadow: 0 0 #0000;\\r\\n  --tw-shadow: 0 0 #0000;\\r\\n  --tw-shadow-colored: 0 0 #0000;\\r\\n  --tw-blur:  ;\\r\\n  --tw-brightness:  ;\\r\\n  --tw-contrast:  ;\\r\\n  --tw-grayscale:  ;\\r\\n  --tw-hue-rotate:  ;\\r\\n  --tw-invert:  ;\\r\\n  --tw-saturate:  ;\\r\\n  --tw-sepia:  ;\\r\\n  --tw-drop-shadow:  ;\\r\\n  --tw-backdrop-blur:  ;\\r\\n  --tw-backdrop-brightness:  ;\\r\\n  --tw-backdrop-contrast:  ;\\r\\n  --tw-backdrop-grayscale:  ;\\r\\n  --tw-backdrop-hue-rotate:  ;\\r\\n  --tw-backdrop-invert:  ;\\r\\n  --tw-backdrop-opacity:  ;\\r\\n  --tw-backdrop-saturate:  ;\\r\\n  --tw-backdrop-sepia:  ;\\r\\n}\\r\\n\\r\\n::backdrop{\\r\\n  --tw-border-spacing-x: 0;\\r\\n  --tw-border-spacing-y: 0;\\r\\n  --tw-translate-x: 0;\\r\\n  --tw-translate-y: 0;\\r\\n  --tw-rotate: 0;\\r\\n  --tw-skew-x: 0;\\r\\n  --tw-skew-y: 0;\\r\\n  --tw-scale-x: 1;\\r\\n  --tw-scale-y: 1;\\r\\n  --tw-pan-x:  ;\\r\\n  --tw-pan-y:  ;\\r\\n  --tw-pinch-zoom:  ;\\r\\n  --tw-scroll-snap-strictness: proximity;\\r\\n  --tw-ordinal:  ;\\r\\n  --tw-slashed-zero:  ;\\r\\n  --tw-numeric-figure:  ;\\r\\n  --tw-numeric-spacing:  ;\\r\\n  --tw-numeric-fraction:  ;\\r\\n  --tw-ring-inset:  ;\\r\\n  --tw-ring-offset-width: 0px;\\r\\n  --tw-ring-offset-color: #fff;\\r\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\r\\n  --tw-ring-offset-shadow: 0 0 #0000;\\r\\n  --tw-ring-shadow: 0 0 #0000;\\r\\n  --tw-shadow: 0 0 #0000;\\r\\n  --tw-shadow-colored: 0 0 #0000;\\r\\n  --tw-blur:  ;\\r\\n  --tw-brightness:  ;\\r\\n  --tw-contrast:  ;\\r\\n  --tw-grayscale:  ;\\r\\n  --tw-hue-rotate:  ;\\r\\n  --tw-invert:  ;\\r\\n  --tw-saturate:  ;\\r\\n  --tw-sepia:  ;\\r\\n  --tw-drop-shadow:  ;\\r\\n  --tw-backdrop-blur:  ;\\r\\n  --tw-backdrop-brightness:  ;\\r\\n  --tw-backdrop-contrast:  ;\\r\\n  --tw-backdrop-grayscale:  ;\\r\\n  --tw-backdrop-hue-rotate:  ;\\r\\n  --tw-backdrop-invert:  ;\\r\\n  --tw-backdrop-opacity:  ;\\r\\n  --tw-backdrop-saturate:  ;\\r\\n  --tw-backdrop-sepia:  ;\\r\\n}\\r\\n.visible{\\r\\n  visibility: visible;\\r\\n}\\r\\n.static{\\r\\n  position: static;\\r\\n}\\r\\n.fixed{\\r\\n  position: fixed;\\r\\n}\\r\\n.absolute{\\r\\n  position: absolute;\\r\\n}\\r\\n.relative{\\r\\n  position: relative;\\r\\n}\\r\\n.right-4{\\r\\n  right: 1rem;\\r\\n}\\r\\n.bottom-4{\\r\\n  bottom: 1rem;\\r\\n}\\r\\n.top-0{\\r\\n  top: 0px;\\r\\n}\\r\\n.right-0{\\r\\n  right: 0px;\\r\\n}\\r\\n.left-0{\\r\\n  left: 0px;\\r\\n}\\r\\n.right-2{\\r\\n  right: 0.5rem;\\r\\n}\\r\\n.top-2{\\r\\n  top: 0.5rem;\\r\\n}\\r\\n.right-5{\\r\\n  right: 1.25rem;\\r\\n}\\r\\n.top-16{\\r\\n  top: 4rem;\\r\\n}\\r\\n.-top-1{\\r\\n  top: -0.25rem;\\r\\n}\\r\\n.right-1{\\r\\n  right: 0.25rem;\\r\\n}\\r\\n.z-10{\\r\\n  z-index: 10;\\r\\n}\\r\\n.float-right{\\r\\n  float: right;\\r\\n}\\r\\n.m-2{\\r\\n  margin: 0.5rem;\\r\\n}\\r\\n.m-3{\\r\\n  margin: 0.75rem;\\r\\n}\\r\\n.mb-10{\\r\\n  margin-bottom: 2.5rem;\\r\\n}\\r\\n.ml-3{\\r\\n  margin-left: 0.75rem;\\r\\n}\\r\\n.mt-4{\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n.mt-10{\\r\\n  margin-top: 2.5rem;\\r\\n}\\r\\n.ml-4{\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n.ml-2{\\r\\n  margin-left: 0.5rem;\\r\\n}\\r\\n.mt-2{\\r\\n  margin-top: 0.5rem;\\r\\n}\\r\\n.ml-1{\\r\\n  margin-left: 0.25rem;\\r\\n}\\r\\n.mt-3{\\r\\n  margin-top: 0.75rem;\\r\\n}\\r\\n.mb-3{\\r\\n  margin-bottom: 0.75rem;\\r\\n}\\r\\n.mt-5{\\r\\n  margin-top: 1.25rem;\\r\\n}\\r\\n.mt-6{\\r\\n  margin-top: 1.5rem;\\r\\n}\\r\\n.block{\\r\\n  display: block;\\r\\n}\\r\\n.flex{\\r\\n  display: flex;\\r\\n}\\r\\n.inline-flex{\\r\\n  display: inline-flex;\\r\\n}\\r\\n.table{\\r\\n  display: table;\\r\\n}\\r\\n.grid{\\r\\n  display: grid;\\r\\n}\\r\\n.hidden{\\r\\n  display: none;\\r\\n}\\r\\n.h-screen{\\r\\n  height: 100vh;\\r\\n}\\r\\n.h-10{\\r\\n  height: 2.5rem;\\r\\n}\\r\\n.h-20{\\r\\n  height: 5rem;\\r\\n}\\r\\n.h-3{\\r\\n  height: 0.75rem;\\r\\n}\\r\\n.h-full{\\r\\n  height: 100%;\\r\\n}\\r\\n.h-2{\\r\\n  height: 0.5rem;\\r\\n}\\r\\n.h-8{\\r\\n  height: 2rem;\\r\\n}\\r\\n.h-80{\\r\\n  height: 80px;\\r\\n}\\r\\n.h-24{\\r\\n  height: 6rem;\\r\\n}\\r\\n.max-h-\\\\[280px\\\\]{\\r\\n  max-height: 280px;\\r\\n}\\r\\n.min-h-screen{\\r\\n  min-height: 100vh;\\r\\n}\\r\\n.w-full{\\r\\n  width: 100%;\\r\\n}\\r\\n.w-72{\\r\\n  width: 18rem;\\r\\n}\\r\\n.w-0{\\r\\n  width: 0px;\\r\\n}\\r\\n.w-screen{\\r\\n  width: 100vw;\\r\\n}\\r\\n.w-400{\\r\\n  width: 400px;\\r\\n}\\r\\n.w-10{\\r\\n  width: 2.5rem;\\r\\n}\\r\\n.w-3{\\r\\n  width: 0.75rem;\\r\\n}\\r\\n.w-2{\\r\\n  width: 0.5rem;\\r\\n}\\r\\n.w-8{\\r\\n  width: 2rem;\\r\\n}\\r\\n.w-24{\\r\\n  width: 6rem;\\r\\n}\\r\\n.w-96{\\r\\n  width: 24rem;\\r\\n}\\r\\n.max-w-\\\\[280px\\\\]{\\r\\n  max-width: 280px;\\r\\n}\\r\\n.cursor-pointer{\\r\\n  cursor: pointer;\\r\\n}\\r\\n.resize{\\r\\n  resize: both;\\r\\n}\\r\\n.flex-col{\\r\\n  flex-direction: column;\\r\\n}\\r\\n.flex-wrap{\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n.items-center{\\r\\n  align-items: center;\\r\\n}\\r\\n.justify-center{\\r\\n  justify-content: center;\\r\\n}\\r\\n.justify-between{\\r\\n  justify-content: space-between;\\r\\n}\\r\\n.gap-5{\\r\\n  gap: 1.25rem;\\r\\n}\\r\\n.gap-3{\\r\\n  gap: 0.75rem;\\r\\n}\\r\\n.gap-2{\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n.gap-4{\\r\\n  gap: 1rem;\\r\\n}\\r\\n.overflow-auto{\\r\\n  overflow: auto;\\r\\n}\\r\\n.overflow-hidden{\\r\\n  overflow: hidden;\\r\\n}\\r\\n.rounded-lg{\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n.rounded-full{\\r\\n  border-radius: 9999px;\\r\\n}\\r\\n.rounded-xl{\\r\\n  border-radius: 0.75rem;\\r\\n}\\r\\n.rounded-2xl{\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n.rounded{\\r\\n  border-radius: 0.25rem;\\r\\n}\\r\\n.border{\\r\\n  border-width: 1px;\\r\\n}\\r\\n.border-1{\\r\\n  border-width: 1px;\\r\\n}\\r\\n.border-t-1{\\r\\n  border-top-width: 1px;\\r\\n}\\r\\n.border-b-1{\\r\\n  border-bottom-width: 1px;\\r\\n}\\r\\n.border-r-0{\\r\\n  border-right-width: 0px;\\r\\n}\\r\\n.border-r-1{\\r\\n  border-right-width: 1px;\\r\\n}\\r\\n.border-color{\\r\\n  border-color: rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n.bg-white{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\\r\\n}\\r\\n.bg-half-transparent{\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n.bg-black{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\\r\\n}\\r\\n.bg-\\\\[url\\\\(\\\\$\\\\{LoginBackgroundImage\\\\}\\\\)\\\\]{\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n.p-3{\\r\\n  padding: 0.75rem;\\r\\n}\\r\\n.p-4{\\r\\n  padding: 1rem;\\r\\n}\\r\\n.p-2{\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n.p-1{\\r\\n  padding: 0.25rem;\\r\\n}\\r\\n.p-8{\\r\\n  padding: 2rem;\\r\\n}\\r\\n.py-1{\\r\\n  padding-top: 0.25rem;\\r\\n  padding-bottom: 0.25rem;\\r\\n}\\r\\n.px-2{\\r\\n  padding-left: 0.5rem;\\r\\n  padding-right: 0.5rem;\\r\\n}\\r\\n.pl-4{\\r\\n  padding-left: 1rem;\\r\\n}\\r\\n.pt-3{\\r\\n  padding-top: 0.75rem;\\r\\n}\\r\\n.pb-2\\\\.5{\\r\\n  padding-bottom: 0.625rem;\\r\\n}\\r\\n.pb-2{\\r\\n  padding-bottom: 0.5rem;\\r\\n}\\r\\n.pb-10{\\r\\n  padding-bottom: 2.5rem;\\r\\n}\\r\\n.pb-6{\\r\\n  padding-bottom: 1.5rem;\\r\\n}\\r\\n.pb-8{\\r\\n  padding-bottom: 2rem;\\r\\n}\\r\\n.pb-12{\\r\\n  padding-bottom: 3rem;\\r\\n}\\r\\n.pr-2{\\r\\n  padding-right: 0.5rem;\\r\\n}\\r\\n.pr-6{\\r\\n  padding-right: 1.5rem;\\r\\n}\\r\\n.pl-6{\\r\\n  padding-left: 1.5rem;\\r\\n}\\r\\n.pt-4{\\r\\n  padding-top: 1rem;\\r\\n}\\r\\n.text-center{\\r\\n  text-align: center;\\r\\n}\\r\\n.text-3xl{\\r\\n  font-size: 1.875rem;\\r\\n  line-height: 2.25rem;\\r\\n}\\r\\n.text-xl{\\r\\n  font-size: 1.25rem;\\r\\n  line-height: 1.75rem;\\r\\n}\\r\\n.text-2xl{\\r\\n  font-size: 1.5rem;\\r\\n  line-height: 2rem;\\r\\n}\\r\\n.text-lg{\\r\\n  font-size: 1.125rem;\\r\\n  line-height: 1.75rem;\\r\\n}\\r\\n.text-14{\\r\\n  font-size: 14px;\\r\\n}\\r\\n.text-sm{\\r\\n  font-size: 0.875rem;\\r\\n  line-height: 1.25rem;\\r\\n}\\r\\n.text-xs{\\r\\n  font-size: 0.75rem;\\r\\n  line-height: 1rem;\\r\\n}\\r\\n.font-extrabold{\\r\\n  font-weight: 800;\\r\\n}\\r\\n.font-semibold{\\r\\n  font-weight: 600;\\r\\n}\\r\\n.font-bold{\\r\\n  font-weight: 700;\\r\\n}\\r\\n.uppercase{\\r\\n  text-transform: uppercase;\\r\\n}\\r\\n.capitalize{\\r\\n  text-transform: capitalize;\\r\\n}\\r\\n.leading-8{\\r\\n  line-height: 2rem;\\r\\n}\\r\\n.tracking-tight{\\r\\n  letter-spacing: -0.025em;\\r\\n}\\r\\n.text-white{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-slate-900{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(15 23 42 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-gray-400{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(156 163 175 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-gray-700{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(55 65 81 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-gray-600{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(75 85 99 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-red-600{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(220 38 38 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-green-600{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(22 163 74 / var(--tw-text-opacity));\\r\\n}\\r\\n.text-gray-500{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(107 114 128 / var(--tw-text-opacity));\\r\\n}\\r\\n.drop-shadow-2xl{\\r\\n  --tw-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));\\r\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\r\\n}\\r\\n.backdrop-blur{\\r\\n  --tw-backdrop-blur: blur(8px);\\r\\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\r\\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\r\\n}\\r\\n.transition-all{\\r\\n  transition-property: all;\\r\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\r\\n  transition-duration: 150ms;\\r\\n}\\r\\n.duration-1000{\\r\\n  transition-duration: 1000ms;\\r\\n}\\r\\n.ease-in-out{\\r\\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\r\\n}\\r\\n.hover\\\\:bg-light-gray:hover{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(247 247 247 / var(--tw-bg-opacity));\\r\\n}\\r\\n.hover\\\\:drop-shadow-xl:hover{\\r\\n  --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));\\r\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\r\\n}\\r\\n.dark .dark\\\\:border-gray-600{\\r\\n  --tw-border-opacity: 1;\\r\\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\\r\\n}\\r\\n.dark .dark\\\\:bg-main-dark-bg{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(32 35 42 / var(--tw-bg-opacity));\\r\\n}\\r\\n.dark .dark\\\\:bg-secondary-dark-bg{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(51 55 62 / var(--tw-bg-opacity));\\r\\n}\\r\\n.dark .dark\\\\:bg-\\\\[\\\\#484B52\\\\]{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(72 75 82 / var(--tw-bg-opacity));\\r\\n}\\r\\n.dark .dark\\\\:bg-\\\\[\\\\#42464D\\\\]{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(66 70 77 / var(--tw-bg-opacity));\\r\\n}\\r\\n.dark .dark\\\\:text-gray-200{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(229 231 235 / var(--tw-text-opacity));\\r\\n}\\r\\n.dark .dark\\\\:text-white{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(255 255 255 / var(--tw-text-opacity));\\r\\n}\\r\\n.dark .dark\\\\:text-gray-400{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(156 163 175 / var(--tw-text-opacity));\\r\\n}\\r\\n.dark .dark\\\\:hover\\\\:bg-\\\\[\\\\#42464D\\\\]:hover{\\r\\n  --tw-bg-opacity: 1;\\r\\n  background-color: rgb(66 70 77 / var(--tw-bg-opacity));\\r\\n}\\r\\n.dark .dark\\\\:hover\\\\:text-black:hover{\\r\\n  --tw-text-opacity: 1;\\r\\n  color: rgb(0 0 0 / var(--tw-text-opacity));\\r\\n}\\r\\n@media (min-width: 768px){\\r\\n\\r\\n  .md\\\\:right-52{\\r\\n    right: 13rem;\\r\\n  }\\r\\n\\r\\n  .md\\\\:right-40{\\r\\n    right: 10rem;\\r\\n  }\\r\\n\\r\\n  .md\\\\:mx-6{\\r\\n    margin-left: 1.5rem;\\r\\n    margin-right: 1.5rem;\\r\\n  }\\r\\n\\r\\n  .md\\\\:ml-72{\\r\\n    margin-left: 18rem;\\r\\n  }\\r\\n\\r\\n  .md\\\\:ml-3{\\r\\n    margin-left: 0.75rem;\\r\\n  }\\r\\n\\r\\n  .md\\\\:hidden{\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .md\\\\:h-\\\\[550px\\\\]{\\r\\n    height: 550px;\\r\\n  }\\r\\n\\r\\n  .md\\\\:w-400{\\r\\n    width: 400px;\\r\\n  }\\r\\n\\r\\n  .md\\\\:w-\\\\[50\\\\%\\\\]{\\r\\n    width: 50%;\\r\\n  }\\r\\n\\r\\n  .md\\\\:overflow-hidden{\\r\\n    overflow: hidden;\\r\\n  }\\r\\n\\r\\n  .md\\\\:hover\\\\:overflow-auto:hover{\\r\\n    overflow: auto;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n\r\n  if (!url) {\r\n    return url;\r\n  }\r\n\r\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\r\n\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  } // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n\r\n\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n\r\n  return url;\r\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4178fbe4790f6537539")
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise((resolve, reject) => {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = (event) => {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdatefrontend"] = (chunkId, moreModules, runtime) => {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = () => {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ }
);
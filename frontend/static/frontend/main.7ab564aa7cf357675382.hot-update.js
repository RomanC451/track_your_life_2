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

/***/ "./src/hooks/useAnimation.js":
/*!***********************************!*\
  !*** ./src/hooks/useAnimation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n\nconst useAnimation = (animationSteps, defaultProps = null) => {\n  const animationRef = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useAnimationControls)();\n  async function startAnimation(currentAnimationStep, callback = null) {\n    var props = {\n      ...defaultProps,\n      ...animationSteps[currentAnimationStep]\n    };\n    console.log(\"startAnimation\");\n    console.log(props);\n    await animationRef.start(props).then(() => {\n      console.log(\"aniamation finished\");\n      if (callback) {\n        callback();\n      }\n    });\n    console.log(promise);\n  }\n  return [animationRef, startAnimation];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAnimation);\nvoid function register() {\n  /* react-hot-loader/webpack */var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n  if (!reactHotLoader) {\n    return;\n  } /* eslint-disable camelcase, no-undef */\n  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */\n  if (!webpackExports) {\n    return;\n  }\n  if (typeof webpackExports === 'function') {\n    reactHotLoader.register(webpackExports, 'module.exports', \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useAnimation.js\");\n    return;\n  } /* eslint-disable no-restricted-syntax */\n  for (var key in webpackExports) {\n    /* eslint-enable no-restricted-syntax */if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {\n      continue;\n    }\n    var namedExport = void 0;\n    try {\n      namedExport = webpackExports[key];\n    } catch (err) {\n      continue;\n    }\n    reactHotLoader.register(namedExport, key, \"E:\\\\track_your_life_2\\\\frontend\\\\src\\\\hooks\\\\useAnimation.js\");\n  }\n}();\n\n//# sourceURL=webpack://frontend/./src/hooks/useAnimation.js?");

/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationControls\": () => (/* binding */ animationControls)\n/* harmony export */ });\n/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ \"./node_modules/hey-listen/dist/hey-listen.es.js\");\n/* harmony import */ var _render_utils_animation_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/animation.mjs */ \"./node_modules/framer-motion/dist/es/render/utils/animation.mjs\");\n/* harmony import */ var _render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/utils/setters.mjs */ \"./node_modules/framer-motion/dist/es/render/utils/setters.mjs\");\n\n\n\n\n/**\n * @public\n */\nfunction animationControls() {\n    /**\n     * Track whether the host component has mounted.\n     */\n    let hasMounted = false;\n    /**\n     * A collection of linked component animation controls.\n     */\n    const subscribers = new Set();\n    const controls = {\n        subscribe(visualElement) {\n            subscribers.add(visualElement);\n            return () => void subscribers.delete(visualElement);\n        },\n        start(definition, transitionOverride) {\n            (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(hasMounted, \"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.\");\n            const animations = [];\n            subscribers.forEach((visualElement) => {\n                animations.push((0,_render_utils_animation_mjs__WEBPACK_IMPORTED_MODULE_1__.animateVisualElement)(visualElement, definition, {\n                    transitionOverride,\n                }));\n            });\n            return Promise.all(animations);\n        },\n        set(definition) {\n            (0,hey_listen__WEBPACK_IMPORTED_MODULE_0__.invariant)(hasMounted, \"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.\");\n            return subscribers.forEach((visualElement) => {\n                (0,_render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_2__.setValues)(visualElement, definition);\n            });\n        },\n        stop() {\n            subscribers.forEach((visualElement) => {\n                (0,_render_utils_animation_mjs__WEBPACK_IMPORTED_MODULE_1__.stopAnimation)(visualElement);\n            });\n        },\n        mount() {\n            hasMounted = true;\n            return () => {\n                hasMounted = false;\n                controls.stop();\n            };\n        },\n    };\n    return controls;\n}\n\n\n\n\n//# sourceURL=webpack://frontend/./node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs?");

/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAnimation\": () => (/* binding */ useAnimation),\n/* harmony export */   \"useAnimationControls\": () => (/* binding */ useAnimationControls)\n/* harmony export */ });\n/* harmony import */ var _animation_controls_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-controls.mjs */ \"./node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs\");\n/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/use-constant.mjs */ \"./node_modules/framer-motion/dist/es/utils/use-constant.mjs\");\n/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/use-isomorphic-effect.mjs */ \"./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs\");\n\n\n\n\n/**\n * Creates `AnimationControls`, which can be used to manually start, stop\n * and sequence animations on one or more components.\n *\n * The returned `AnimationControls` should be passed to the `animate` property\n * of the components you want to animate.\n *\n * These components can then be animated with the `start` method.\n *\n * ```jsx\n * import * as React from 'react'\n * import { motion, useAnimation } from 'framer-motion'\n *\n * export function MyComponent(props) {\n *    const controls = useAnimation()\n *\n *    controls.start({\n *        x: 100,\n *        transition: { duration: 0.5 },\n *    })\n *\n *    return <motion.div animate={controls} />\n * }\n * ```\n *\n * @returns Animation controller with `start` and `stop` methods\n *\n * @public\n */\nfunction useAnimationControls() {\n    const controls = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_0__.useConstant)(_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_1__.animationControls);\n    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(controls.mount, []);\n    return controls;\n}\nconst useAnimation = useAnimationControls;\n\n\n\n\n//# sourceURL=webpack://frontend/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4d8cb42aa10b27e65fae")
/******/ })();
/******/ 
/******/ }
);
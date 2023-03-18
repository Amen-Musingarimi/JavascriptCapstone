/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  list-style: none;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --color-white: #fff;\\r\\n  --color-black: #272a31;\\r\\n  --color-light-pitch: #fdf2e9;\\r\\n  --color-dark-pitch: #e67e22;\\r\\n  --color-dark: #cf711f;\\r\\n  --color-light: #fae5d3;\\r\\n  --color-gray-light: #d3d3d3;\\r\\n  --color-gray: #adadad;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  position: relative;\\r\\n  background-color: var(--color-light-pitch);\\r\\n}\\r\\n\\r\\na {\\r\\n  color: var(--color-black);\\r\\n}\\r\\n\\r\\na,\\r\\na:link,\\r\\na:visited,\\r\\na:focus,\\r\\na:hover,\\r\\na:active {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* -------------------------------Styling the Navigation Bar-------------------------------- */\\r\\nheader {\\r\\n  border: 1px solid var(--color-dark-pitch);\\r\\n  border-radius: 4px;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: grid;\\r\\n  grid-template-columns: 2fr 1fr;\\r\\n  background-color: var(--color-light);\\r\\n  padding: 1% 2%;\\r\\n  color: var(--color-black);\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.navLinks {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.totalMeals{\\r\\n  color: var(--color-dark);\\r\\n  margin-left: 5%;\\r\\n}\\r\\n/* -------------------------------Styling the Home Page-------------------------------- */\\r\\nmain {\\r\\n  padding: 60px 0;\\r\\n}\\r\\n\\r\\n.mealsListContainer {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, minmax(0, 1fr));\\r\\n  grid-auto-rows: minmax(100px, auto);\\r\\n  grid-gap: 20px;\\r\\n  max-width: 100%;\\r\\n  margin: 0 auto;\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.mealCard {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  border: 1px solid var(--color-dark-pitch);\\r\\n  padding: 2%;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.mealCard img {\\r\\n  width: 100%;\\r\\n  height: 250px;\\r\\n  object-fit: cover;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.mealDetail {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.mealHeading {\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  padding: 2% 3%;\\r\\n  align-self: center;\\r\\n  color: var(--color-white);\\r\\n  font-weight: 600;\\r\\n  background-color: var(--color-dark-pitch);\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.commentBtn:hover {\\r\\n  background-color: var(--color-dark);\\r\\n  color: var(--color-light);\\r\\n}\\r\\n\\r\\n/* -------------------------------Styling the Popup Window-------------------------------- */\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  background-color: var(--color-light);\\r\\n  border: 1px solid var(--color-dark-pitch);\\r\\n  border-radius: 8px;\\r\\n  margin: 2% 10%;\\r\\n  padding: 2%;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  left: 0;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n.popupCard {\\r\\n  width: 98%;\\r\\n  max-height: 80vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  padding: 2%;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.popupCardImage {\\r\\n  width: 100%;\\r\\n  height: 500px;\\r\\n  object-fit: cover;\\r\\n  border-radius: 8px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.mealTitle {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.commentsHeading {\\r\\n  align-self: flex-start;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  padding: 1.5%;\\r\\n  width: 60%;\\r\\n  border-radius: 8px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ninput::-webkit-credentials-auto-fill-button {\\r\\n  visibility: hidden;\\r\\n  pointer-events: none;\\r\\n  background-color: var(--color-white);\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline-style: none;\\r\\n  box-shadow: none !important;\\r\\n}\\r\\n\\r\\ninput:-webkit-autofill,\\r\\ninput:-webkit-autofill:hover,\\r\\ninput:-webkit-autofill:focus,\\r\\ntextarea:-webkit-autofill,\\r\\ntextarea:-webkit-autofill:hover,\\r\\ntextarea:-webkit-autofill:focus,\\r\\nselect:-webkit-autofill,\\r\\nselect:-webkit-autofill:hover,\\r\\nselect:-webkit-autofill:focus {\\r\\n  color: #555 !important;\\r\\n  font-size: inherit !important;\\r\\n  font-family: inherit !important;\\r\\n  line-height: inherit !important;\\r\\n}\\r\\n\\r\\n.submitCommentBtn {\\r\\n  padding: 2% 3%;\\r\\n  align-self: flex-start;\\r\\n  color: var(--color-white);\\r\\n  font-weight: 600;\\r\\n  background-color: var(--color-dark-pitch);\\r\\n  border: none;\\r\\n  border-radius: 8px;\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n/* -------------------------------Styling the Comments Section-------------------------------- */\\r\\n.color {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n/* -------------------------------Styling the Comments Section-------------------------------- */\\r\\n.commentsCount {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.commentitem {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n/* -------------------------------Styling the Footer-------------------------------- */\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  border: 1px solid var(--color-dark-pitch);\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.footer-div1 {\\r\\n  padding: 1%;\\r\\n  background-color: var(--color-light);\\r\\n}\\r\\n\\r\\n.footer-div2 {\\r\\n  padding: 1%;\\r\\n  background-color: var(--color-light-pitch);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://khanban-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://khanban-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://khanban-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://khanban-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://khanban-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://khanban-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://khanban-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://khanban-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://khanban-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://khanban-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _modules_commentsApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentsApi.js */ \"./src/modules/commentsApi.js\");\n/* harmony import */ var _modules_countComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countComments.js */ \"./src/modules/countComments.js\");\n/* harmony import */ var _modules_countComments_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_countComments_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_countMeals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/countMeals.js */ \"./src/modules/countMeals.js\");\n/* harmony import */ var _modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likesApi.js */ \"./src/modules/likesApi.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst getNumberOfLikes = (response, likes) => {\r\n  const mealLikes = new Map();\r\n\r\n  response.forEach((meal) => {\r\n    let num = 0;\r\n    for (let i = 0; i < likes.length; i += 1) {\r\n      if (meal.idMeal === likes[i].item_id) {\r\n        num = likes[i].likes;\r\n        break;\r\n      }\r\n    }\r\n    mealLikes.set(meal.idMeal, num);\r\n  });\r\n  return mealLikes;\r\n};\r\n\r\nconst renderMeal = async () => {\r\n   const response = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// const displayMeals = async () => {\r\n    \r\n//     const totalMealsNumber = document.querySelector('.totalMeals');\r\n//      const response = await getMeals();\r\n//     const total = totalMeals(response);\r\n//     if (!total) {\r\n//       totalMealsNumber.innerHTML = 0;\r\n//     } else {\r\n//       totalMealsNumber.innerHTML = total;\r\n//     }\r\n//     displayMeals();\r\n  \r\n  const likes = await (0,_modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\r\n  const numberOfLikes = getNumberOfLikes(response, likes);\r\n\r\n  const mealsListContainer = document.querySelector('.mealsListContainer');\r\n  mealsListContainer.innerHTML = '';\r\n\r\n  const mealItem = response.map(\r\n    (data) => `\r\n    <article class=\"mealCard\" id=${data.idMeal}>\r\n            <img src=${data.strMealThumb} alt=${data.strMeal} />\r\n            <div class=\"mealDetail\">\r\n              <h2 class=\"mealHeading\">${data.strMeal}</h2>\r\n              <a href=\"#\" class=\"likeBtn\">\r\n                <i class=\"fa-solid fa-heart\"></i>\r\n              </a>\r\n              <span class=\"likesNumber\">${numberOfLikes.get(data.idMeal)}</span>\r\n            </div>\r\n            <button type=\"button\" class=\"commentBtn seeCommentsBtn\">Comments</button>\r\n          </article>\r\n  `\r\n);\r\n  mealsListContainer.innerHTML = mealItem.join('');\r\n\r\n  const displayLikes = async (targetId, likesTotal) => {\r\n    const likesArray = await (0,_modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\r\n\r\n    for (let n = 0; n < likesArray.length; n += 1) {\r\n      if (likesArray[n].item_id === targetId) {\r\n        likesTotal.innerHTML = likesArray[n].likes;\r\n      }\r\n    }\r\n  };\r\n\r\n\r\n  const likeBtns = document.querySelectorAll('.likeBtn');\r\n  likeBtns.forEach((likeBtn) => {\r\n    likeBtn.addEventListener('click', async (event) => {\r\n      event.preventDefault();\r\n      likeBtn.classList.add('color');\r\n      const id =\r\n        event.target.parentNode.parentNode.parentNode.getAttribute('id');\r\n      await (0,_modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__.postLike)({\r\n        item_id: id,\r\n      });\r\n      const likesTotal = event.target.parentNode.nextSibling.nextSibling;\r\n\r\n      displayLikes(id, likesTotal);\r\n    });\r\n  });\r\n\r\n  const seeCommentsBtns = document.querySelectorAll('.seeCommentsBtn');\r\n  const popupWindow = document.querySelector('.popupWindow');\r\n\r\n  const scrollUp = () => {\r\n    document.body.scrollTop = 0;\r\n    document.documentElement.scrollTop = 0;\r\n  };\r\n\r\n  seeCommentsBtns.forEach((btn) => {\r\n    btn.addEventListener('click', (e) => {\r\n      const mealId = e.target.parentNode.getAttribute('id');\r\n      const mealData = response.find((meal) => meal.idMeal === mealId);\r\n      popupWindow.classList.remove('hide');\r\n      popupWindow.classList.add('overlay');\r\n      scrollUp();\r\n      popupWindow.innerHTML = `\r\n        <article class=\"popupCard\" id=\"${mealData.idMeal}\">        \r\n        <img class=\"popupCardImage\" src=\"${mealData.strMealThumb}\" alt=\"${mealData.strMeal}\" />                \r\n          <h2 class=\"mealTitle\">${mealData.strMeal}</h2>\r\n          <h3 class=\"commentsCount\">Total Comments(<p class=\"commentsTotal\"></p>)</h3>\r\n          <ul class=\"commentsList\">            \r\n          </ul>       \r\n            <h3 class=\"commentsHeading\">Add a comment</h3>\r\n              <form action=\"\">\r\n                <label for=\"nameInput\">\r\n                  <input\r\n                    name=\"nameInput\"\r\n                    id=\"nameinput\"\r\n                    class=\"nameInput\"\r\n                    type=\"text\"\r\n                    max=\"30\"\r\n                    placeholder=\"Your Name\"\r\n                    required\r\n                  />\r\n                </label>\r\n                <label for=\"textArea\">\r\n                  <textarea\r\n                    name=\"textArea\"\r\n                    id=\"textArea\"\r\n                    class=\"textArea\"\r\n                    cols=\"30\"\r\n                    rows=\"10\"\r\n                    maxlength=\"200\"\r\n                    placeholder=\"Your Comment\"\r\n                    required\r\n                  ></textarea>\r\n                </label>\r\n                <button class=\"submitCommentBtn\" type=\"button\">Comment</button>\r\n              </form>         \r\n        </article>\r\n        <a href=\"#\" class=\"closeBtn\"><i class=\"fa-sharp fa-solid fa-xmark\"></i></a>\r\n      `;\r\n\r\n      const closePopupBtn = document.querySelector('.closeBtn');\r\n      closePopupBtn.addEventListener('click', () => {\r\n        popupWindow.classList.add('hide');\r\n        popupWindow.classList.remove('overlay');\r\n      });\r\n\r\n      const submitCommentBtn = document.querySelector('.submitCommentBtn');\r\n      const nameInput = document.querySelector('.nameInput');\r\n      const commentInput = document.querySelector('.textArea');\r\n\r\n      const submitcomment = async () => {\r\n        const nameInputValue = nameInput.value.trim();\r\n        const textAreaValue = commentInput.value.trim();\r\n        if (nameInput.value.trim() !== '' && commentInput.value.trim() !== '') {\r\n          await (0,_modules_commentsApi_js__WEBPACK_IMPORTED_MODULE_2__.postComment)({\r\n            item_id: mealId,\r\n            username: nameInputValue,\r\n            comment: textAreaValue,\r\n          });\r\n          document.querySelector('form').reset();\r\n        }\r\n      };\r\n\r\n      const displayComments = async () => {\r\n        const response = await (0,_modules_commentsApi_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(mealId);\r\n        const totalCommentsNumber = document.querySelector('.commentsTotal');\r\n        const total = _modules_countComments_js__WEBPACK_IMPORTED_MODULE_3___default()(response);\r\n        if (!total) {\r\n          totalCommentsNumber.innerHTML = 0;\r\n        } else {\r\n          totalCommentsNumber.innerHTML = total;\r\n        }\r\n\r\n        const listContainer = document.querySelector('.commentsList');\r\n        listContainer.innerHTML = '';\r\n\r\n        const commentItem = response.map(\r\n          (data) => `\r\n        <li class=\"commentitem\">\r\n        <p class=\"date\">${data.creation_date}: </p>\r\n        <p class=\"username\">${data.username}: </p>\r\n        <p class=\"comment\">${data.comment}</p>\r\n      </li>\r\n        `\r\n        );\r\n        listContainer.innerHTML = commentItem.join('');\r\n      };\r\n\r\n      submitCommentBtn.addEventListener('click', async () => {\r\n        await submitcomment();\r\n        displayComments();\r\n      });\r\n\r\n      displayComments();\r\n    });\r\n  });\r\n\r\n};\r\nconst displayMeals = async () => {\r\n    \r\n  const totalMealsNumber = document.querySelector('.totalMeals');\r\n   const response = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const total = (0,_modules_countMeals_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(response);\r\n  totalMealsNumber.innerHTML = total;\r\n  \r\n};\r\ndisplayMeals();\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  renderMeal();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://khanban-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsApi.js":
/*!************************************!*\
  !*** ./src/modules/commentsApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst postComment = async (commentData) => {\r\n  try {\r\n    const response = await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Et4qFKlhg2AwekIfP1aj/comments',\r\n      {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-Type': 'application/Json',\r\n          charset: 'utf-8',\r\n        },\r\n        body: JSON.stringify(commentData),\r\n      },\r\n    );\r\n\r\n    if (!response.ok) {\r\n      return false;\r\n    }\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n};\r\n\r\nconst getComments = async (mealId) => {\r\n  const getStatus = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Et4qFKlhg2AwekIfP1aj/comments?item_id=${mealId}`,\r\n    {\r\n      method: 'GET',\r\n    },\r\n  );\r\n  const commentResponse = await getStatus.json();\r\n  return commentResponse;\r\n};\r\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/commentsApi.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((module) => {

eval("const totalComments = (commentsArray) => commentsArray.length;\r\n\r\nmodule.exports = totalComments;\r\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/countMeals.js":
/*!***********************************!*\
  !*** ./src/modules/countMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalMeals = (mealsArray) => mealsArray.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalMeals);\r\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/countMeals.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\r\n  try {\r\n    const response = await fetch(\r\n      'https://www.themealdb.com/api/json/v1/1/filter.php?a=American',\r\n    );\r\n    const data = await response.json();\r\n    return data.meals;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n//# sourceURL=webpack://khanban-project/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/likesApi.js":
/*!*********************************!*\
  !*** ./src/modules/likesApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst postLike = async (likeData) => {\r\n  try {\r\n    const response = await fetch(\r\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Et4qFKlhg2AwekIfP1aj/likes',\r\n      {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-Type': 'application/Json',\r\n          charset: 'utf-8',\r\n        },\r\n        body: JSON.stringify(likeData),\r\n      }\r\n    );\r\n\r\n    if (!response.ok) {\r\n      return false;\r\n    }\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    return false;\r\n  }\r\n};\r\n\r\nconst getLikes = async () => {\r\n  const getStatus = await fetch(\r\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Et4qFKlhg2AwekIfP1aj/likes',\r\n    {\r\n      method: 'GET',\r\n    }\r\n  );\r\n  const commentResponse = await getStatus.json();\r\n  const likesArray = Array.isArray(commentResponse) ? commentResponse : [];\r\n  return likesArray;\r\n};\r\n\r\n// export const getLikes = async () => {\r\n//   const getStatus = await fetch(\r\n//     'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Et4qFKlhg2AwekIfP1aj/likes',\r\n//     {\r\n//       method: 'GET',\r\n//     }\r\n//   );\r\n//   const commentResponse = await getStatus.json();\r\n//   return commentResponse;\r\n// };\r\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/likesApi.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
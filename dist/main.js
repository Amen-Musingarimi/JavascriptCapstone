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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  list-style: none;\\n  text-decoration: none;\\n}\\n\\n:root {\\n  --color-white: #fff;\\n  --color-black: #272a31;\\n  --color-medium-blue: #4682b4;\\n  --color-light-blue: #b6d0e2;\\n  --color-dark-blue: #191970;\\n  --color-lightest-blue: #f0ffff;\\n  --color-hover-blue: #6495ed;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-family: 'Poppins', sans-serif;\\n  position: relative;\\n  background-color: var(--color-white);\\n  color: var(--color-dark-blue);\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\na {\\n  cursor: pointer;\\n  color: var(--color-black);\\n}\\n\\n/* -------------------------------Styling the Navigation Bar-------------------------------- */\\nheader {\\n  border-radius: 4px;\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n}\\n\\nnav {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  align-items: center;\\n  background-color: var(--color-lightest-blue);\\n  padding: 1% 2%;\\n  font-weight: 600;\\n}\\n\\nnav a {\\n  color: var(--color-dark-blue);\\n}\\n\\n.logo {\\n  font-size: 22px;\\n}\\n\\n.navLinks {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  font-size: 16px;\\n}\\n\\n.totalMeals {\\n  color: var(--color-medium-blue);\\n  margin-left: 5%;\\n}\\n\\ninput,\\ntextarea {\\n  border: 1px solid var(--color-light-blue);\\n  padding: 1.5%;\\n  width: 60%;\\n  border-radius: 8px;\\n  outline: none;\\n}\\n\\nnav input {\\n  padding: 3%;\\n  width: 200px;\\n}\\n\\nnav button {\\n  padding: 8px 20px;\\n  color: var(--color-white);\\n  background-color: var(--color-medium-blue);\\n  border: none;\\n  border-radius: 8px;\\n  margin-left: 10px;\\n  font-weight: 600;\\n}\\n\\nnav button:hover {\\n  background-color: var(--color-hover-blue);\\n}\\n\\n/* -------------------------------Styling the Home Page-------------------------------- */\\nmain {\\n  padding: 60px 0;\\n}\\n\\n.mealsListContainer {\\n  display: grid;\\n  grid-template-columns: repeat(3, minmax(0, 1fr));\\n  grid-auto-rows: minmax(100px, auto);\\n  grid-gap: 20px;\\n  max-width: 100%;\\n  margin: 0 auto;\\n  padding: 2%;\\n}\\n\\n.mealCard {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 20px;\\n  background-color: var(--color-lightest-blue);\\n  border: 1px solid var(--color-light-blue);\\n  padding: 2%;\\n  border-radius: 8px;\\n}\\n\\n.mealCard img {\\n  width: 100%;\\n  height: 250px;\\n  object-fit: cover;\\n  border-radius: 4px;\\n}\\n\\n.mealDetail {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n}\\n\\n.mealHeading {\\n  font-size: 16px;\\n}\\n\\n.likeBtn {\\n  color: red;\\n  font-size: 16px;\\n}\\n\\n.likesNumber {\\n  font-size: 16px;\\n  font-weight: 500;\\n}\\n\\n.commentBtn {\\n  padding: 2% 3%;\\n  align-self: center;\\n  color: var(--color-white);\\n  font-weight: 600;\\n  background-color: var(--color-medium-blue);\\n  border: none;\\n  border-radius: 8px;\\n  margin-bottom: 10px;\\n}\\n\\n.commentBtn:hover {\\n  background-color: var(--color-hover-blue);\\n  color: var(--color-white);\\n}\\n\\n/* -------------------------------Styling the Popup Window-------------------------------- */\\n.hide {\\n  display: none;\\n}\\n\\n.overlay {\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: var(--color-lightest-blue);\\n  border: 1px solid var(--color-light-blue);\\n  border-radius: 8px;\\n  margin: 2% 10%;\\n  padding: 2%;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  overflow: auto;\\n}\\n\\n.popupCard {\\n  width: 98%;\\n  max-height: 80vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 20px;\\n  padding: 2%;\\n  overflow: auto;\\n}\\n\\n.popupCardImage {\\n  width: 100%;\\n  height: 500px;\\n  object-fit: cover;\\n  border-radius: 8px;\\n  margin-top: 20px;\\n}\\n\\n.mealTitle {\\n  align-self: center;\\n}\\n\\n.commentsHeading {\\n  align-self: flex-start;\\n  margin-bottom: 20px;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 20px;\\n}\\n\\ninput::-webkit-credentials-auto-fill-button {\\n  visibility: hidden;\\n  pointer-events: none;\\n  background-color: var(--color-white);\\n}\\n\\ninput:focus {\\n  outline-style: none;\\n  box-shadow: none !important;\\n}\\n\\ninput:-webkit-autofill,\\ninput:-webkit-autofill:hover,\\ninput:-webkit-autofill:focus,\\ntextarea:-webkit-autofill,\\ntextarea:-webkit-autofill:hover,\\ntextarea:-webkit-autofill:focus,\\nselect:-webkit-autofill,\\nselect:-webkit-autofill:hover,\\nselect:-webkit-autofill:focus {\\n  color: #555 !important;\\n  font-size: inherit !important;\\n  font-family: inherit !important;\\n  line-height: inherit !important;\\n}\\n\\n.submitCommentBtn {\\n  padding: 2% 3%;\\n  align-self: flex-start;\\n  color: var(--color-white);\\n  font-weight: 600;\\n  background-color: var(--color-medium-blue);\\n  border: none;\\n  border-radius: 8px;\\n  margin-bottom: 10px;\\n}\\n\\n.submitCommentBtn:hover {\\n  background-color: var(--color-hover-blue);\\n}\\n\\n/* -------------------------------Styling the Comments Section-------------------------------- */\\n.color {\\n  color: red;\\n}\\n\\n/* -------------------------------Styling the Comments Section-------------------------------- */\\n.commentsCount {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.commentitem {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  gap: 20px;\\n}\\n\\n/* -------------------------------Styling the Search Cards-------------------------------- */\\n\\n.searchedMealContainer {\\n  margin: 2% 10%;\\n  border: 1px solid var(--color-medium-blue);\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 1%;\\n  border-radius: 8px;\\n}\\n\\n.searchedMealCard {\\n  width: 98%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 1%;\\n  box-sizing: border-box;\\n}\\n\\n.searchedImage {\\n  height: 400px;\\n  width: 100%;\\n  border-radius: 8px;\\n  object-fit: cover;\\n  align-self: center;\\n  margin-bottom: 16px;\\n}\\n\\n.searchedMealTitle {\\n  font-size: 26px;\\n  margin-bottom: 6px;\\n}\\n\\n.searchedMealInstructionHeading {\\n  font-size: 20px;\\n  margin-bottom: 8px;\\n}\\n\\n.seaarchedMealInstructions {\\n  font-weight: 500;\\n}\\n\\n.closeButton {\\n  font-size: 20px;\\n  font-weight: 600;\\n  color: var(--color-dark-blue);\\n}\\n\\n/* -------------------------------Styling the Footer-------------------------------- */\\nfooter {\\n  width: 100%;\\n  background-color: var(--color-lightest-blue);\\n  border: 1px solid var(--color-medium-blue);\\n  position: fixed;\\n  bottom: 0;\\n  border-radius: 4px;\\n}\\n\\nfooter p {\\n  margin-left: 2%;\\n  font-weight: 500;\\n}\\n\\nfooter a {\\n  text-decoration: underline;\\n  color: blue;\\n}\\n\\nfooter a:hover {\\n  color: var(--color-dark-blue);\\n}\\n\\n.githubLink {\\n  margin-left: 25%;\\n}\\n\\n.linkedInkLink {\\n  margin-left: 20%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://khanban-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _modules_commentsApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/commentsApi.js */ \"./src/modules/commentsApi.js\");\n/* harmony import */ var _modules_countComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countComments.js */ \"./src/modules/countComments.js\");\n/* harmony import */ var _modules_countComments_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_countComments_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_countMeals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/countMeals.js */ \"./src/modules/countMeals.js\");\n/* harmony import */ var _modules_countMeals_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_countMeals_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likesApi.js */ \"./src/modules/likesApi.js\");\n/* harmony import */ var _modules_searchApi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/searchApi.js */ \"./src/modules/searchApi.js\");\n\n\n\n\n\n\n\n\nconst getNumberOfLikes = (response, likes) => {\n  const mealLikes = new Map();\n\n  response.forEach((meal) => {\n    let num = 0;\n    for (let i = 0; i < likes.length; i += 1) {\n      if (meal.idMeal === likes[i].item_id) {\n        num = likes[i].likes;\n        break;\n      }\n    }\n    mealLikes.set(meal.idMeal, num);\n  });\n  return mealLikes;\n};\n\nconst renderMeal = async () => {\n  const response = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const likes = await (0,_modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\n  const numberOfLikes = getNumberOfLikes(response, likes);\n\n  const mealsListContainer = document.querySelector('.mealsListContainer');\n  mealsListContainer.innerHTML = '';\n\n  const mealItem = response.map(\n    (data) => `\n    <article class=\"mealCard\" id=${data.idMeal}>\n            <img src=${data.strMealThumb} alt=${data.strMeal} />\n            <div class=\"mealDetail\">\n              <h2 class=\"mealHeading\">${data.strMeal}</h2>\n              <a href=\"#\" class=\"likeBtn\">\n                <i class=\"fa-solid fa-heart\"></i>\n              </a>\n              <span class=\"likesNumber\">${numberOfLikes.get(data.idMeal)}</span>\n            </div>\n            <button type=\"button\" class=\"commentBtn seeCommentsBtn\">Comments</button>\n          </article>\n  `,\n  );\n  mealsListContainer.innerHTML = mealItem.join('');\n\n  const displayLikes = async (targetId, likesTotal) => {\n    const likesArray = await (0,_modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\n\n    for (let n = 0; n < likesArray.length; n += 1) {\n      if (likesArray[n].item_id === targetId) {\n        likesTotal.innerHTML = likesArray[n].likes;\n      }\n    }\n  };\n\n  const likeBtns = document.querySelectorAll('.likeBtn');\n  likeBtns.forEach((likeBtn) => {\n    likeBtn.addEventListener('click', async (event) => {\n      event.preventDefault();\n      likeBtn.classList.add('color');\n      const id = event.target.parentNode.parentNode.parentNode.getAttribute('id');\n      await (0,_modules_likesApi_js__WEBPACK_IMPORTED_MODULE_5__.postLike)({\n        item_id: id,\n      });\n      const likesTotal = event.target.parentNode.nextSibling.nextSibling;\n\n      displayLikes(id, likesTotal);\n    });\n  });\n\n  const seeCommentsBtns = document.querySelectorAll('.seeCommentsBtn');\n  const popupWindow = document.querySelector('.popupWindow');\n\n  const scrollUp = () => {\n    document.body.scrollTop = 0;\n    document.documentElement.scrollTop = 0;\n  };\n\n  seeCommentsBtns.forEach((btn) => {\n    btn.addEventListener('click', (e) => {\n      const mealId = e.target.parentNode.getAttribute('id');\n      const mealData = response.find((meal) => meal.idMeal === mealId);\n      popupWindow.classList.remove('hide');\n      popupWindow.classList.add('overlay');\n      scrollUp();\n      popupWindow.innerHTML = `\n        <article class=\"popupCard\" id=\"${mealData.idMeal}\">        \n        <img class=\"popupCardImage\" src=\"${mealData.strMealThumb}\" alt=\"${mealData.strMeal}\" />                \n          <h2 class=\"mealTitle\">${mealData.strMeal}</h2>\n          <h3 class=\"commentsCount\">Total Comments(<p class=\"commentsTotal\"></p>)</h3>\n          <ul class=\"commentsList\">            \n          </ul>       \n            <h3 class=\"commentsHeading\">Add a comment</h3>\n              <form action=\"\">\n                <label for=\"nameInput\">\n                  <input\n                    name=\"nameInput\"\n                    id=\"nameinput\"\n                    class=\"nameInput\"\n                    type=\"text\"\n                    max=\"30\"\n                    placeholder=\"Your Name\"\n                    required\n                  />\n                </label>\n                <label for=\"textArea\">\n                  <textarea\n                    name=\"textArea\"\n                    id=\"textArea\"\n                    class=\"textArea\"\n                    cols=\"30\"\n                    rows=\"10\"\n                    maxlength=\"200\"\n                    placeholder=\"Your Comment\"\n                    required\n                  ></textarea>\n                </label>\n                <button class=\"submitCommentBtn\" type=\"button\">Comment</button>\n              </form>         \n        </article>\n        <a href=\"#\" class=\"closeBtn closeButton\"><i class=\"fa-sharp fa-solid fa-xmark\"></i></a>\n      `;\n\n      const closePopupBtn = document.querySelector('.closeBtn');\n      closePopupBtn.addEventListener('click', () => {\n        popupWindow.classList.add('hide');\n        popupWindow.classList.remove('overlay');\n      });\n\n      const submitCommentBtn = document.querySelector('.submitCommentBtn');\n      const nameInput = document.querySelector('.nameInput');\n      const commentInput = document.querySelector('.textArea');\n\n      const submitcomment = async () => {\n        const nameInputValue = nameInput.value.trim();\n        const textAreaValue = commentInput.value.trim();\n        if (nameInput.value.trim() !== '' && commentInput.value.trim() !== '') {\n          await (0,_modules_commentsApi_js__WEBPACK_IMPORTED_MODULE_2__.postComment)({\n            item_id: mealId,\n            username: nameInputValue,\n            comment: textAreaValue,\n          });\n          document.querySelector('form').reset();\n        }\n      };\n\n      const displayComments = async () => {\n        const response = await (0,_modules_commentsApi_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(mealId);\n        const totalCommentsNumber = document.querySelector('.commentsTotal');\n        const total = _modules_countComments_js__WEBPACK_IMPORTED_MODULE_3___default()(response);\n        if (!total) {\n          totalCommentsNumber.innerHTML = 0;\n        } else {\n          totalCommentsNumber.innerHTML = total;\n        }\n\n        const listContainer = document.querySelector('.commentsList');\n        listContainer.innerHTML = '';\n\n        const commentItem = response.map(\n          (data) => `\n        <li class=\"commentitem\">\n        <p class=\"date\">${data.creation_date}: </p>\n        <p class=\"username\">${data.username}: </p>\n        <p class=\"comment\">${data.comment}</p>\n      </li>\n        `,\n        );\n        listContainer.innerHTML = commentItem.join('');\n      };\n\n      submitCommentBtn.addEventListener('click', async () => {\n        await submitcomment();\n        displayComments();\n      });\n\n      displayComments();\n    });\n  });\n};\nconst displayMeals = async () => {\n  const totalMealsNumber = document.querySelector('.totalMeals');\n  const response = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const total = _modules_countMeals_js__WEBPACK_IMPORTED_MODULE_4___default()(response);\n  totalMealsNumber.innerHTML = total;\n};\ndisplayMeals();\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  renderMeal();\n});\n\n// Implementing the search functionality\nconst searchButton = document.querySelector('.searchButton');\nconst searchInput = document.querySelector('.searchInput');\n\nconst getSearchedMeal = async () => {\n  const mealName = searchInput.value.trim();\n  if (searchInput.value.trim() !== '') {\n    const mealsListContainer = document.querySelector('.mealsListContainer');\n    const searchedMeal = document.querySelector('.searchedMeal');\n    mealsListContainer.classList.add('hide');\n    searchedMeal.classList.remove('hide');\n    searchedMeal.classList.add('searchedMealContainer');\n    const meal = await (0,_modules_searchApi_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mealName);\n    for (let i = 0; i < meal.length; i += 1) {\n      const searchedMealContainer = document.querySelector('.searchedMeal');\n      searchedMealContainer.innerHTML = `\n    <article class=\"searchedMealCard\">\n    <img class=\"searchedImage\" src=${meal[i].strMealThumb} alt=${meal[i].strMeal} />\n    <h3 class=\"searchedMealTitle\">${meal[i].strMeal}</h3>   \n    <div>\n      <h4 class=\"searchedMealInstructionHeading\">Cooking Instructions</h4>\n      <p class=\"seaarchedMealInstructions\">${meal[i].strInstructions}</p>\n    </div>\n  </article>  \n  <a href=\"#\" class=\"closeSearchBtn closeButton\"><i class=\"fa-sharp fa-solid fa-xmark\"></i></a> \n    `;\n    }\n  }\n  const closeSearchBtn = document.querySelector('.closeSearchBtn');\n  const searchedMeal = document.querySelector('.searchedMeal');\n  const mealsListContainer = document.querySelector('.mealsListContainer');\n\n  closeSearchBtn.addEventListener('click', () => {\n    searchedMeal.classList.add('hide');\n    searchedMeal.classList.remove('searchedMealContainer');\n    mealsListContainer.classList.remove('hide');\n  });\n};\n\nsearchButton.addEventListener('click', async () => {\n  await getSearchedMeal();\n  searchInput.value = '';\n});\n\n\n//# sourceURL=webpack://khanban-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsApi.js":
/*!************************************!*\
  !*** ./src/modules/commentsApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst postComment = async (commentData) => {\n  try {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/comments',\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/Json',\n          charset: 'utf-8',\n        },\n        body: JSON.stringify(commentData),\n      },\n    );\n\n    if (!response.ok) {\n      return false;\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return false;\n  }\n};\n\nconst getComments = async (mealId) => {\n  const getStatus = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/comments?item_id=${mealId}`,\n    {\n      method: 'GET',\n    },\n  );\n  const commentResponse = await getStatus.json();\n  return commentResponse;\n};\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/commentsApi.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((module) => {

eval("const totalComments = (commentsArray) => commentsArray.length;\n\nmodule.exports = totalComments;\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/countMeals.js":
/*!***********************************!*\
  !*** ./src/modules/countMeals.js ***!
  \***********************************/
/***/ ((module) => {

eval("const totalMeals = (mealsArray) => mealsArray.length;\n\nmodule.exports = totalMeals;\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/countMeals.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\n  try {\n    const response = await fetch(\n      'https://www.themealdb.com/api/json/v1/1/filter.php?a=American',\n    );\n    const data = await response.json();\n    return data.meals;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n//# sourceURL=webpack://khanban-project/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/likesApi.js":
/*!*********************************!*\
  !*** ./src/modules/likesApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst postLike = async (likeData) => {\n  try {\n    const response = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/likes',\n      {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/Json',\n          charset: 'utf-8',\n        },\n        body: JSON.stringify(likeData),\n      },\n    );\n\n    if (!response.ok) {\n      return false;\n    }\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return false;\n  }\n};\n\nconst getLikes = async () => {\n  const getStatus = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RaLGAkKXSMxB9RCSemBe/likes',\n    {\n      method: 'GET',\n    },\n  );\n  const commentResponse = await getStatus.json();\n  const likesArray = Array.isArray(commentResponse) ? commentResponse : [];\n  return likesArray;\n};\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/likesApi.js?");

/***/ }),

/***/ "./src/modules/searchApi.js":
/*!**********************************!*\
  !*** ./src/modules/searchApi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst searchMeal = async (mealName) => {\n  try {\n    const response = await fetch(\n      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`,\n    );\n    const data = await response.json();\n    return data.meals;\n  } catch (error) {\n    return false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchMeal);\n\n\n//# sourceURL=webpack://khanban-project/./src/modules/searchApi.js?");

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
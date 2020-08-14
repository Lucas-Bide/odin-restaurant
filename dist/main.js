/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_body_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/body.jpg */ \"./src/images/body.jpg\");\n/* harmony import */ var _images_banana_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/banana.jpg */ \"./src/images/banana.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_body_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_banana_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n*, *::before, *::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n\\na, a:hover {\\n  color: black;\\n  text-decoration: none;\\n}\\n\\n#content-tab {\\n  height: calc(100vh - 200px);\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center no-repeat;\\n  background-size: cover;\\n  padding-top: 30px;\\n}\\n\\n#content {\\n  height: 100%;\\n  background: rgba(255, 255, 255, 0.781) content-box;\\n  overflow-y: scroll;\\n  -ms-overflow-style: none;\\n  /* Internet Explorer 10+ */\\n  scrollbar-width: none;\\n  /* Firefox */\\n  font-family: \\\"Source Sans Pro\\\", sans-serif;\\n  font-size: 20px;\\n  color: black;\\n}\\n\\n.gw {\\n  position: relative;\\n  width: 90%;\\n  height: 95%;\\n  margin: 0 auto;\\n}\\n\\n#content::-webkit-scrollbar {\\n  display: none;\\n  /* Chrome Safari */\\n}\\n\\n.title {\\n  font-size: 50px;\\n  padding-bottom: 20px;\\n}\\n\\n.title::after {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 60%;\\n  border-bottom: 5px solid #daab12;\\n  margin: 5px auto;\\n}\\n\\n.subtitle {\\n  font-size: 30px;\\n}\\n\\n.contact-type, .emphasis {\\n  font-size: 20px;\\n}\\n\\n.title, .subtitle, .contact-type, .emphasis {\\n  color: #6b5a24;\\n  font-family: \\\"Gloria Hallelujah\\\", cursive;\\n}\\n\\n.info div {\\n  padding-bottom: 10px;\\n}\\n\\n.page {\\n  padding: 20px;\\n  text-align: center;\\n  height: 100%;\\n}\\n\\n.github {\\n  box-sizing: border-box;\\n  width: 50px;\\n  height: 50px;\\n  position: absolute;\\n  z-index: 20;\\n  bottom: -18px;\\n  right: -18px;\\n  background-color: red;\\n  border-radius: 50%;\\n  font-family: \\\"Gloria Hallelujah\\\", cursive;\\n  font-size: 15px;\\n  text-align: center;\\n  color: white;\\n  padding-top: 15px;\\n}\\n\\n@media (max-width: 899.99px) {\\n  #content-tab {\\n    height: calc(100vh - 150px);\\n    background-position: 80%;\\n  }\\n}\\n@media (max-width: 559.99px) {\\n  #content-tab {\\n    height: calc(100vh - 80px);\\n  }\\n\\n  .contact-type {\\n    display: block;\\n    padding-bottom: 5px;\\n  }\\n}\\n/* Header Styling */\\n#navigation {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center center no-repeat;\\n  background-size: cover;\\n  height: 200px;\\n  padding-top: 40px;\\n  text-align: center;\\n  position: relative;\\n  font-family: \\\"Gloria Hallelujah\\\", cursive;\\n}\\n\\n.brand-title {\\n  font-size: 60px;\\n  font-weight: bold;\\n}\\n\\n.nav {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.nav-item {\\n  background-color: #daab12;\\n  border: 4px solid #fbd24f;\\n  border-right: none;\\n  padding: 10px 30px;\\n  font-size: 30px;\\n  transition: background 0.5s;\\n}\\n\\n.nav-item:hover {\\n  background: #fbd24f;\\n}\\n\\n#nav-exit:hover {\\n  background: none;\\n}\\n\\n.current-tab {\\n  background: #fbd24f;\\n}\\n\\n.current-tab a, .current-tab a:hover, #nav-exit a:hover {\\n  color: #1f1a0a !important;\\n}\\n\\n.nav-item a, .nav-item a:hover {\\n  color: #6b5a24;\\n  transition: color 0.5s;\\n}\\n\\n.nav-item:nth-child(2) {\\n  border-top-left-radius: 50px;\\n}\\n\\n.nav-item:last-child {\\n  border-top-right-radius: 50px;\\n  border-right: 4px solid #fbd24f;\\n}\\n\\n#menu-bar, #nav-exit {\\n  display: none;\\n}\\n\\n.menu-bar, .brand-title {\\n  text-shadow: white 0 0 8px;\\n}\\n\\n@media (max-width: 899.99px) {\\n  #navigation {\\n    padding-top: 30px;\\n    height: 150px;\\n  }\\n\\n  .brand-title {\\n    font-size: 30px;\\n  }\\n\\n  .nav-item {\\n    padding: 10px 15px;\\n    font-size: 25px;\\n  }\\n}\\n@media (max-width: 559.99px) {\\n  #navigation {\\n    padding-top: 0;\\n    height: 80px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n\\n  .brand-title {\\n    font-size: 25px;\\n    border: 7px solid black;\\n    padding: 5px;\\n  }\\n\\n  .nav {\\n    display: none;\\n    position: fixed;\\n    right: 0;\\n    width: 50vw;\\n    height: 100vh;\\n    padding: 40px 0;\\n    background: #daab12;\\n    flex-direction: column;\\n    justify-content: stretch;\\n  }\\n\\n  .nav-item {\\n    border: none !important;\\n    border-radius: 0 !important;\\n    padding: 30px 0;\\n  }\\n\\n  #nav-exit {\\n    align-self: flex-end;\\n    margin-right: 40px;\\n  }\\n\\n  #menu-bar {\\n    display: block;\\n    font-size: 30px;\\n    font-weight: bold;\\n    margin: 0 5px;\\n  }\\n}\\n@media (min-width: 600px) {\\n  .nav {\\n    display: flex !important;\\n    animation: none !important;\\n  }\\n\\n  #nav-exit {\\n    display: none !important;\\n  }\\n\\n  .nav-item:nth-child(2) {\\n    padding-left: 20px;\\n  }\\n\\n  .nav-item:last-child {\\n    padding-right: 20px;\\n  }\\n}\\n@keyframes menu-slide-in {\\n  0% {\\n    right: -50vw;\\n  }\\n  100% {\\n    right: 0;\\n  }\\n}\\n@keyframes menu-slide-out {\\n  0% {\\n    right: 0;\\n  }\\n  100% {\\n    right: -50vw;\\n  }\\n}\\n.home-pic {\\n  float: left;\\n  margin-right: 20px;\\n  margin-bottom: 20px;\\n}\\n\\n.home-banana {\\n  margin-top: 20px;\\n  width: 75%;\\n  max-width: 800px;\\n}\\n\\n@media (max-width: 512px) {\\n  .home-pic {\\n    float: none;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n#page-home p {\\n  max-width: 1000px;\\n  margin: auto;\\n}\\n\\n.menu-nav {\\n  display: flex;\\n  box-shadow: inset 15px 0 10px -10px, inset -15px 0 10px -10px;\\n  overflow-x: scroll;\\n  -ms-overflow-style: none;\\n  /* Internet Explorer 10+ */\\n  scrollbar-width: none;\\n  /* Firefox */\\n}\\n\\n.menu-nav::-webkit-scrollbar {\\n  display: none;\\n  /* Chrome Safari */\\n}\\n\\n.menu-nav-tab {\\n  flex: 1;\\n  font-weight: bold;\\n  background-color: rgba(204, 204, 204, 0.781);\\n  padding: 20px;\\n  border-left: 1px solid rgba(153, 153, 153, 0.781);\\n}\\n\\n.menu-nav-tab:first-child {\\n  border-left-width: 4px;\\n}\\n\\n.menu-nav-tab:last-child {\\n  border-right: 4px solid rgba(153, 153, 153, 0.781);\\n}\\n\\n.menu-nav-tab:hover, .current-menu-tab {\\n  background: none;\\n}\\n\\n.current-menu-tab .menu-nav-tab-link {\\n  color: #6b5a24;\\n  text-decoration: underline #daab12;\\n}\\n\\n.menu-content {\\n  height: calc(100% - 80px);\\n  overflow-y: scroll;\\n  overflow-x: hidden;\\n  margin-top: 20px;\\n}\\n\\n.menu-nav, .menu-content {\\n  -ms-overflow-style: none;\\n  /* Internet Explorer 10+ */\\n  scrollbar-width: none;\\n  /* Firefox */\\n}\\n\\n.menu-nav::-webkit-scrollbar, .menu-content::-webkit-scrollbar {\\n  display: none;\\n  /* Chrome Safari */\\n}\\n\\n.tester {\\n  background-color: yellow;\\n  width: 80%;\\n  max-width: 800px;\\n  height: 400px;\\n  margin: 20px auto;\\n}\\n\\n.menu-page {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 50px;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#menu-drinks {\\n  display: block;\\n}\\n\\n.menu-item {\\n  min-width: 250px;\\n  max-width: 430px;\\n  width: 80%;\\n}\\n\\n.menu-item-pic {\\n  height: 286.233px;\\n  width: 430px;\\n}\\n\\n@media (max-width: 660px) {\\n  .menu-item-pic {\\n    height: 199.697px;\\n    width: 300px;\\n  }\\n}\\n@media (max-width: 460px) {\\n  .menu-item-pic {\\n    height: 166.415px;\\n    width: 250px;\\n  }\\n}\\n/*\\n\\n.menu-item> text align right\\n.menu-item-pic> width: 80% max-width: 500px; margin: Xpx auto\\n.title > span.subtitle (name & price)\\np > description\\n\\n</menu-item\\n\\n*/\", \"\",{\"version\":3,\"sources\":[\"index.scss\"],\"names\":[],\"mappings\":\"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\",\"file\":\"index.scss\",\"sourcesContent\":[\"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n*, *::before, *::after {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n\\na, a:hover {\\n  color: black;\\n  text-decoration: none;\\n}\\n\\n#content-tab {\\n  height: calc(100vh - 200px);\\n  background: url(\\\"../images/body.jpg\\\") center no-repeat;\\n  background-size: cover;\\n  padding-top: 30px;\\n}\\n\\n#content {\\n  height: 100%;\\n  background: rgba(255, 255, 255, 0.781) content-box;\\n  overflow-y: scroll;\\n  -ms-overflow-style: none;\\n  /* Internet Explorer 10+ */\\n  scrollbar-width: none;\\n  /* Firefox */\\n  font-family: \\\"Source Sans Pro\\\", sans-serif;\\n  font-size: 20px;\\n  color: black;\\n}\\n\\n.gw {\\n  position: relative;\\n  width: 90%;\\n  height: 95%;\\n  margin: 0 auto;\\n}\\n\\n#content::-webkit-scrollbar {\\n  display: none;\\n  /* Chrome Safari */\\n}\\n\\n.title {\\n  font-size: 50px;\\n  padding-bottom: 20px;\\n}\\n\\n.title::after {\\n  content: \\\"\\\";\\n  display: block;\\n  width: 60%;\\n  border-bottom: 5px solid #daab12;\\n  margin: 5px auto;\\n}\\n\\n.subtitle {\\n  font-size: 30px;\\n}\\n\\n.contact-type, .emphasis {\\n  font-size: 20px;\\n}\\n\\n.title, .subtitle, .contact-type, .emphasis {\\n  color: #6b5a24;\\n  font-family: \\\"Gloria Hallelujah\\\", cursive;\\n}\\n\\n.info div {\\n  padding-bottom: 10px;\\n}\\n\\n.page {\\n  padding: 20px;\\n  text-align: center;\\n  height: 100%;\\n}\\n\\n.github {\\n  box-sizing: border-box;\\n  width: 50px;\\n  height: 50px;\\n  position: absolute;\\n  z-index: 20;\\n  bottom: -18px;\\n  right: -18px;\\n  background-color: red;\\n  border-radius: 50%;\\n  font-family: \\\"Gloria Hallelujah\\\", cursive;\\n  font-size: 15px;\\n  text-align: center;\\n  color: white;\\n  padding-top: 15px;\\n}\\n\\n@media (max-width: 899.99px) {\\n  #content-tab {\\n    height: calc(100vh - 150px);\\n    background-position: 80%;\\n  }\\n}\\n@media (max-width: 559.99px) {\\n  #content-tab {\\n    height: calc(100vh - 80px);\\n  }\\n\\n  .contact-type {\\n    display: block;\\n    padding-bottom: 5px;\\n  }\\n}\\n/* Header Styling */\\n#navigation {\\n  background: url(\\\"../images/banana.jpg\\\") center center no-repeat;\\n  background-size: cover;\\n  height: 200px;\\n  padding-top: 40px;\\n  text-align: center;\\n  position: relative;\\n  font-family: \\\"Gloria Hallelujah\\\", cursive;\\n}\\n\\n.brand-title {\\n  font-size: 60px;\\n  font-weight: bold;\\n}\\n\\n.nav {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.nav-item {\\n  background-color: #daab12;\\n  border: 4px solid #fbd24f;\\n  border-right: none;\\n  padding: 10px 30px;\\n  font-size: 30px;\\n  transition: background 0.5s;\\n}\\n\\n.nav-item:hover {\\n  background: #fbd24f;\\n}\\n\\n#nav-exit:hover {\\n  background: none;\\n}\\n\\n.current-tab {\\n  background: #fbd24f;\\n}\\n\\n.current-tab a, .current-tab a:hover, #nav-exit a:hover {\\n  color: #1f1a0a !important;\\n}\\n\\n.nav-item a, .nav-item a:hover {\\n  color: #6b5a24;\\n  transition: color 0.5s;\\n}\\n\\n.nav-item:nth-child(2) {\\n  border-top-left-radius: 50px;\\n}\\n\\n.nav-item:last-child {\\n  border-top-right-radius: 50px;\\n  border-right: 4px solid #fbd24f;\\n}\\n\\n#menu-bar, #nav-exit {\\n  display: none;\\n}\\n\\n.menu-bar, .brand-title {\\n  text-shadow: white 0 0 8px;\\n}\\n\\n@media (max-width: 899.99px) {\\n  #navigation {\\n    padding-top: 30px;\\n    height: 150px;\\n  }\\n\\n  .brand-title {\\n    font-size: 30px;\\n  }\\n\\n  .nav-item {\\n    padding: 10px 15px;\\n    font-size: 25px;\\n  }\\n}\\n@media (max-width: 559.99px) {\\n  #navigation {\\n    padding-top: 0;\\n    height: 80px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n  }\\n\\n  .brand-title {\\n    font-size: 25px;\\n    border: 7px solid black;\\n    padding: 5px;\\n  }\\n\\n  .nav {\\n    display: none;\\n    position: fixed;\\n    right: 0;\\n    width: 50vw;\\n    height: 100vh;\\n    padding: 40px 0;\\n    background: #daab12;\\n    flex-direction: column;\\n    justify-content: stretch;\\n  }\\n\\n  .nav-item {\\n    border: none !important;\\n    border-radius: 0 !important;\\n    padding: 30px 0;\\n  }\\n\\n  #nav-exit {\\n    align-self: flex-end;\\n    margin-right: 40px;\\n  }\\n\\n  #menu-bar {\\n    display: block;\\n    font-size: 30px;\\n    font-weight: bold;\\n    margin: 0 5px;\\n  }\\n}\\n@media (min-width: 600px) {\\n  .nav {\\n    display: flex !important;\\n    animation: none !important;\\n  }\\n\\n  #nav-exit {\\n    display: none !important;\\n  }\\n\\n  .nav-item:nth-child(2) {\\n    padding-left: 20px;\\n  }\\n\\n  .nav-item:last-child {\\n    padding-right: 20px;\\n  }\\n}\\n@keyframes menu-slide-in {\\n  0% {\\n    right: -50vw;\\n  }\\n  100% {\\n    right: 0;\\n  }\\n}\\n@keyframes menu-slide-out {\\n  0% {\\n    right: 0;\\n  }\\n  100% {\\n    right: -50vw;\\n  }\\n}\\n.home-pic {\\n  float: left;\\n  margin-right: 20px;\\n  margin-bottom: 20px;\\n}\\n\\n.home-banana {\\n  margin-top: 20px;\\n  width: 75%;\\n  max-width: 800px;\\n}\\n\\n@media (max-width: 512px) {\\n  .home-pic {\\n    float: none;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n}\\n#page-home p {\\n  max-width: 1000px;\\n  margin: auto;\\n}\\n\\n.menu-nav {\\n  display: flex;\\n  box-shadow: inset 15px 0 10px -10px, inset -15px 0 10px -10px;\\n  overflow-x: scroll;\\n  -ms-overflow-style: none;\\n  /* Internet Explorer 10+ */\\n  scrollbar-width: none;\\n  /* Firefox */\\n}\\n\\n.menu-nav::-webkit-scrollbar {\\n  display: none;\\n  /* Chrome Safari */\\n}\\n\\n.menu-nav-tab {\\n  flex: 1;\\n  font-weight: bold;\\n  background-color: rgba(204, 204, 204, 0.781);\\n  padding: 20px;\\n  border-left: 1px solid rgba(153, 153, 153, 0.781);\\n}\\n\\n.menu-nav-tab:first-child {\\n  border-left-width: 4px;\\n}\\n\\n.menu-nav-tab:last-child {\\n  border-right: 4px solid rgba(153, 153, 153, 0.781);\\n}\\n\\n.menu-nav-tab:hover, .current-menu-tab {\\n  background: none;\\n}\\n\\n.current-menu-tab .menu-nav-tab-link {\\n  color: #6b5a24;\\n  text-decoration: underline #daab12;\\n}\\n\\n.menu-content {\\n  height: calc(100% - 80px);\\n  overflow-y: scroll;\\n  overflow-x: hidden;\\n  margin-top: 20px;\\n}\\n\\n.menu-nav, .menu-content {\\n  -ms-overflow-style: none;\\n  /* Internet Explorer 10+ */\\n  scrollbar-width: none;\\n  /* Firefox */\\n}\\n\\n.menu-nav::-webkit-scrollbar, .menu-content::-webkit-scrollbar {\\n  display: none;\\n  /* Chrome Safari */\\n}\\n\\n.tester {\\n  background-color: yellow;\\n  width: 80%;\\n  max-width: 800px;\\n  height: 400px;\\n  margin: 20px auto;\\n}\\n\\n.menu-page {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 50px;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#menu-drinks {\\n  display: block;\\n}\\n\\n.menu-item {\\n  min-width: 250px;\\n  max-width: 430px;\\n  width: 80%;\\n}\\n\\n.menu-item-pic {\\n  height: 286.233px;\\n  width: 430px;\\n}\\n\\n@media (max-width: 660px) {\\n  .menu-item-pic {\\n    height: 199.697px;\\n    width: 300px;\\n  }\\n}\\n@media (max-width: 460px) {\\n  .menu-item-pic {\\n    height: 166.415px;\\n    width: 250px;\\n  }\\n}\\n/*\\n\\n.menu-item> text align right\\n.menu-item-pic> width: 80% max-width: 500px; margin: Xpx auto\\n.title > span.subtitle (name & price)\\np > description\\n\\n</menu-item\\n\\n*/\"]}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/index.scss?./node_modules/css-loader/dist/cjs.js??ref--4-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/images/appetizer-1.jpg":
/*!************************************!*\
  !*** ./src/images/appetizer-1.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/a054cff29ae409ba3f13755d68e1ca01.jpg\");\n\n//# sourceURL=webpack:///./src/images/appetizer-1.jpg?");

/***/ }),

/***/ "./src/images/appetizer-2.jpg":
/*!************************************!*\
  !*** ./src/images/appetizer-2.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/858857e92949836ca73b8af9e5b3f8f3.jpg\");\n\n//# sourceURL=webpack:///./src/images/appetizer-2.jpg?");

/***/ }),

/***/ "./src/images/appetizer-3.jpg":
/*!************************************!*\
  !*** ./src/images/appetizer-3.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/26ca745d05f5a5b0a351a54c9fecff9c.jpg\");\n\n//# sourceURL=webpack:///./src/images/appetizer-3.jpg?");

/***/ }),

/***/ "./src/images/banana.jpg":
/*!*******************************!*\
  !*** ./src/images/banana.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/f27d32d0905a23e3e466140d76fb0cd1.jpg\");\n\n//# sourceURL=webpack:///./src/images/banana.jpg?");

/***/ }),

/***/ "./src/images/banana.png":
/*!*******************************!*\
  !*** ./src/images/banana.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/888ad9c873465d04c117e61fc2514c5a.png\");\n\n//# sourceURL=webpack:///./src/images/banana.png?");

/***/ }),

/***/ "./src/images/body.jpg":
/*!*****************************!*\
  !*** ./src/images/body.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/214a19dad6fe2869eae8dd43ff88133e.jpg\");\n\n//# sourceURL=webpack:///./src/images/body.jpg?");

/***/ }),

/***/ "./src/images/dessert-1.jpg":
/*!**********************************!*\
  !*** ./src/images/dessert-1.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/e6f7fcf942877324e03140f9a1596d70.jpg\");\n\n//# sourceURL=webpack:///./src/images/dessert-1.jpg?");

/***/ }),

/***/ "./src/images/dessert-2.jpg":
/*!**********************************!*\
  !*** ./src/images/dessert-2.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/8e72e342b8565c8f04548ed02385dab3.jpg\");\n\n//# sourceURL=webpack:///./src/images/dessert-2.jpg?");

/***/ }),

/***/ "./src/images/dessert-3.jpg":
/*!**********************************!*\
  !*** ./src/images/dessert-3.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/9d47e3ab0c75e72b88d656a9c0e988ec.jpg\");\n\n//# sourceURL=webpack:///./src/images/dessert-3.jpg?");

/***/ }),

/***/ "./src/images/entree-1.jpg":
/*!*********************************!*\
  !*** ./src/images/entree-1.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/fdc106f4578afaa526effdc4db075b88.jpg\");\n\n//# sourceURL=webpack:///./src/images/entree-1.jpg?");

/***/ }),

/***/ "./src/images/entree-2.jpg":
/*!*********************************!*\
  !*** ./src/images/entree-2.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/870568a962449dd7cd321da724335b1d.jpg\");\n\n//# sourceURL=webpack:///./src/images/entree-2.jpg?");

/***/ }),

/***/ "./src/images/entree-3.jpg":
/*!*********************************!*\
  !*** ./src/images/entree-3.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/14bc5d255254cbe1d446cff6f48ffc21.jpg\");\n\n//# sourceURL=webpack:///./src/images/entree-3.jpg?");

/***/ }),

/***/ "./src/images/salad-1.jpg":
/*!********************************!*\
  !*** ./src/images/salad-1.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/058ddde4119e59fe4960dce9dcca90f8.jpg\");\n\n//# sourceURL=webpack:///./src/images/salad-1.jpg?");

/***/ }),

/***/ "./src/images/salad-2.jpg":
/*!********************************!*\
  !*** ./src/images/salad-2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/68ae585909a2b353d914da791e717070.jpg\");\n\n//# sourceURL=webpack:///./src/images/salad-2.jpg?");

/***/ }),

/***/ "./src/images/salad-3.jpg":
/*!********************************!*\
  !*** ./src/images/salad-3.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/95c2deef35a064129d51d29d46ad3144.jpg\");\n\n//# sourceURL=webpack:///./src/images/salad-3.jpg?");

/***/ }),

/***/ "./src/images/soup-1.jpg":
/*!*******************************!*\
  !*** ./src/images/soup-1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/4546aec7be7928b076a987248ad325b4.jpg\");\n\n//# sourceURL=webpack:///./src/images/soup-1.jpg?");

/***/ }),

/***/ "./src/images/soup-2.jpg":
/*!*******************************!*\
  !*** ./src/images/soup-2.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/be380d2496ff3220605a967f696b7f8e.jpg\");\n\n//# sourceURL=webpack:///./src/images/soup-2.jpg?");

/***/ }),

/***/ "./src/images/soup-3.jpg":
/*!*******************************!*\
  !*** ./src/images/soup-3.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/4d0f5616e672e8f1d12ad97f8c60a76f.jpg\");\n\n//# sourceURL=webpack:///./src/images/soup-3.jpg?");

/***/ }),

/***/ "./src/images/storefront.jpg":
/*!***********************************!*\
  !*** ./src/images/storefront.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/f14924105b2eb0e1af16adf11df04d28.jpg\");\n\n//# sourceURL=webpack:///./src/images/storefront.jpg?");

/***/ }),

/***/ "./src/scripts/about.js":
/*!******************************!*\
  !*** ./src/scripts/about.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return aboutPage; });\nlet aboutPage = document.createElement('section');\naboutPage.classList.add('page');\naboutPage.id = 'page-about';\n\nlet title = document.createElement('h1');\ntitle.classList.add('title');\ntitle.textContent = 'About Us'\naboutPage.appendChild(title);\n\nlet about = document.createElement('p');\nabout.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illum, facere enim quidem perspiciatis saepe tempora ratione, fugiat dicta, aspernatur dolores! Magnam odit labore atque veniam ipsa nisi voluptatibus eos vel corrupti fugiat tempora, architecto velit cumque qui quis hic rem officia ducimus totam, dignissimos itaque! Beatae ex, aliquid expedita, animi quisquam doloremque optio qui doloribus blanditiis accusamus, neque magni distinctio? Fugit quis sed eum, odit quam iste debitis, ratione accusamus necessitatibus velit facere nam delectus fugiat? Illo ipsam accusamus reiciendis eos animi voluptatum natus minus id culpa impedit incidunt nihil cumque, corporis modi consectetur, atque aperiam dolorem commodi dignissimos.';\naboutPage.appendChild(about);\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/about.js?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return contactPage; });\n// {/* <h1 class=\"title\">Contact us</h1>\n// <div class=\"info\">\n//   <div><span class=\"contact-type\">Phone: </span>753 321 9982</div>\n//   <div><span class=\"contact-type\">Email: </span>contactus@pickledbanana.com</div>\n//   <div><span class=\"contact-type\">Address: </span>423 Spring Turnover, ZX, USA</div>\n// </div> */}\n\nlet contactPage = document.createElement('section');\ncontactPage.classList.add('page');\ncontactPage.id = 'page-contact';\n\nlet title = document.createElement('h1');\ntitle.classList.add('title');\ntitle.textContent = 'Contact Us'\ncontactPage.appendChild(title);\n\nlet info = document.createElement('div');\ninfo.classList.add('info');\ncontactPage.appendChild(info);\n\nlet ct = ['Phone: ', 'Email: ', 'Address: '];\nlet cd = ['753 321 9982', 'contactus@bombinbanana.com', '423 Spring Turnover, ZX, USA'];\n\nfor (let i = 0; i < 3; i++) {\n  let contactContainer = document.createElement('div');\n  let contact = document.createElement('span');\n  contact.classList.add('contact-type');\n  contact.textContent = ct[i];\n  contactContainer.appendChild(contact);\n  contactContainer.appendChild(document.createTextNode(cd[i]));\n  info.appendChild(contactContainer);\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/homepage.js":
/*!*********************************!*\
  !*** ./src/scripts/homepage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return homepage; });\n/* harmony import */ var _images_storefront_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/storefront.jpg */ \"./src/images/storefront.jpg\");\n/* harmony import */ var _images_banana_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/banana.png */ \"./src/images/banana.png\");\n\n\n\n\nlet homepage = document.createElement('section');\nhomepage.classList.add('page');\nhomepage.id = 'page-home';\n\nlet title = document.createElement('h1');\ntitle.classList.add('title');\ntitle.textContent = 'Welcome to the Bombin\\' Banana!';\nhomepage.appendChild(title);\n\nlet storefront = new Image(300);\nstorefront.src = _images_storefront_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nstorefront.classList.add('home-pic');\nhomepage.appendChild(storefront);\n\nlet about = document.createElement('p');\nabout.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio illum, facere enim quidem perspiciatis saepe tempora ratione, fugiat dicta, aspernatur dolores! Magnam odit labore atque veniam ipsa nisi voluptatibus eos vel corrupti fugiat tempora, architecto velit cumque qui quis hic rem officia ducimus totam, dignissimos itaque! Beatae ex, aliquid expedita, animi quisquam doloremque optio qui doloribus blanditiis accusamus, neque magni distinctio? Fugit quis sed eum, odit quam iste debitis, ratione accusamus necessitatibus velit facere nam delectus fugiat? Illo ipsam accusamus reiciendis eos animi voluptatum natus minus id culpa impedit incidunt nihil cumque, corporis modi consectetur, atque aperiam dolorem commodi dignissimos.';\nhomepage.appendChild(about);\n\nlet b = new Image();\nb.src = _images_banana_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nb.classList.add('home-banana');\nhomepage.appendChild(b);\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/homepage.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pageSetup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageSetup.js */ \"./src/scripts/pageSetup.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menuPage; });\n/* harmony import */ var _images_appetizer_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/appetizer-1.jpg */ \"./src/images/appetizer-1.jpg\");\n/* harmony import */ var _images_appetizer_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/appetizer-2.jpg */ \"./src/images/appetizer-2.jpg\");\n/* harmony import */ var _images_appetizer_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/appetizer-3.jpg */ \"./src/images/appetizer-3.jpg\");\n/* harmony import */ var _images_entree_1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/entree-1.jpg */ \"./src/images/entree-1.jpg\");\n/* harmony import */ var _images_entree_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/entree-2.jpg */ \"./src/images/entree-2.jpg\");\n/* harmony import */ var _images_entree_3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/entree-3.jpg */ \"./src/images/entree-3.jpg\");\n/* harmony import */ var _images_soup_1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/soup-1.jpg */ \"./src/images/soup-1.jpg\");\n/* harmony import */ var _images_soup_2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/soup-2.jpg */ \"./src/images/soup-2.jpg\");\n/* harmony import */ var _images_soup_3_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/soup-3.jpg */ \"./src/images/soup-3.jpg\");\n/* harmony import */ var _images_salad_1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/salad-1.jpg */ \"./src/images/salad-1.jpg\");\n/* harmony import */ var _images_salad_2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/salad-2.jpg */ \"./src/images/salad-2.jpg\");\n/* harmony import */ var _images_salad_3_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/salad-3.jpg */ \"./src/images/salad-3.jpg\");\n/* harmony import */ var _images_dessert_1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/dessert-1.jpg */ \"./src/images/dessert-1.jpg\");\n/* harmony import */ var _images_dessert_2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/dessert-2.jpg */ \"./src/images/dessert-2.jpg\");\n/* harmony import */ var _images_dessert_3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/dessert-3.jpg */ \"./src/images/dessert-3.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet menuPage = document.createElement('section');\nmenuPage.classList.add('page');\nmenuPage.id = 'page-menu';\n\nlet menuTabs = document.createElement('nav');\nmenuTabs.classList.add('menu-nav');\nmenuPage.appendChild(menuTabs);\n\nlet tc = ['Appetizers', 'Entrees', 'Soups', 'Salads', 'Desserts', 'Drinks'];\nfor (let i = 0; i < 6; i++) {\n  let tab = document.createElement('div');\n  tab.classList.add('menu-nav-tab');\n\n  if (i == 0) {\n    tab.classList.add('current-menu-tab');\n  }\n  \n  tab.addEventListener('click', () => {\n    let tabs = document.querySelectorAll('.menu-nav-tab');\n    for (let tab of tabs) {\n      tab.classList.remove('current-menu-tab');\n    }\n    tab.classList.add('current-menu-tab');\n\n    // Replace content\n    let page = document.querySelector('.menu-page');\n    let current = document.querySelector('.current-menu-tab');\n    let nextPage;\n    switch (current.textContent) {\n      case 'Appetizers':\n        nextPage =  appetizer;\n        break;\n      case 'Entrees':\n        nextPage =  entree;\n        break;\n      case 'Soups':\n        nextPage = soup;\n        break;\n      case 'Salads':\n        nextPage = salad;\n        break;\n      case 'Desserts':\n        nextPage = dessert;\n        break;\n      case 'Drinks': \n        nextPage = drinks;\n        break;\n    }\n\n    if (page.id != nextPage.id) {\n      menuContent.removeChild(page);\n      menuContent.appendChild(nextPage);\n    }\n  });\n\n  let tabLink = document.createElement('a');\n  tabLink.classList.add('menu-nav-tab-link');\n  tabLink.setAttribute('href', '#');\n  tabLink.textContent = tc[i];\n  tab.appendChild(tabLink);\n\n  menuTabs.appendChild(tab);\n}\n/// Need to append appetizers\nlet menuContent = document.createElement('div');\nmenuContent.classList.add('menu-content');\n// menuContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, omnis molestias aut illo dignissimos eligendi reprehenderit similique cumque dolor exercitationem perspiciatis, quia sapiente temporibus. Inventore earum natus dolores omnis nostrum, perspiciatis aliquid. Placeat et dignissimos commodi amet labore magni vel consequatur, eaque laudantium ipsum exercitationem, facilis repudiandae debitis quae repellat sint! Excepturi consequuntur fugit magnam provident, repudiandae corporis, totam maiores ea deleniti reiciendis itaque officia architecto aut repellendus est iusto non, nesciunt aspernatur! Itaque nisi qui similique fugit ad ex odit dolores! Perspiciatis quas molestiae unde molestias dolor corrupti alias, ad vel optio nostrum voluptates animi deleniti adipisci quaerat labore reiciendis sed a, qui, aspernatur veritatis? Voluptate laborum, quibusdam doloribus harum voluptatum provident. Officia quaerat autem ad sapiente tempora nam minus, unde hic quod maiores reprehenderit recusandae, harum repellendus ab, eum perferendis tempore. Cumque vitae, accusantium voluptatem dicta facilis aperiam assumenda ex doloremque odio nisi rerum natus eaque ipsa cupiditate iusto voluptatum nemo voluptatibus autem excepturi blanditiis tempore! Recusandae veritatis provident vitae aliquam. Sint repudiandae facere nostrum, libero cupiditate earum quia quas quae, accusamus tempora exercitationem magnam sunt quos! Laborum deserunt eligendi atque! Dignissimos minus magni aliquam iste temporibus, iure beatae vel perferendis libero? Aperiam quam blanditiis perspiciatis quidem quae?';\nmenuPage.appendChild(menuContent);\n\n\n// // Delete\n// let tester = document.createElement('div');\n// tester.classList.add('tester');\n// menuContent.appendChild(tester);\n\nlet appetizer = menuCategory('appetizer', _images_appetizer_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _images_appetizer_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _images_appetizer_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nlet entree = menuCategory('entree', _images_entree_1_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _images_entree_2_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _images_entree_3_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nlet soup = menuCategory('soup', _images_soup_1_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _images_soup_2_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _images_soup_3_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nlet salad = menuCategory('salad', _images_salad_1_jpg__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _images_salad_2_jpg__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _images_salad_3_jpg__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\nlet dessert = menuCategory('dessert', _images_dessert_1_jpg__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _images_dessert_2_jpg__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _images_dessert_3_jpg__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\nlet drinks = menuCategory('drinks');\n\n\nmenuContent.appendChild(appetizer);\n\n\n\nfunction menuItem(picHref) {\n  let item = document.createElement('div');\n  item.classList.add('menu-item');\n\n  let pic = new Image();//document.createElement('div');//img');\n  pic.src = picHref;\n  pic.classList.add('menu-item-pic');\n  // pic.setAttribute('src', picHref);\n  // pic.setAttribute('alt', 'A menu Item');\n\n  let title = document.createElement('h1');\n  title.classList.add('subtitle');\n  title.textContent = 'Lorem Dorem - ';\n\n  let price = document.createElement('span');\n  price.classList.add('emphasis');\n  price.textContent = `$${Math.floor(Math.random() * 20) + 1}.00`;\n  title.appendChild(price);\n\n  let desc = document.createElement('p');\n  desc.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, facere incidunt!';\n\n  item.appendChild(pic);\n  item.appendChild(title);\n  item.appendChild(desc);\n  \n  return item;\n}\n\nfunction menuCategory(id, ...pics) {\n  let cat = document.createElement('div');\n  cat.classList.add('menu-page');\n  cat.id = `menu-${id}`;\n\n  if (id != 'drinks') {\n    for (let pic of pics) {\n      cat.appendChild(menuItem(pic));\n    }\n  }\n  else {\n    // Some paragraphs with nonalcoholic, alcoholic, smoothie, etc.\n    let types = ['Nonalcoholic', 'Alcoholic', 'Hot'];\n    let drinks = [['Soda', 'Water', 'Smoothie'], ['Wine', 'Beer', 'Whiskey', 'Mimosa'], ['Coffee', 'Milk', 'Tea']];\n    for (let i = 0; i < 3; i++) {\n      let type = document.createElement('h1');\n      type.classList.add('subtitle');\n      type.textContent = types[i];\n      cat.appendChild(type);\n\n      for (let drink of drinks[i]) {\n        let d = document.createElement('p');\n        d.textContent = drink;\n        cat.appendChild(d);\n      }\n    }\n  }\n  return cat;\n}\n\n//# sourceURL=webpack:///./src/scripts/menu.js?");

/***/ }),

/***/ "./src/scripts/pageSetup.js":
/*!**********************************!*\
  !*** ./src/scripts/pageSetup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return structure; });\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/scripts/contact.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/scripts/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/scripts/menu.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage.js */ \"./src/scripts/homepage.js\");\n\n\n\n\n\nlet structure = document.querySelector('#structure');\n\n// HEADER\nlet header = document.createElement('header');\nheader.id = 'navigation';\nlet headerTitle = document.createElement('h1');\nheaderTitle.classList.add('brand-title');\nheaderTitle.textContent = 'The Bombin\\' Banana';\nlet headerNav = document.createElement('nav');\nheaderNav.classList.add('nav');\n\nheader.appendChild(headerTitle);\nheader.appendChild(headerNav);\n\nlet navItemContent = ['X', 'Homepage', 'Menu', 'About', 'Contact'];\nfor (let i = 0; i < 5; i++) {\n  let navItem = document.createElement('div');\n  navItem.classList.add('nav-item');\n  if (i == 0) {\n    navItem.id = 'nav-exit';\n    navItem.style.padding = '5px 10px';\n  }\n  if (i == 1) {\n    navItem.classList.add('current-tab');\n  }\n  let navLink = document.createElement('a');\n  navLink.setAttribute('href', '#');\n  navLink.textContent = navItemContent[i];\n  navItem.appendChild(navLink);\n\n  // change #content's children here\n  if (navItem.id != 'nav-exit') {\n    navItem.addEventListener('click', () => {\n      // Select clicked tab\n      let navItems = document.querySelectorAll('.nav-item');\n      for (let navItem of navItems) {\n        navItem.classList.remove('current-tab');\n      }\n      navItem.classList.add('current-tab');\n\n      // Replace content\n      content.style.overflowY = 'scroll';\n      let page = content.querySelector('.page');\n      let current = document.querySelector('.current-tab');\n      let nextPage;\n      switch (current.textContent) {\n        case 'Homepage':\n          nextPage =  _homepage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n          break;\n        case 'Menu':\n          nextPage =  _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n          content.style.overflowY = 'hidden';\n          break;\n        case 'About':\n          nextPage = _about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n          break;\n        case 'Contact':\n          nextPage = _contact_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n          break;\n      }\n\n      if (page.id != nextPage.id) {\n        content.removeChild(page);\n        content.appendChild(nextPage);\n      }\n\n      // Hide menu on mobile\n      let navExit = document.querySelector('#nav-exit');\n      if (navExit.style.display == 'block') {\n        navExit.dispatchEvent(new Event('click'));\n      }\n    });\n  }\n  headerNav.appendChild(navItem);\n}\n\nlet menuBar = document.createElement('div');\nmenuBar.id = 'menu-bar';\nlet menuBarLink = document.createElement('a');\nmenuBarLink.setAttribute('href', '#');\nmenuBarLink.textContent = '=';\nmenuBar.appendChild(menuBarLink);\nheader.appendChild(menuBar);\n\nstructure.appendChild(header);\n\n// Navigation\n\nlet navExit = document.querySelector('#nav-exit');\nlet nav = document.querySelector('#navigation .nav');\n\nmenuBar.addEventListener('click', () => {\n  nav.style.display = 'flex';\n  nav.style.animation = '.5s menu-slide-in linear';\n  navExit.style.display = 'block';\n});\n\nnavExit.addEventListener('click', () => {\n  nav.style.animation = 'none';\n  nav.style.animation = '.5s menu-slide-out';\n  \n  setTimeout(() => {\n    nav.style.display = 'none';\n    navExit.style.display = 'none';\n  }, 500);\n});\n\n// TAB CONTENT\n\nlet contentTab = document.createElement('section');\ncontentTab.id = 'content-tab';\nlet gitWrapper = document.createElement('div');\ngitWrapper.classList.add('gw');\nlet content = document.createElement('div');\ncontent.id = 'content';\n\ncontentTab.appendChild(gitWrapper);\ngitWrapper.appendChild(content)\nstructure.appendChild(contentTab);\n\n// Set default page\n\ncontent.appendChild(_homepage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n// Github Link\n\nlet git = document.createElement('a');\ngit.setAttribute('href', 'https://github.com/Lucas-Bide/odin-restaurant');\ngit.setAttribute('target', '_');\ngit.classList.add('github');\ngit.textContent = \"Github\";\ngitWrapper.appendChild(git);\n\n\n\n//# sourceURL=webpack:///./src/scripts/pageSetup.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--4-1!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });
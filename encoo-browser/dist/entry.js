/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry.ts":
/*!**********************!*\
  !*** ./src/entry.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/application */ \"./src/main/application.ts\");\n// 控制应用生命周期和创建原生浏览器窗口的模组\n\n_main_application__WEBPACK_IMPORTED_MODULE_0__.ApplicationBuilder.build().start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBRUFBLHVFQUFBLEdBQTJCRSxLQUEzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0X3NpbXBsZS8uL3NyYy9lbnRyeS50cz9hMmEzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOaOp+WItuW6lOeUqOeUn+WRveWRqOacn+WSjOWIm+W7uuWOn+eUn+a1j+iniOWZqOeql+WPo+eahOaooee7hFxuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkJ1aWxkZXIgfSBmcm9tICcuL21haW4vYXBwbGljYXRpb24nO1xuXG5BcHBsaWNhdGlvbkJ1aWxkZXIuYnVpbGQoKS5zdGFydCgpO1xuIl0sIm5hbWVzIjpbIkFwcGxpY2F0aW9uQnVpbGRlciIsImJ1aWxkIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/entry.ts\n");

/***/ }),

/***/ "./src/main/app-window.ts":
/*!********************************!*\
  !*** ./src/main/app-window.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWindow\": () => (/* binding */ AppWindow)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nclass AppWindow {\n  constructor() {\n    this.browserWinRef = void 0;\n    this.browserWinRef = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n      frame: false,\n      minWidth: 600,\n      minHeight: 500,\n      backgroundColor: '#ffffff',\n      webPreferences: {\n        plugins: false,\n        // TODO: enable sandbox, contextIsolation and disable nodeIntegration to improve security\n        nodeIntegration: true,\n        contextIsolation: false,\n        javascript: true\n      },\n      show: false\n    });\n  }\n\n  show() {\n    if (true) {\n      this.webContents.openDevTools({\n        mode: 'detach'\n      });\n      this.browserWinRef.loadURL('http://localhost:9000/MainBrowserLayout.html');\n    } else {}\n\n    this.browserWinRef.show();\n  }\n\n  get webContents() {\n    return this.browserWinRef.webContents;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9hcHAtd2luZG93LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUMsU0FBTixDQUFnQjtBQUVkQyxFQUFBQSxXQUFXLEdBQUc7QUFBQSxTQURkQyxhQUNjO0FBQ25CLFNBQUtBLGFBQUwsR0FBcUIsSUFBSUgsbURBQUosQ0FBa0I7QUFDckNJLE1BQUFBLEtBQUssRUFBRSxLQUQ4QjtBQUVyQ0MsTUFBQUEsUUFBUSxFQUFFLEdBRjJCO0FBR3JDQyxNQUFBQSxTQUFTLEVBQUUsR0FIMEI7QUFJckNDLE1BQUFBLGVBQWUsRUFBRSxTQUpvQjtBQUtyQ0MsTUFBQUEsY0FBYyxFQUFFO0FBQ2RDLFFBQUFBLE9BQU8sRUFBRSxLQURLO0FBRWQ7QUFDQUMsUUFBQUEsZUFBZSxFQUFFLElBSEg7QUFJZEMsUUFBQUEsZ0JBQWdCLEVBQUUsS0FKSjtBQUtkQyxRQUFBQSxVQUFVLEVBQUU7QUFMRSxPQUxxQjtBQVlyQ0MsTUFBQUEsSUFBSSxFQUFFO0FBWitCLEtBQWxCLENBQXJCO0FBY0Q7O0FBQ01BLEVBQUFBLElBQUksR0FBRztBQUNaLFFBQUlDLElBQUosRUFBNEM7QUFDMUMsV0FBS0csV0FBTCxDQUFpQkMsWUFBakIsQ0FBOEI7QUFBRUMsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBOUI7QUFDQSxXQUFLaEIsYUFBTCxDQUFtQmlCLE9BQW5CLENBQTJCLDhDQUEzQjtBQUNELEtBSEQsTUFHTyxFQUVOOztBQUNELFNBQUtqQixhQUFMLENBQW1CVSxJQUFuQjtBQUNEOztBQUNxQixNQUFYSSxXQUFXLEdBQUc7QUFDdkIsV0FBTyxLQUFLZCxhQUFMLENBQW1CYyxXQUExQjtBQUNEOztBQTdCb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zaW1wbGUvLi9zcmMvbWFpbi9hcHAtd2luZG93LnRzPzdkYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3NlclZpZXcsIEJyb3dzZXJXaW5kb3cgfSBmcm9tICdlbGVjdHJvbic7XG5cbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xuICBwdWJsaWMgYnJvd3NlcldpblJlZjogQnJvd3NlcldpbmRvdztcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJvd3NlcldpblJlZiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICAgIGZyYW1lOiBmYWxzZSxcbiAgICAgIG1pbldpZHRoOiA2MDAsXG4gICAgICBtaW5IZWlnaHQ6IDUwMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgcGx1Z2luczogZmFsc2UsXG4gICAgICAgIC8vIFRPRE86IGVuYWJsZSBzYW5kYm94LCBjb250ZXh0SXNvbGF0aW9uIGFuZCBkaXNhYmxlIG5vZGVJbnRlZ3JhdGlvbiB0byBpbXByb3ZlIHNlY3VyaXR5XG4gICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2UsXG4gICAgICAgIGphdmFzY3JpcHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBzaG93OiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBzaG93KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGhpcy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoeyBtb2RlOiAnZGV0YWNoJyB9KTtcbiAgICAgIHRoaXMuYnJvd3NlcldpblJlZi5sb2FkVVJMKCdodHRwOi8vbG9jYWxob3N0OjkwMDAvTWFpbkJyb3dzZXJMYXlvdXQuaHRtbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJyb3dzZXJXaW5SZWYubG9hZFVSTCgnLi9kaXN0L2FwcC5odG1sJyk7XG4gICAgfVxuICAgIHRoaXMuYnJvd3NlcldpblJlZi5zaG93KCk7XG4gIH1cbiAgcHVibGljIGdldCB3ZWJDb250ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5icm93c2VyV2luUmVmLndlYkNvbnRlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQnJvd3NlcldpbmRvdyIsIkFwcFdpbmRvdyIsImNvbnN0cnVjdG9yIiwiYnJvd3NlcldpblJlZiIsImZyYW1lIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3ZWJQcmVmZXJlbmNlcyIsInBsdWdpbnMiLCJub2RlSW50ZWdyYXRpb24iLCJjb250ZXh0SXNvbGF0aW9uIiwiamF2YXNjcmlwdCIsInNob3ciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ3ZWJDb250ZW50cyIsIm9wZW5EZXZUb29scyIsIm1vZGUiLCJsb2FkVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/app-window.ts\n");

/***/ }),

/***/ "./src/main/application.ts":
/*!*********************************!*\
  !*** ./src/main/application.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApplicationBuilder\": () => (/* binding */ ApplicationBuilder),\n/* harmony export */   \"Application\": () => (/* binding */ Application)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-window */ \"./src/main/app-window.ts\");\n\n\nclass ApplicationBuilder {\n  static build() {\n    return Application.getInstance();\n  }\n\n}\nclass Application {\n  constructor() {\n    this.appWin = void 0;\n  }\n\n  static getInstance() {\n    return new Application();\n  }\n\n  async start() {\n    await electron__WEBPACK_IMPORTED_MODULE_0__.app.whenReady();\n    this.appWin = new _app_window__WEBPACK_IMPORTED_MODULE_1__.AppWindow();\n    this.appWin.show();\n    electron__WEBPACK_IMPORTED_MODULE_0__.app.on('window-all-closed', function () {\n      if (process.platform !== 'darwin') electron__WEBPACK_IMPORTED_MODULE_0__.app.quit();\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9hcHBsaWNhdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxrQkFBTixDQUF5QjtBQUNYLFNBQUxDLEtBQUssR0FBRztBQUNwQixXQUFPQyxXQUFXLENBQUNDLFdBQVosRUFBUDtBQUNEOztBQUg2QjtBQUt6QixNQUFNRCxXQUFOLENBQWtCO0FBQUE7QUFBQSxTQUloQkUsTUFKZ0I7QUFBQTs7QUFDRSxTQUFYRCxXQUFXLEdBQUc7QUFDMUIsV0FBTyxJQUFJRCxXQUFKLEVBQVA7QUFDRDs7QUFFaUIsUUFBTEcsS0FBSyxHQUFHO0FBQ25CLFVBQU1QLG1EQUFBLEVBQU47QUFDQSxTQUFLTSxNQUFMLEdBQWMsSUFBSUwsa0RBQUosRUFBZDtBQUNBLFNBQUtLLE1BQUwsQ0FBWUcsSUFBWjtBQUNBVCxJQUFBQSw0Q0FBQSxDQUFPLG1CQUFQLEVBQTRCLFlBQVc7QUFDckMsVUFBSVcsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLFFBQXpCLEVBQW1DWiw4Q0FBQTtBQUNwQyxLQUZEO0FBR0Q7O0FBWnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc2ltcGxlLy4vc3JjL21haW4vYXBwbGljYXRpb24udHM/YTNjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIGlwY01haW4sIE1lbnUgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBBcHBXaW5kb3cgfSBmcm9tICcuL2FwcC13aW5kb3cnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25CdWlsZGVyIHtcbiAgcHVibGljIHN0YXRpYyBidWlsZCgpIHtcbiAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uKCk7XG4gIH1cbiAgcHVibGljIGFwcFdpbjogQXBwV2luZG93O1xuICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG4gICAgYXdhaXQgYXBwLndoZW5SZWFkeSgpO1xuICAgIHRoaXMuYXBwV2luID0gbmV3IEFwcFdpbmRvdygpO1xuICAgIHRoaXMuYXBwV2luLnNob3coKTtcbiAgICBhcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIGFwcC5xdWl0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHAiLCJBcHBXaW5kb3ciLCJBcHBsaWNhdGlvbkJ1aWxkZXIiLCJidWlsZCIsIkFwcGxpY2F0aW9uIiwiZ2V0SW5zdGFuY2UiLCJhcHBXaW4iLCJzdGFydCIsIndoZW5SZWFkeSIsInNob3ciLCJvbiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsInF1aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/application.ts\n");

/***/ }),

/***/ "electron":
/*!****************************************!*\
  !*** external "require(\"electron\")" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entry.ts");
/******/ 	
/******/ })()
;
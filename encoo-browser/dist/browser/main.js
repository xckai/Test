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

/***/ "./src/browser/main.ts":
/*!*****************************!*\
  !*** ./src/browser/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// 控制应用生命周期和创建原生浏览器窗口的模组\n\n\n\nfunction createWindow() {\n  // 创建浏览器窗口\n  var mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n    width: 800,\n    height: 600,\n    webPreferences: {\n      preload: path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'preload.js')\n    }\n  }); // 加载 index.html\n\n  mainWindow.loadFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, './index.html')); // 打开开发工具\n\n  mainWindow.webContents.openDevTools();\n} // 这段程序将会在 Electron 结束初始化\n// 和创建浏览器窗口的时候调用\n// 部分 API 在 ready 事件触发后才能使用。\n\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.whenReady().then(function () {\n  createWindow();\n  electron__WEBPACK_IMPORTED_MODULE_0__.app.on('activate', function () {\n    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他\n    // 打开的窗口，那么程序会重新创建一个窗口。\n    if (electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow.getAllWindows().length === 0) createWindow();\n  });\n}); // 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在\n// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('window-all-closed', function () {\n  if (process.platform !== 'darwin') electron__WEBPACK_IMPORTED_MODULE_0__.app.quit();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnJvd3Nlci9tYWluLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNHLFlBQVQsR0FBd0I7QUFDdEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUgsbURBQUosQ0FBa0I7QUFDbkNJLElBQUFBLEtBQUssRUFBRSxHQUQ0QjtBQUVuQ0MsSUFBQUEsTUFBTSxFQUFFLEdBRjJCO0FBR25DQyxJQUFBQSxjQUFjLEVBQUU7QUFDZEMsTUFBQUEsT0FBTyxFQUFFTixnREFBQSxDQUFVUSxTQUFWLEVBQXFCLFlBQXJCO0FBREs7QUFIbUIsR0FBbEIsQ0FBbkIsQ0FGc0IsQ0FVdEI7O0FBQ0FOLEVBQUFBLFVBQVUsQ0FBQ08sUUFBWCxDQUFvQlQsZ0RBQUEsQ0FBVVEsU0FBVixFQUFxQixjQUFyQixDQUFwQixFQVhzQixDQWF0Qjs7QUFDQU4sRUFBQUEsVUFBVSxDQUFDUSxXQUFYLENBQXVCQyxZQUF2QjtBQUNELEVBRUQ7QUFDQTtBQUNBOzs7QUFDQWIsbURBQUEsR0FBZ0JlLElBQWhCLENBQXFCLFlBQU07QUFDekJaLEVBQUFBLFlBQVk7QUFFWkgsRUFBQUEsNENBQUEsQ0FBTyxVQUFQLEVBQW1CLFlBQVk7QUFDN0I7QUFDQTtBQUNBLFFBQUlDLGlFQUFBLEdBQThCaUIsTUFBOUIsS0FBeUMsQ0FBN0MsRUFBZ0RmLFlBQVk7QUFDN0QsR0FKRDtBQUtELENBUkQsR0FVQTtBQUNBOztBQUNBSCw0Q0FBQSxDQUFPLG1CQUFQLEVBQTRCLFlBQVk7QUFDdEMsTUFBSW1CLE9BQU8sQ0FBQ0MsUUFBUixLQUFxQixRQUF6QixFQUFtQ3BCLDhDQUFBO0FBQ3BDLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zaW1wbGUvLi9zcmMvYnJvd3Nlci9tYWluLnRzP2ViOTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5o6n5Yi25bqU55So55Sf5ZG95ZGo5pyf5ZKM5Yib5bu65Y6f55Sf5rWP6KeI5Zmo56qX5Y+j55qE5qih57uEXG5cbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdyB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XG4gIC8vIOWIm+W7uua1j+iniOWZqOeql+WPo1xuICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA2MDAsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIHByZWxvYWQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICdwcmVsb2FkLmpzJylcbiAgICB9XG4gIH0pO1xuXG4gIC8vIOWKoOi9vSBpbmRleC5odG1sXG4gIG1haW5XaW5kb3cubG9hZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJy4vaW5kZXguaHRtbCcpKTtcblxuICAvLyDmiZPlvIDlvIDlj5Hlt6XlhbdcbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbn1cblxuLy8g6L+Z5q6156iL5bqP5bCG5Lya5ZyoIEVsZWN0cm9uIOe7k+adn+WIneWni+WMllxuLy8g5ZKM5Yib5bu65rWP6KeI5Zmo56qX5Y+j55qE5pe25YCZ6LCD55SoXG4vLyDpg6jliIYgQVBJIOWcqCByZWFkeSDkuovku7bop6blj5HlkI7miY3og73kvb/nlKjjgIJcbmFwcC53aGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgY3JlYXRlV2luZG93KCk7XG5cbiAgYXBwLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyDpgJrluLjlnKggbWFjT1Mg5LiK77yM5b2T54K55Ye7IGRvY2sg5Lit55qE5bqU55So56iL5bqP5Zu+5qCH5pe277yM5aaC5p6c5rKh5pyJ5YW25LuWXG4gICAgLy8g5omT5byA55qE56qX5Y+j77yM6YKj5LmI56iL5bqP5Lya6YeN5paw5Yib5bu65LiA5Liq56qX5Y+j44CCXG4gICAgaWYgKEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpLmxlbmd0aCA9PT0gMCkgY3JlYXRlV2luZG93KCk7XG4gIH0pO1xufSk7XG5cbi8vIOmZpOS6hiBtYWNPUyDlpJbvvIzlvZPmiYDmnInnqpflj6Ppg73ooqvlhbPpl63nmoTml7blgJnpgIDlh7rnqIvluo/jgIIg5Zug5q2k77yM6YCa5bi45a+556iL5bqP5ZKM5a6D5Lus5ZyoXG4vLyDku7vliqHmoI/kuIrnmoTlm77moIfmnaXor7TvvIzlupTlvZPkv53mjIHmtLvot4PnirbmgIHvvIznm7TliLDnlKjmiLfkvb/nlKggQ21kICsgUSDpgIDlh7rjgIJcbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykgYXBwLnF1aXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImFwcCIsIkJyb3dzZXJXaW5kb3ciLCJwYXRoIiwiY3JlYXRlV2luZG93IiwibWFpbldpbmRvdyIsIndpZHRoIiwiaGVpZ2h0Iiwid2ViUHJlZmVyZW5jZXMiLCJwcmVsb2FkIiwiam9pbiIsIl9fZGlybmFtZSIsImxvYWRGaWxlIiwid2ViQ29udGVudHMiLCJvcGVuRGV2VG9vbHMiLCJ3aGVuUmVhZHkiLCJ0aGVuIiwib24iLCJnZXRBbGxXaW5kb3dzIiwibGVuZ3RoIiwicHJvY2VzcyIsInBsYXRmb3JtIiwicXVpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/browser/main.ts\n");

/***/ }),

/***/ "electron":
/*!****************************************!*\
  !*** external "require(\"electron\")" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!************************************!*\
  !*** external "require(\"path\")" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/browser/main.ts");
/******/ 	
/******/ })()
;
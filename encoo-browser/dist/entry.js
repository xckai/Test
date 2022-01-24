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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWindow\": () => (/* binding */ AppWindow)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tab_view_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-view-manager */ \"./src/main/tab-view-manager.ts\");\n\n\nclass AppWindow {\n  constructor() {\n    this.browserWinRef = void 0;\n    this.TabManager = void 0;\n    this.browserWinRef = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n      frame: false,\n      minWidth: 600,\n      minHeight: 500,\n      backgroundColor: '#ffffff',\n      webPreferences: {\n        plugins: false,\n        // TODO: enable sandbox, contextIsolation and disable nodeIntegration to improve security\n        nodeIntegration: true,\n        contextIsolation: false,\n        javascript: true\n      },\n      show: false\n    });\n  }\n\n  send(channel, ...args) {\n    this.webContents.send(channel, ...args);\n  }\n\n  show() {\n    this.TabManager = new _tab_view_manager__WEBPACK_IMPORTED_MODULE_1__.TabManager(this);\n\n    if (true) {\n      this.webContents.openDevTools({\n        mode: 'detach'\n      });\n      this.browserWinRef.loadURL('http://localhost:9000/MainWindowPage.html');\n    } else {}\n\n    this.browserWinRef.show();\n  }\n\n  get webContents() {\n    return this.browserWinRef.webContents;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9hcHAtd2luZG93LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUUsU0FBTixDQUFnQjtBQUdkQyxFQUFBQSxXQUFXLEdBQUc7QUFBQSxTQUZkQyxhQUVjO0FBQUEsU0FEZEgsVUFDYztBQUNuQixTQUFLRyxhQUFMLEdBQXFCLElBQUlKLG1EQUFKLENBQWtCO0FBQ3JDSyxNQUFBQSxLQUFLLEVBQUUsS0FEOEI7QUFFckNDLE1BQUFBLFFBQVEsRUFBRSxHQUYyQjtBQUdyQ0MsTUFBQUEsU0FBUyxFQUFFLEdBSDBCO0FBSXJDQyxNQUFBQSxlQUFlLEVBQUUsU0FKb0I7QUFLckNDLE1BQUFBLGNBQWMsRUFBRTtBQUNkQyxRQUFBQSxPQUFPLEVBQUUsS0FESztBQUVkO0FBQ0FDLFFBQUFBLGVBQWUsRUFBRSxJQUhIO0FBSWRDLFFBQUFBLGdCQUFnQixFQUFFLEtBSko7QUFLZEMsUUFBQUEsVUFBVSxFQUFFO0FBTEUsT0FMcUI7QUFZckNDLE1BQUFBLElBQUksRUFBRTtBQVorQixLQUFsQixDQUFyQjtBQWNEOztBQUNNQyxFQUFBQSxJQUFJLENBQUNDLE9BQUQsRUFBa0IsR0FBR0MsSUFBckIsRUFBa0M7QUFDM0MsU0FBS0MsV0FBTCxDQUFpQkgsSUFBakIsQ0FBc0JDLE9BQXRCLEVBQStCLEdBQUdDLElBQWxDO0FBQ0Q7O0FBQ01ILEVBQUFBLElBQUksR0FBRztBQUNaLFNBQUtiLFVBQUwsR0FBa0IsSUFBSUEseURBQUosQ0FBZSxJQUFmLENBQWxCOztBQUNBLFFBQUlrQixJQUFKLEVBQTRDO0FBQzFDLFdBQUtELFdBQUwsQ0FBaUJJLFlBQWpCLENBQThCO0FBQUVDLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQTlCO0FBQ0EsV0FBS25CLGFBQUwsQ0FBbUJvQixPQUFuQixDQUEyQiwyQ0FBM0I7QUFDRCxLQUhELE1BR08sRUFFTjs7QUFDRCxTQUFLcEIsYUFBTCxDQUFtQlUsSUFBbkI7QUFDRDs7QUFDcUIsTUFBWEksV0FBVyxHQUFHO0FBQ3ZCLFdBQU8sS0FBS2QsYUFBTCxDQUFtQmMsV0FBMUI7QUFDRDs7QUFsQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc2ltcGxlLy4vc3JjL21haW4vYXBwLXdpbmRvdy50cz83ZGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJWaWV3LCBCcm93c2VyV2luZG93IH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgVGFiTWFuYWdlciB9IGZyb20gJy4vdGFiLXZpZXctbWFuYWdlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHBXaW5kb3cge1xuICBwdWJsaWMgYnJvd3NlcldpblJlZjogQnJvd3NlcldpbmRvdztcbiAgcHVibGljIFRhYk1hbmFnZXI6IFRhYk1hbmFnZXI7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJyb3dzZXJXaW5SZWYgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgICBmcmFtZTogZmFsc2UsXG4gICAgICBtaW5XaWR0aDogNjAwLFxuICAgICAgbWluSGVpZ2h0OiA1MDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIHBsdWdpbnM6IGZhbHNlLFxuICAgICAgICAvLyBUT0RPOiBlbmFibGUgc2FuZGJveCwgY29udGV4dElzb2xhdGlvbiBhbmQgZGlzYWJsZSBub2RlSW50ZWdyYXRpb24gdG8gaW1wcm92ZSBzZWN1cml0eVxuICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlLFxuICAgICAgICBqYXZhc2NyaXB0OiB0cnVlXG4gICAgICB9LFxuICAgICAgc2hvdzogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgc2VuZChjaGFubmVsOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy53ZWJDb250ZW50cy5zZW5kKGNoYW5uZWwsIC4uLmFyZ3MpO1xuICB9XG4gIHB1YmxpYyBzaG93KCkge1xuICAgIHRoaXMuVGFiTWFuYWdlciA9IG5ldyBUYWJNYW5hZ2VyKHRoaXMpO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdGhpcy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoeyBtb2RlOiAnZGV0YWNoJyB9KTtcbiAgICAgIHRoaXMuYnJvd3NlcldpblJlZi5sb2FkVVJMKCdodHRwOi8vbG9jYWxob3N0OjkwMDAvTWFpbldpbmRvd1BhZ2UuaHRtbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJyb3dzZXJXaW5SZWYubG9hZFVSTCgnLi9kaXN0L2FwcC5odG1sJyk7XG4gICAgfVxuICAgIHRoaXMuYnJvd3NlcldpblJlZi5zaG93KCk7XG4gIH1cbiAgcHVibGljIGdldCB3ZWJDb250ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5icm93c2VyV2luUmVmLndlYkNvbnRlbnRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQnJvd3NlcldpbmRvdyIsIlRhYk1hbmFnZXIiLCJBcHBXaW5kb3ciLCJjb25zdHJ1Y3RvciIsImJyb3dzZXJXaW5SZWYiLCJmcmFtZSIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwid2ViUHJlZmVyZW5jZXMiLCJwbHVnaW5zIiwibm9kZUludGVncmF0aW9uIiwiY29udGV4dElzb2xhdGlvbiIsImphdmFzY3JpcHQiLCJzaG93Iiwic2VuZCIsImNoYW5uZWwiLCJhcmdzIiwid2ViQ29udGVudHMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJvcGVuRGV2VG9vbHMiLCJtb2RlIiwibG9hZFVSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/app-window.ts\n");

/***/ }),

/***/ "./src/main/application.ts":
/*!*********************************!*\
  !*** ./src/main/application.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApplicationBuilder\": () => (/* binding */ ApplicationBuilder),\n/* harmony export */   \"Application\": () => (/* binding */ Application)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-window */ \"./src/main/app-window.ts\");\n\n\nclass ApplicationBuilder {\n  static build() {\n    return Application.getInstance();\n  }\n\n}\nclass Application {\n  constructor() {\n    this.appWin = void 0;\n  }\n\n  static getInstance() {\n    return new Application();\n  }\n\n  async start() {\n    await electron__WEBPACK_IMPORTED_MODULE_0__.app.whenReady();\n    this.appWin = new _app_window__WEBPACK_IMPORTED_MODULE_1__.AppWindow();\n    this.appWin.show();\n    electron__WEBPACK_IMPORTED_MODULE_0__.app.on('window-all-closed', function () {\n      if (process.platform !== 'darwin') electron__WEBPACK_IMPORTED_MODULE_0__.app.quit();\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi9hcHBsaWNhdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNRSxrQkFBTixDQUF5QjtBQUNYLFNBQUxDLEtBQUssR0FBRztBQUNwQixXQUFPQyxXQUFXLENBQUNDLFdBQVosRUFBUDtBQUNEOztBQUg2QjtBQUt6QixNQUFNRCxXQUFOLENBQWtCO0FBQUE7QUFBQSxTQUloQkUsTUFKZ0I7QUFBQTs7QUFDRSxTQUFYRCxXQUFXLEdBQUc7QUFDMUIsV0FBTyxJQUFJRCxXQUFKLEVBQVA7QUFDRDs7QUFFaUIsUUFBTEcsS0FBSyxHQUFHO0FBQ25CLFVBQU1QLG1EQUFBLEVBQU47QUFDQSxTQUFLTSxNQUFMLEdBQWMsSUFBSUwsa0RBQUosRUFBZDtBQUNBLFNBQUtLLE1BQUwsQ0FBWUcsSUFBWjtBQUNBVCxJQUFBQSw0Q0FBQSxDQUFPLG1CQUFQLEVBQTRCLFlBQVc7QUFDckMsVUFBSVcsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLFFBQXpCLEVBQW1DWiw4Q0FBQTtBQUNwQyxLQUZEO0FBR0Q7O0FBWnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc2ltcGxlLy4vc3JjL21haW4vYXBwbGljYXRpb24udHM/YTNjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIGlwY01haW4sIE1lbnUgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBBcHBXaW5kb3cgfSBmcm9tICcuL2FwcC13aW5kb3cnO1xuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25CdWlsZGVyIHtcbiAgcHVibGljIHN0YXRpYyBidWlsZCgpIHtcbiAgICByZXR1cm4gQXBwbGljYXRpb24uZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gbmV3IEFwcGxpY2F0aW9uKCk7XG4gIH1cbiAgcHVibGljIGFwcFdpbjogQXBwV2luZG93O1xuICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG4gICAgYXdhaXQgYXBwLndoZW5SZWFkeSgpO1xuICAgIHRoaXMuYXBwV2luID0gbmV3IEFwcFdpbmRvdygpO1xuICAgIHRoaXMuYXBwV2luLnNob3coKTtcbiAgICBhcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIGFwcC5xdWl0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhcHAiLCJBcHBXaW5kb3ciLCJBcHBsaWNhdGlvbkJ1aWxkZXIiLCJidWlsZCIsIkFwcGxpY2F0aW9uIiwiZ2V0SW5zdGFuY2UiLCJhcHBXaW4iLCJzdGFydCIsIndoZW5SZWFkeSIsInNob3ciLCJvbiIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsInF1aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/application.ts\n");

/***/ }),

/***/ "./src/main/tab-view-manager.ts":
/*!**************************************!*\
  !*** ./src/main/tab-view-manager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TabManager\": () => (/* binding */ TabManager)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tab_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-view */ \"./src/main/tab-view.ts\");\n\n\n\nclass TabManager extends events__WEBPACK_IMPORTED_MODULE_1__.EventEmitter {\n  constructor(appWin) {\n    super();\n    this.tabs = new Map();\n    this.appWindow = void 0;\n    this.appWindow = appWin;\n    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.handle(`create-tab-1`, (e, details) => {\n      return this.createTab(details).id;\n    });\n  }\n\n  createTab(property) {\n    const tab = new _tab_view__WEBPACK_IMPORTED_MODULE_2__.TabView(this.appWindow, property.url);\n    const id = tab.id;\n    this.tabs.set(id, tab);\n    this.appWindow.send('create-tab', { ...property\n    });\n    tab.show();\n    return tab;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi90YWItdmlldy1tYW5hZ2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVPLE1BQU1HLFVBQU4sU0FBeUJGLGdEQUF6QixDQUFzQztBQUdwQ0csRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQW9CO0FBQ3BDO0FBRG9DLFNBRi9CQyxJQUUrQixHQUZ4QixJQUFJQyxHQUFKLEVBRXdCO0FBQUEsU0FEL0JDLFNBQytCO0FBRXBDLFNBQUtBLFNBQUwsR0FBaUJILE1BQWpCO0FBQ0FMLElBQUFBLG9EQUFBLENBQWdCLGNBQWhCLEVBQStCLENBQUNVLENBQUQsRUFBSUMsT0FBSixLQUFnQjtBQUM3QyxhQUFPLEtBQUtDLFNBQUwsQ0FBZUQsT0FBZixFQUF3QkUsRUFBL0I7QUFDRCxLQUZEO0FBR0Q7O0FBQ01ELEVBQUFBLFNBQVMsQ0FBQ0UsUUFBRCxFQUF5QztBQUN2RCxVQUFNQyxHQUFHLEdBQUcsSUFBSWIsOENBQUosQ0FBWSxLQUFLTSxTQUFqQixFQUE0Qk0sUUFBUSxDQUFDRSxHQUFyQyxDQUFaO0FBQ0EsVUFBTUgsRUFBRSxHQUFHRSxHQUFHLENBQUNGLEVBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVVXLEdBQVYsQ0FBY0osRUFBZCxFQUFrQkUsR0FBbEI7QUFDQSxTQUFLUCxTQUFMLENBQWVVLElBQWYsQ0FBb0IsWUFBcEIsRUFBa0MsRUFBRSxHQUFHSjtBQUFMLEtBQWxDO0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ0ksSUFBSjtBQUNBLFdBQU9KLEdBQVA7QUFDRDs7QUFqQjBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Rfc2ltcGxlLy4vc3JjL21haW4vdGFiLXZpZXctbWFuYWdlci50cz9lZWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xuaW1wb3J0IHsgQXBwV2luZG93IH0gZnJvbSAnLi9hcHAtd2luZG93JztcbmltcG9ydCB7IFRhYlZpZXcgfSBmcm9tICcuL3RhYi12aWV3JztcblxuZXhwb3J0IGNsYXNzIFRhYk1hbmFnZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBwdWJsaWMgdGFicyA9IG5ldyBNYXA8bnVtYmVyLCBUYWJWaWV3PigpO1xuICBwdWJsaWMgYXBwV2luZG93OiBBcHBXaW5kb3c7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihhcHBXaW46IEFwcFdpbmRvdykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hcHBXaW5kb3cgPSBhcHBXaW47XG4gICAgaXBjTWFpbi5oYW5kbGUoYGNyZWF0ZS10YWItMWAsIChlLCBkZXRhaWxzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGVUYWIoZGV0YWlscykuaWQ7XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGNyZWF0ZVRhYihwcm9wZXJ0eTogY2hyb21lLnRhYnMuQ3JlYXRlUHJvcGVydGllcykge1xuICAgIGNvbnN0IHRhYiA9IG5ldyBUYWJWaWV3KHRoaXMuYXBwV2luZG93LCBwcm9wZXJ0eS51cmwpO1xuICAgIGNvbnN0IGlkID0gdGFiLmlkO1xuICAgIHRoaXMudGFicy5zZXQoaWQsIHRhYik7XG4gICAgdGhpcy5hcHBXaW5kb3cuc2VuZCgnY3JlYXRlLXRhYicsIHsgLi4ucHJvcGVydHkgfSk7XG4gICAgdGFiLnNob3coKTtcbiAgICByZXR1cm4gdGFiO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaXBjTWFpbiIsIkV2ZW50RW1pdHRlciIsIlRhYlZpZXciLCJUYWJNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJhcHBXaW4iLCJ0YWJzIiwiTWFwIiwiYXBwV2luZG93IiwiaGFuZGxlIiwiZSIsImRldGFpbHMiLCJjcmVhdGVUYWIiLCJpZCIsInByb3BlcnR5IiwidGFiIiwidXJsIiwic2V0Iiwic2VuZCIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/tab-view-manager.ts\n");

/***/ }),

/***/ "./src/main/tab-view.ts":
/*!******************************!*\
  !*** ./src/main/tab-view.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TabView\": () => (/* binding */ TabView)\n/* harmony export */ });\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n\nclass TabView {\n  constructor(appWin, url) {\n    this.browserViewRef = void 0;\n    this.initUrl = void 0;\n    this.appWindow = void 0;\n    this.browserViewRef = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserView({\n      webPreferences: {\n        nodeIntegration: true,\n        contextIsolation: true,\n        sandbox: true,\n        plugins: true,\n        nativeWindowOpen: true,\n        webSecurity: true,\n        javascript: true\n      }\n    });\n    this.webContents.loadURL(url);\n    this.browserViewRef.setAutoResize({\n      width: true,\n      height: true,\n      horizontal: false,\n      vertical: false\n    });\n    this.appWindow = appWin;\n  }\n\n  show() {\n    this.appWindow.browserWinRef.setBrowserView(this.browserViewRef);\n    const bound = this.appWindow.browserWinRef.getBounds();\n    this.browserViewRef.setBounds({\n      x: 0,\n      y: 80,\n      width: bound.width,\n      height: bound.height - 80\n    });\n  }\n\n  send(channel, ...args) {\n    this.webContents.send(channel, ...args);\n  }\n\n  get webContents() {\n    return this.browserViewRef.webContents;\n  }\n\n  get url() {\n    return this.webContents.getURL();\n  }\n\n  get title() {\n    return this.webContents.getTitle();\n  }\n\n  get id() {\n    return this.webContents.id;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi90YWItdmlldy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdPLE1BQU1DLE9BQU4sQ0FBYztBQUlaQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBb0JDLEdBQXBCLEVBQWlDO0FBQUEsU0FINUNDLGNBRzRDO0FBQUEsU0FGNUNDLE9BRTRDO0FBQUEsU0FENUNDLFNBQzRDO0FBQ2pELFNBQUtGLGNBQUwsR0FBc0IsSUFBSUwsaURBQUosQ0FBZ0I7QUFDcENRLE1BQUFBLGNBQWMsRUFBRTtBQUNkQyxRQUFBQSxlQUFlLEVBQUUsSUFESDtBQUVkQyxRQUFBQSxnQkFBZ0IsRUFBRSxJQUZKO0FBR2RDLFFBQUFBLE9BQU8sRUFBRSxJQUhLO0FBSWRDLFFBQUFBLE9BQU8sRUFBRSxJQUpLO0FBS2RDLFFBQUFBLGdCQUFnQixFQUFFLElBTEo7QUFNZEMsUUFBQUEsV0FBVyxFQUFFLElBTkM7QUFPZEMsUUFBQUEsVUFBVSxFQUFFO0FBUEU7QUFEb0IsS0FBaEIsQ0FBdEI7QUFXQSxTQUFLQyxXQUFMLENBQWlCQyxPQUFqQixDQUF5QmIsR0FBekI7QUFDQSxTQUFLQyxjQUFMLENBQW9CYSxhQUFwQixDQUFrQztBQUNoQ0MsTUFBQUEsS0FBSyxFQUFFLElBRHlCO0FBRWhDQyxNQUFBQSxNQUFNLEVBQUUsSUFGd0I7QUFHaENDLE1BQUFBLFVBQVUsRUFBRSxLQUhvQjtBQUloQ0MsTUFBQUEsUUFBUSxFQUFFO0FBSnNCLEtBQWxDO0FBTUEsU0FBS2YsU0FBTCxHQUFpQkosTUFBakI7QUFDRDs7QUFDTW9CLEVBQUFBLElBQUksR0FBRztBQUNaLFNBQUtoQixTQUFMLENBQWVpQixhQUFmLENBQTZCQyxjQUE3QixDQUE0QyxLQUFLcEIsY0FBakQ7QUFDQSxVQUFNcUIsS0FBSyxHQUFHLEtBQUtuQixTQUFMLENBQWVpQixhQUFmLENBQTZCRyxTQUE3QixFQUFkO0FBQ0EsU0FBS3RCLGNBQUwsQ0FBb0J1QixTQUFwQixDQUE4QjtBQUFFQyxNQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxNQUFBQSxDQUFDLEVBQUUsRUFBWDtBQUFlWCxNQUFBQSxLQUFLLEVBQUVPLEtBQUssQ0FBQ1AsS0FBNUI7QUFBbUNDLE1BQUFBLE1BQU0sRUFBRU0sS0FBSyxDQUFDTixNQUFOLEdBQWU7QUFBMUQsS0FBOUI7QUFDRDs7QUFDTVcsRUFBQUEsSUFBSSxDQUFDQyxPQUFELEVBQWtCLEdBQUdDLElBQXJCLEVBQWtDO0FBQzNDLFNBQUtqQixXQUFMLENBQWlCZSxJQUFqQixDQUFzQkMsT0FBdEIsRUFBK0IsR0FBR0MsSUFBbEM7QUFDRDs7QUFDcUIsTUFBWGpCLFdBQVcsR0FBRztBQUN2QixXQUFPLEtBQUtYLGNBQUwsQ0FBb0JXLFdBQTNCO0FBQ0Q7O0FBQ2EsTUFBSFosR0FBRyxHQUFHO0FBQ2YsV0FBTyxLQUFLWSxXQUFMLENBQWlCa0IsTUFBakIsRUFBUDtBQUNEOztBQUVlLE1BQUxDLEtBQUssR0FBRztBQUNqQixXQUFPLEtBQUtuQixXQUFMLENBQWlCb0IsUUFBakIsRUFBUDtBQUNEOztBQUVZLE1BQUZDLEVBQUUsR0FBRztBQUNkLFdBQU8sS0FBS3JCLFdBQUwsQ0FBaUJxQixFQUF4QjtBQUNEOztBQTlDa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9zaW1wbGUvLi9zcmMvbWFpbi90YWItdmlldy50cz80YTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCwgQnJvd3NlclZpZXcgfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgeyBBcHBXaW5kb3cgfSBmcm9tICcuL2FwcC13aW5kb3cnO1xuXG5leHBvcnQgY2xhc3MgVGFiVmlldyB7XG4gIHB1YmxpYyBicm93c2VyVmlld1JlZjogQnJvd3NlclZpZXc7XG4gIHB1YmxpYyBpbml0VXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBhcHBXaW5kb3c6IEFwcFdpbmRvdztcbiAgcHVibGljIGNvbnN0cnVjdG9yKGFwcFdpbjogQXBwV2luZG93LCB1cmw6IHN0cmluZykge1xuICAgIHRoaXMuYnJvd3NlclZpZXdSZWYgPSBuZXcgQnJvd3NlclZpZXcoe1xuICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICBjb250ZXh0SXNvbGF0aW9uOiB0cnVlLFxuICAgICAgICBzYW5kYm94OiB0cnVlLFxuICAgICAgICBwbHVnaW5zOiB0cnVlLFxuICAgICAgICBuYXRpdmVXaW5kb3dPcGVuOiB0cnVlLFxuICAgICAgICB3ZWJTZWN1cml0eTogdHJ1ZSxcbiAgICAgICAgamF2YXNjcmlwdDogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMud2ViQ29udGVudHMubG9hZFVSTCh1cmwpO1xuICAgIHRoaXMuYnJvd3NlclZpZXdSZWYuc2V0QXV0b1Jlc2l6ZSh7XG4gICAgICB3aWR0aDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdHJ1ZSxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgdmVydGljYWw6IGZhbHNlXG4gICAgfSk7XG4gICAgdGhpcy5hcHBXaW5kb3cgPSBhcHBXaW47XG4gIH1cbiAgcHVibGljIHNob3coKSB7XG4gICAgdGhpcy5hcHBXaW5kb3cuYnJvd3NlcldpblJlZi5zZXRCcm93c2VyVmlldyh0aGlzLmJyb3dzZXJWaWV3UmVmKTtcbiAgICBjb25zdCBib3VuZCA9IHRoaXMuYXBwV2luZG93LmJyb3dzZXJXaW5SZWYuZ2V0Qm91bmRzKCk7XG4gICAgdGhpcy5icm93c2VyVmlld1JlZi5zZXRCb3VuZHMoeyB4OiAwLCB5OiA4MCwgd2lkdGg6IGJvdW5kLndpZHRoLCBoZWlnaHQ6IGJvdW5kLmhlaWdodCAtIDgwIH0pO1xuICB9XG4gIHB1YmxpYyBzZW5kKGNoYW5uZWw6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICB0aGlzLndlYkNvbnRlbnRzLnNlbmQoY2hhbm5lbCwgLi4uYXJncyk7XG4gIH1cbiAgcHVibGljIGdldCB3ZWJDb250ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5icm93c2VyVmlld1JlZi53ZWJDb250ZW50cztcbiAgfVxuICBwdWJsaWMgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy53ZWJDb250ZW50cy5nZXRVUkwoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMud2ViQ29udGVudHMuZ2V0VGl0bGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMud2ViQ29udGVudHMuaWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCcm93c2VyVmlldyIsIlRhYlZpZXciLCJjb25zdHJ1Y3RvciIsImFwcFdpbiIsInVybCIsImJyb3dzZXJWaWV3UmVmIiwiaW5pdFVybCIsImFwcFdpbmRvdyIsIndlYlByZWZlcmVuY2VzIiwibm9kZUludGVncmF0aW9uIiwiY29udGV4dElzb2xhdGlvbiIsInNhbmRib3giLCJwbHVnaW5zIiwibmF0aXZlV2luZG93T3BlbiIsIndlYlNlY3VyaXR5IiwiamF2YXNjcmlwdCIsIndlYkNvbnRlbnRzIiwibG9hZFVSTCIsInNldEF1dG9SZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInNob3ciLCJicm93c2VyV2luUmVmIiwic2V0QnJvd3NlclZpZXciLCJib3VuZCIsImdldEJvdW5kcyIsInNldEJvdW5kcyIsIngiLCJ5Iiwic2VuZCIsImNoYW5uZWwiLCJhcmdzIiwiZ2V0VVJMIiwidGl0bGUiLCJnZXRUaXRsZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/tab-view.ts\n");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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
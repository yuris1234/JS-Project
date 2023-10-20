/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_bucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/bucket.js */ \"./src/scripts/bucket.js\");\n// import Example from \"./scripts/example\";\n\n// const audioContext = new audioContext();\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = myCanvas.getContext('2d');\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  let bucket = new _scripts_bucket_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height, ctx);\n  bucket.drawBucket();\n  document.addEventListener(\"keydown\", e => {\n    handleArrowKey(e);\n\n    // handleArrowKey(e);\n    // handleArrowKey(e);\n  });\n\n  function handleArrowKey(e) {\n    switch (e.key) {\n      case \"ArrowRight\":\n        bucket.move(\"right\");\n        break;\n      case \"ArrowLeft\":\n        bucket.move(\"left\");\n        break;\n      default:\n        return;\n    }\n    requestAnimationFrame(bucket.drawBucket());\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUN5QztBQUN6Qzs7QUFFQUMsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3JDSixNQUFNLENBQUNLLEtBQUssR0FBSUMsTUFBTSxDQUFDQyxVQUFXO0VBQ2xDUCxNQUFNLENBQUNRLE1BQU0sR0FBSUYsTUFBTSxDQUFDRyxXQUFZO0VBRXBDLElBQUlDLE1BQU0sR0FBRyxJQUFJYiwwREFBTSxDQUFDRyxNQUFNLENBQUNLLEtBQUssRUFBRUwsTUFBTSxDQUFDUSxNQUFNLEVBQUVOLEdBQUcsQ0FBQztFQUN6RFEsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUVuQmIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdhLENBQUMsSUFBSztJQUN4Q0MsY0FBYyxDQUFDRCxDQUFDLENBQUM7O0lBRWpCO0lBQ0E7RUFDSixDQUFDLENBQUM7O0VBRUYsU0FBU0MsY0FBY0EsQ0FBQ0QsQ0FBQyxFQUFFO0lBQ3ZCLFFBQVFBLENBQUMsQ0FBQ0UsR0FBRztNQUNULEtBQUssWUFBWTtRQUNiSixNQUFNLENBQUNLLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEI7TUFDSixLQUFLLFdBQVc7UUFDWkwsTUFBTSxDQUFDSyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25CO01BQ0o7UUFDSTtJQUNSO0lBQ0FDLHFCQUFxQixDQUFDTixNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDOUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5pbXBvcnQgQnVja2V0IGZyb20gXCIuL3NjcmlwdHMvYnVja2V0LmpzXCI7XG4vLyBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgYXVkaW9Db250ZXh0KCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICBjb25zdCBjdHggPSBteUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhcy53aWR0aCA9ICh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgY2FudmFzLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgbGV0IGJ1Y2tldCA9IG5ldyBCdWNrZXQoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBjdHgpO1xuICAgIGJ1Y2tldC5kcmF3QnVja2V0KCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBoYW5kbGVBcnJvd0tleShlKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGhhbmRsZUFycm93S2V5KGUpO1xuICAgICAgICAvLyBoYW5kbGVBcnJvd0tleShlKTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQXJyb3dLZXkoZSkge1xuICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICAgICAgICAgIGJ1Y2tldC5tb3ZlKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICAgICAgYnVja2V0Lm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGJ1Y2tldC5kcmF3QnVja2V0KCkpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbIkJ1Y2tldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwibXlDYW52YXMiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJidWNrZXQiLCJkcmF3QnVja2V0IiwiZSIsImhhbmRsZUFycm93S2V5Iiwia2V5IiwibW92ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bucket.js":
/*!*******************************!*\
  !*** ./src/scripts/bucket.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Bucket {\n  constructor(width, height, ctx) {\n    debugger;\n    // this.dimensions = [width, height]\n    this.width = width;\n    this.height = height;\n    this.ctx = ctx;\n  }\n  drawBucket() {\n    // this.ctx.clearRect(0, 0, this.width, this.height);\n    // this.ctx.beginPath();\n    // this.ctx.arc(this.width/2, this.height, 25, 0, Math.PI);\n    // this.ctx.lineWidth = 5;\n    // this.ctx.fillStyle = 'black';\n    // this.ctx.fill();\n    // this.ctx.strokeStyle = \"black\";\n    // this.ctx.closePath();\n    // this.ctx.stroke();\n  }\n  move(dir) {\n    if (dir === \"right\") {\n      this.width += 100;\n    } else if (dir === \"left\") {\n      this.width -= 100;\n    }\n    // this.drawBucket();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bucket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWNrZXQuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsR0FBRyxFQUFFO0lBQzVCO0lBQ0E7SUFDQSxJQUFJLENBQUNGLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztFQUNsQjtFQUVBQyxVQUFVQSxDQUFBLEVBQUc7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFBQTtFQUdKQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDTixJQUFJQSxHQUFHLEtBQUssT0FBTyxFQUFFO01BQ2pCLElBQUksQ0FBQ0wsS0FBSyxJQUFJLEdBQUc7SUFDckIsQ0FBQyxNQUFNLElBQUlLLEdBQUcsS0FBSyxNQUFNLEVBQUU7TUFDdkIsSUFBSSxDQUFDTCxLQUFLLElBQUksR0FBRztJQUNyQjtJQUNBO0VBQ0o7QUFLSjs7QUFDQSwrREFBZUYsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9idWNrZXQuanM/YmI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCdWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGN0eCkge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAvLyB0aGlzLmRpbWVuc2lvbnMgPSBbd2lkdGgsIGhlaWdodF1cbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhd0J1Y2tldCgpIHtcbiAgICAgICAgLy8gdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgLy8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmFyYyh0aGlzLndpZHRoLzIsIHRoaXMuaGVpZ2h0LCAyNSwgMCwgTWF0aC5QSSk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcikge1xuICAgICAgICBpZiAoZGlyID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggKz0gMTAwO1xuICAgICAgICB9IGVsc2UgaWYgKGRpciA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggLT0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuZHJhd0J1Y2tldCgpO1xuICAgIH1cblxuICAgIFxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IEJ1Y2tldDsiXSwibmFtZXMiOlsiQnVja2V0IiwiY29uc3RydWN0b3IiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImRyYXdCdWNrZXQiLCJtb3ZlIiwiZGlyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/bucket.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
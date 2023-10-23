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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_bucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/bucket.js */ \"./src/scripts/bucket.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './scripts/game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// import Example from \"./scripts/example\";\n\n\n// const audioContext = new audioContext();\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext('2d');\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  let game = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './scripts/game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(canvas, ctx);\n  game.run();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDeUM7QUFDSjtBQUNyQzs7QUFFQUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ3JELE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DSCxNQUFNLENBQUNJLEtBQUssR0FBSUMsTUFBTSxDQUFDQyxVQUFXO0VBQ2xDTixNQUFNLENBQUNPLE1BQU0sR0FBSUYsTUFBTSxDQUFDRyxXQUFZO0VBRXBDLElBQUlDLElBQUksR0FBRyxJQUFJWixnSkFBSSxDQUFDRyxNQUFNLEVBQUVFLEdBQUcsQ0FBQztFQUNoQ08sSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCBCdWNrZXQgZnJvbSBcIi4vc2NyaXB0cy9idWNrZXQuanNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuLy8gY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IGF1ZGlvQ29udGV4dCgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY2FudmFzLndpZHRoID0gKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY3R4KTtcbiAgICBnYW1lLnJ1bigpO1xufSkiXSwibmFtZXMiOlsiQnVja2V0IiwiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZ2FtZSIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bucket.js":
/*!*******************************!*\
  !*** ./src/scripts/bucket.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Bucket {\n  constructor(width, height, ctx) {\n    this.canvasWidth = width;\n    this.canvasHeight = height;\n    this.pos = this.canvasWidth / 2;\n    this.velocity = 0;\n    this.keys = {\n      right: {\n        pressed: false\n      },\n      left: {\n        pressed: false\n      }\n    };\n    this.ctx = ctx;\n    let boundArrowKeyDown = this.handleArrowKeyDown.bind(this);\n    let boundArrowKeyUp = this.handleArrowKeyUp.bind(this);\n    document.addEventListener(\"keydown\", e => {\n      boundArrowKeyDown(e);\n    });\n    document.addEventListener(\"keyup\", e => {\n      boundArrowKeyUp(e);\n    });\n  }\n  draw() {\n    let img = new Image();\n    img.src = \"src/scripts/half-sphere.png\";\n    img.onload = () => {\n      this.ctx.fillStyle = 'white';\n      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);\n      this.ctx.drawImage(img, this.pos, this.canvasHeight - 100, 100, 100);\n    };\n  }\n  update() {\n    this.draw();\n    this.velocity = 0;\n    if (this.keys.right.pressed && this.pos <= this.canvasWidth - 100) this.velocity = 3;else if (this.keys.left.pressed && this.pos >= 0) this.velocity = -3;\n    this.pos += this.velocity;\n  }\n  handleArrowKeyDown(e) {\n    switch (e.key) {\n      case \"ArrowRight\":\n        this.keys.right.pressed = true;\n        break;\n      case \"ArrowLeft\":\n        this.keys.left.pressed = true;\n        break;\n    }\n  }\n  handleArrowKeyUp(e) {\n    switch (e.key) {\n      case \"ArrowRight\":\n        this.keys.right.pressed = false;\n        break;\n      case \"ArrowLeft\":\n        this.keys.left.pressed = false;\n        break;\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bucket);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUU7SUFDaEIsUUFBUUEsQ0FBQyxDQUFDVSxHQUFHO01BQ1QsS0FBSyxZQUFZO1FBQ2IsSUFBSSxDQUFDckIsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLO1FBQy9CO01BQ0osS0FBSyxXQUFXO1FBQ1osSUFBSSxDQUFDRixJQUFJLENBQUNHLElBQUksQ0FBQ0QsT0FBTyxHQUFHLEtBQUs7UUFDOUI7SUFDUjtFQUNKO0FBRUo7QUFDQSwrREFBZVgsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9idWNrZXQuanM/YmI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCdWNrZXQge1xuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQsIGN0eCkge1xuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuY2FudmFzV2lkdGgvMjsgXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgICAgICB0aGlzLmtleXMgPSB7XG4gICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG5cbiAgICAgICAgbGV0IGJvdW5kQXJyb3dLZXlEb3duID0gdGhpcy5oYW5kbGVBcnJvd0tleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgbGV0IGJvdW5kQXJyb3dLZXlVcCA9IHRoaXMuaGFuZGxlQXJyb3dLZXlVcC5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgYm91bmRBcnJvd0tleURvd24oZSk7XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgYm91bmRBcnJvd0tleVVwKGUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IFwic3JjL3NjcmlwdHMvaGFsZi1zcGhlcmUucG5nXCI7XG4gICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXNXaWR0aCwgdGhpcy5jYW52YXNIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgdGhpcy5wb3MsIHRoaXMuY2FudmFzSGVpZ2h0LTEwMCwgMTAwLCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIGlmICh0aGlzLmtleXMucmlnaHQucHJlc3NlZCAmJiB0aGlzLnBvcyA8PSB0aGlzLmNhbnZhc1dpZHRoLTEwMCkgdGhpcy52ZWxvY2l0eSA9IDM7XG4gICAgICAgIGVsc2UgaWYgKHRoaXMua2V5cy5sZWZ0LnByZXNzZWQgJiYgdGhpcy5wb3MgPj0gMCkgdGhpcy52ZWxvY2l0eSA9IC0zO1xuICAgICAgICB0aGlzLnBvcyArPSB0aGlzLnZlbG9jaXR5O1xuICAgIH1cblxuICAgIGhhbmRsZUFycm93S2V5RG93bihlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMua2V5cy5sZWZ0LnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJyb3dLZXlVcChlKSB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmtleXMubGVmdC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEJ1Y2tldDsiXSwibmFtZXMiOlsiQnVja2V0IiwiY29uc3RydWN0b3IiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwicG9zIiwidmVsb2NpdHkiLCJrZXlzIiwicmlnaHQiLCJwcmVzc2VkIiwibGVmdCIsImJvdW5kQXJyb3dLZXlEb3duIiwiaGFuZGxlQXJyb3dLZXlEb3duIiwiYmluZCIsImJvdW5kQXJyb3dLZXlVcCIsImhhbmRsZUFycm93S2V5VXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZHJhdyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1hZ2UiLCJ1cGRhdGUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/bucket.js\n");

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
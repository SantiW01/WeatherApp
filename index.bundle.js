/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GetTemperatureInfo.js":
/*!***********************************!*\
  !*** ./src/GetTemperatureInfo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetTemperatureInfo)
/* harmony export */ });
/* harmony import */ var _SetCIty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetCIty */ "./src/SetCIty.js");


async function GetTemperatureInfo() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${_SetCIty__WEBPACK_IMPORTED_MODULE_0__.CityCoord.getLatitude}&lon=${_SetCIty__WEBPACK_IMPORTED_MODULE_0__.CityCoord.getLongitude}&appid=${"b4854d5c455653b82f2010a542affb87"}`,
    { mode: "cors" }
  );
  const result = await response.json();
}


/***/ }),

/***/ "./src/GetUserInput.js":
/*!*****************************!*\
  !*** ./src/GetUserInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   City: () => (/* binding */ City),
/* harmony export */   GetUserInput: () => (/* binding */ GetUserInput)
/* harmony export */ });
/* harmony import */ var _SetCIty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetCIty */ "./src/SetCIty.js");

const City = {
  name: "",

  get getName() {
    return this.name;
  },

  set setName(valueCityName) {
    this.name = valueCityName;
  },
};

function GetUserInput() {
  const userInput = document.querySelector(".user_input").value;
  City.setName = userInput;
  (0,_SetCIty__WEBPACK_IMPORTED_MODULE_0__["default"])(City.getName);
}




/***/ }),

/***/ "./src/SetCIty.js":
/*!************************!*\
  !*** ./src/SetCIty.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CityCoord: () => (/* binding */ CityCoord),
/* harmony export */   "default": () => (/* binding */ SetCity)
/* harmony export */ });
/* harmony import */ var _GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetTemperatureInfo */ "./src/GetTemperatureInfo.js");


const CityCoord = {
  latitude: 0,
  longitude: 0,

  get getLatitude() {
    return this.latitude;
  },

  get getLongitude() {
    return this.longitude;
  },

  set setLatitude(valueLatitude) {
    this.latitude = valueLatitude;
  },

  set setLongitude(valueLongitude) {
    this.longitude = valueLongitude;
  },
};
async function SetCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${"b4854d5c455653b82f2010a542affb87"}`,
    { mode: "cors" }
  );
  const result = await response.json();
  CityCoord.setLatitude = result[0].lat;
  CityCoord.setLongitude = result[0].lon;
  (0,_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__["default"])();
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GetUserInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetUserInput */ "./src/GetUserInput.js");


document.querySelector(".input_submit").addEventListener("click", _GetUserInput__WEBPACK_IMPORTED_MODULE_0__.GetUserInput);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzQzs7QUFFdkI7QUFDZjtBQUNBLDJEQUEyRCwrQ0FBUyxhQUFhLE9BQU8sK0NBQVMsY0FBYyxTQUFTLGtDQUFtQixDQUFDO0FBQzVJLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxFQUFFLG9EQUFPO0FBQ1Q7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0M7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ2U7QUFDZjtBQUNBLHVEQUF1RCxLQUFLLGlCQUFpQixrQ0FBbUIsQ0FBQztBQUNqRyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFrQjtBQUNwQjs7QUFFcUI7Ozs7Ozs7VUNqQ3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7O0FBRTlDLGtFQUFrRSx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvR2V0VGVtcGVyYXR1cmVJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvR2V0VXNlcklucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvU2V0Q0l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXR5Q29vcmQgfSBmcm9tIFwiLi9TZXRDSXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEdldFRlbXBlcmF0dXJlSW5mbygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Q2l0eUNvb3JkLmdldExhdGl0dWRlfSZsb249JHtDaXR5Q29vcmQuZ2V0TG9uZ2l0dWRlfSZhcHBpZD0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuIiwiaW1wb3J0IFNldENpdHkgZnJvbSBcIi4vU2V0Q0l0eVwiO1xuY29uc3QgQ2l0eSA9IHtcbiAgbmFtZTogXCJcIixcblxuICBnZXQgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuXG4gIHNldCBzZXROYW1lKHZhbHVlQ2l0eU5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSB2YWx1ZUNpdHlOYW1lO1xuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFVzZXJJbnB1dCgpIHtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyX2lucHV0XCIpLnZhbHVlO1xuICBDaXR5LnNldE5hbWUgPSB1c2VySW5wdXQ7XG4gIFNldENpdHkoQ2l0eS5nZXROYW1lKTtcbn1cblxuZXhwb3J0IHsgQ2l0eSB9O1xuIiwiaW1wb3J0IEdldFRlbXBlcmF0dXJlSW5mbyBmcm9tIFwiLi9HZXRUZW1wZXJhdHVyZUluZm9cIjtcblxuY29uc3QgQ2l0eUNvb3JkID0ge1xuICBsYXRpdHVkZTogMCxcbiAgbG9uZ2l0dWRlOiAwLFxuXG4gIGdldCBnZXRMYXRpdHVkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXRpdHVkZTtcbiAgfSxcblxuICBnZXQgZ2V0TG9uZ2l0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmxvbmdpdHVkZTtcbiAgfSxcblxuICBzZXQgc2V0TGF0aXR1ZGUodmFsdWVMYXRpdHVkZSkge1xuICAgIHRoaXMubGF0aXR1ZGUgPSB2YWx1ZUxhdGl0dWRlO1xuICB9LFxuXG4gIHNldCBzZXRMb25naXR1ZGUodmFsdWVMb25naXR1ZGUpIHtcbiAgICB0aGlzLmxvbmdpdHVkZSA9IHZhbHVlTG9uZ2l0dWRlO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFNldENpdHkoY2l0eSkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTUmYXBwaWQ9JHtwcm9jZXNzLmVudi5BUElfS0VZfWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgQ2l0eUNvb3JkLnNldExhdGl0dWRlID0gcmVzdWx0WzBdLmxhdDtcbiAgQ2l0eUNvb3JkLnNldExvbmdpdHVkZSA9IHJlc3VsdFswXS5sb247XG4gIEdldFRlbXBlcmF0dXJlSW5mbygpO1xufVxuXG5leHBvcnQgeyBDaXR5Q29vcmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2V0VXNlcklucHV0IH0gZnJvbSBcIi4vR2V0VXNlcklucHV0XCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRfc3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBHZXRVc2VySW5wdXQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
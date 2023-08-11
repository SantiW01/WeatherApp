/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/GetUserInput.js":
/*!*****************************!*\
  !*** ./src/GetUserInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetUserInput: () => (/* binding */ GetUserInput),
/* harmony export */   city: () => (/* binding */ city)
/* harmony export */ });
/* harmony import */ var _SetCIty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SetCIty */ "./src/SetCIty.js");

const city = {
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
  city.setName = userInput;
  (0,_SetCIty__WEBPACK_IMPORTED_MODULE_0__["default"])(city.getName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEVBQUUsb0RBQU87QUFDVDs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ2U7QUFDZjtBQUNBLHVEQUF1RCxLQUFLLGlCQUFpQixrQ0FBbUIsQ0FBQztBQUNqRyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7VUM5QnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7O0FBRTlDLGtFQUFrRSx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvR2V0VXNlcklucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvU2V0Q0l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2V0Q2l0eSBmcm9tIFwiLi9TZXRDSXR5XCI7XG5jb25zdCBjaXR5ID0ge1xuICBuYW1lOiBcIlwiLFxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG5cbiAgc2V0IHNldE5hbWUodmFsdWVDaXR5TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlQ2l0eU5hbWU7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlcklucHV0KCkge1xuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfaW5wdXRcIikudmFsdWU7XG4gIGNpdHkuc2V0TmFtZSA9IHVzZXJJbnB1dDtcbiAgU2V0Q2l0eShjaXR5LmdldE5hbWUpO1xufVxuXG5leHBvcnQgeyBjaXR5IH07XG4iLCJjb25zdCBDaXR5Q29vcmQgPSB7XG4gIGxhdGl0dWRlOiAwLFxuICBsb25naXR1ZGU6IDAsXG5cbiAgZ2V0IGdldExhdGl0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmxhdGl0dWRlO1xuICB9LFxuXG4gIGdldCBnZXRMb25naXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9uZ2l0dWRlO1xuICB9LFxuXG4gIHNldCBzZXRMYXRpdHVkZSh2YWx1ZUxhdGl0dWRlKSB7XG4gICAgdGhpcy5sYXRpdHVkZSA9IHZhbHVlTGF0aXR1ZGU7XG4gIH0sXG5cbiAgc2V0IHNldExvbmdpdHVkZSh2YWx1ZUxvbmdpdHVkZSkge1xuICAgIHRoaXMubG9uZ2l0dWRlID0gdmFsdWVMb25naXR1ZGU7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2V0Q2l0eShjaXR5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9NSZhcHBpZD0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBDaXR5Q29vcmQuc2V0TGF0aXR1ZGUgPSByZXN1bHRbMF0ubGF0O1xuICBDaXR5Q29vcmQuc2V0TG9uZ2l0dWRlID0gcmVzdWx0WzBdLmxvbjtcbn1cblxuZXhwb3J0IHsgQ2l0eUNvb3JkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdldFVzZXJJbnB1dCB9IGZyb20gXCIuL0dldFVzZXJJbnB1dFwiO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0X3N1Ym1pdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2V0VXNlcklucHV0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
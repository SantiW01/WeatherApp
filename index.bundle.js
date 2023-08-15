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
/* harmony import */ var _ShowTemperatureInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowTemperatureInfo */ "./src/ShowTemperatureInfo.js");



const Info = {
  Temperature: 0,
  FeelsLike: 0,
  TemperatureMin: 0,
  TemperatureMax: 0,

  get getTemperature() {
    return this.Temperature;
  },

  set setTemperature(valueTemperature) {
    this.Temperature = valueTemperature;
  },

  get getFeelsLike() {
    return this.FeelsLike;
  },

  set setFeelsLike(valueFeelsLike) {
    this.FeelsLike = valueFeelsLike;
  },

  get getTemperatureMin() {
    return this.TemperatureMin;
  },

  set setTemperatureMin(valueTemperatureMin) {
    this.TemperatureMin = valueTemperatureMin;
  },

  get getTemperatureMax() {
    return this.TemperatureMax;
  },

  set setTemperatureMax(valueTemperatureMax) {
    this.TemperatureMax = valueTemperatureMax;
  },
};

async function GetTemperatureInfo() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${_SetCIty__WEBPACK_IMPORTED_MODULE_0__.CityCoord.getLatitude}&lon=${_SetCIty__WEBPACK_IMPORTED_MODULE_0__.CityCoord.getLongitude}&units=metric&appid=${"b4854d5c455653b82f2010a542affb87"}`,
    { mode: "cors" }
  );
  const result = await response.json();
  console.log(result.main.temp);

  Info.setTemperature = result.main.temp;
  Info.setFeelsLike = result.main.feels_like;
  Info.setTemperatureMin = result.main.temp_min;
  Info.setTemperatureMax = result.main.temp_max;
  (0,_ShowTemperatureInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(
    Info.getTemperature,
    Info.getFeelsLike,
    Info.getTemperatureMin,
    Info.getTemperatureMax
  );
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




/***/ }),

/***/ "./src/ShowTemperatureInfo.js":
/*!************************************!*\
  !*** ./src/ShowTemperatureInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowTemperatureInfo)
/* harmony export */ });
/* harmony import */ var _GetUserInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetUserInput */ "./src/GetUserInput.js");


function ShowTemperatureInfo(
  currentTemperature,
  currentFeelsLike,
  maxTemperature,
  minTemperature
) {
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h2"), {
      textContent: `${_GetUserInput__WEBPACK_IMPORTED_MODULE_0__.City.getName}`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h3"), {
      textContent: `${currentTemperature}°C`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h4"), {
      textContent: `${currentFeelsLike}°C`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("div"), {
      classList: "minMax_temp",
    })
  );
  document.querySelector(".minMax_temp").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${minTemperature}°C`,
    })
  );
  document.querySelector(".minMax_temp").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${maxTemperature}°C`,
    })
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDa0I7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZTtBQUNmO0FBQ0EsMkRBQTJELCtDQUFTLGFBQWEsT0FBTywrQ0FBUyxjQUFjLHNCQUFzQixrQ0FBbUIsQ0FBQztBQUN6SixNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVEZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEVBQUUsb0RBQU87QUFDVDs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJzQzs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDZTtBQUNmO0FBQ0EsdURBQXVELEtBQUssaUJBQWlCLGtDQUFtQixDQUFDO0FBQ2pHLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0RBQWtCO0FBQ3BCOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDaUI7O0FBRXZCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0NBQUksU0FBUztBQUNuQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7O0FBRTlDLGtFQUFrRSx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvR2V0VGVtcGVyYXR1cmVJbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvR2V0VXNlcklucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvU2V0Q0l0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL1Nob3dUZW1wZXJhdHVyZUluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2l0eUNvb3JkIH0gZnJvbSBcIi4vU2V0Q0l0eVwiO1xuaW1wb3J0IFNob3dUZW1wZXJhdHVyZUluZm8gZnJvbSBcIi4vU2hvd1RlbXBlcmF0dXJlSW5mb1wiO1xuXG5jb25zdCBJbmZvID0ge1xuICBUZW1wZXJhdHVyZTogMCxcbiAgRmVlbHNMaWtlOiAwLFxuICBUZW1wZXJhdHVyZU1pbjogMCxcbiAgVGVtcGVyYXR1cmVNYXg6IDAsXG5cbiAgZ2V0IGdldFRlbXBlcmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLlRlbXBlcmF0dXJlO1xuICB9LFxuXG4gIHNldCBzZXRUZW1wZXJhdHVyZSh2YWx1ZVRlbXBlcmF0dXJlKSB7XG4gICAgdGhpcy5UZW1wZXJhdHVyZSA9IHZhbHVlVGVtcGVyYXR1cmU7XG4gIH0sXG5cbiAgZ2V0IGdldEZlZWxzTGlrZSgpIHtcbiAgICByZXR1cm4gdGhpcy5GZWVsc0xpa2U7XG4gIH0sXG5cbiAgc2V0IHNldEZlZWxzTGlrZSh2YWx1ZUZlZWxzTGlrZSkge1xuICAgIHRoaXMuRmVlbHNMaWtlID0gdmFsdWVGZWVsc0xpa2U7XG4gIH0sXG5cbiAgZ2V0IGdldFRlbXBlcmF0dXJlTWluKCkge1xuICAgIHJldHVybiB0aGlzLlRlbXBlcmF0dXJlTWluO1xuICB9LFxuXG4gIHNldCBzZXRUZW1wZXJhdHVyZU1pbih2YWx1ZVRlbXBlcmF0dXJlTWluKSB7XG4gICAgdGhpcy5UZW1wZXJhdHVyZU1pbiA9IHZhbHVlVGVtcGVyYXR1cmVNaW47XG4gIH0sXG5cbiAgZ2V0IGdldFRlbXBlcmF0dXJlTWF4KCkge1xuICAgIHJldHVybiB0aGlzLlRlbXBlcmF0dXJlTWF4O1xuICB9LFxuXG4gIHNldCBzZXRUZW1wZXJhdHVyZU1heCh2YWx1ZVRlbXBlcmF0dXJlTWF4KSB7XG4gICAgdGhpcy5UZW1wZXJhdHVyZU1heCA9IHZhbHVlVGVtcGVyYXR1cmVNYXg7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBHZXRUZW1wZXJhdHVyZUluZm8oKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke0NpdHlDb29yZC5nZXRMYXRpdHVkZX0mbG9uPSR7Q2l0eUNvb3JkLmdldExvbmdpdHVkZX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHJlc3VsdC5tYWluLnRlbXApO1xuXG4gIEluZm8uc2V0VGVtcGVyYXR1cmUgPSByZXN1bHQubWFpbi50ZW1wO1xuICBJbmZvLnNldEZlZWxzTGlrZSA9IHJlc3VsdC5tYWluLmZlZWxzX2xpa2U7XG4gIEluZm8uc2V0VGVtcGVyYXR1cmVNaW4gPSByZXN1bHQubWFpbi50ZW1wX21pbjtcbiAgSW5mby5zZXRUZW1wZXJhdHVyZU1heCA9IHJlc3VsdC5tYWluLnRlbXBfbWF4O1xuICBTaG93VGVtcGVyYXR1cmVJbmZvKFxuICAgIEluZm8uZ2V0VGVtcGVyYXR1cmUsXG4gICAgSW5mby5nZXRGZWVsc0xpa2UsXG4gICAgSW5mby5nZXRUZW1wZXJhdHVyZU1pbixcbiAgICBJbmZvLmdldFRlbXBlcmF0dXJlTWF4XG4gICk7XG59XG4iLCJpbXBvcnQgU2V0Q2l0eSBmcm9tIFwiLi9TZXRDSXR5XCI7XG5jb25zdCBDaXR5ID0ge1xuICBuYW1lOiBcIlwiLFxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG5cbiAgc2V0IHNldE5hbWUodmFsdWVDaXR5TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlQ2l0eU5hbWU7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlcklucHV0KCkge1xuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfaW5wdXRcIikudmFsdWU7XG4gIENpdHkuc2V0TmFtZSA9IHVzZXJJbnB1dDtcbiAgU2V0Q2l0eShDaXR5LmdldE5hbWUpO1xufVxuXG5leHBvcnQgeyBDaXR5IH07XG4iLCJpbXBvcnQgR2V0VGVtcGVyYXR1cmVJbmZvIGZyb20gXCIuL0dldFRlbXBlcmF0dXJlSW5mb1wiO1xuXG5jb25zdCBDaXR5Q29vcmQgPSB7XG4gIGxhdGl0dWRlOiAwLFxuICBsb25naXR1ZGU6IDAsXG5cbiAgZ2V0IGdldExhdGl0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmxhdGl0dWRlO1xuICB9LFxuXG4gIGdldCBnZXRMb25naXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9uZ2l0dWRlO1xuICB9LFxuXG4gIHNldCBzZXRMYXRpdHVkZSh2YWx1ZUxhdGl0dWRlKSB7XG4gICAgdGhpcy5sYXRpdHVkZSA9IHZhbHVlTGF0aXR1ZGU7XG4gIH0sXG5cbiAgc2V0IHNldExvbmdpdHVkZSh2YWx1ZUxvbmdpdHVkZSkge1xuICAgIHRoaXMubG9uZ2l0dWRlID0gdmFsdWVMb25naXR1ZGU7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2V0Q2l0eShjaXR5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9NSZhcHBpZD0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBDaXR5Q29vcmQuc2V0TGF0aXR1ZGUgPSByZXN1bHRbMF0ubGF0O1xuICBDaXR5Q29vcmQuc2V0TG9uZ2l0dWRlID0gcmVzdWx0WzBdLmxvbjtcbiAgR2V0VGVtcGVyYXR1cmVJbmZvKCk7XG59XG5cbmV4cG9ydCB7IENpdHlDb29yZCB9O1xuIiwiaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuL0dldFVzZXJJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG93VGVtcGVyYXR1cmVJbmZvKFxuICBjdXJyZW50VGVtcGVyYXR1cmUsXG4gIGN1cnJlbnRGZWVsc0xpa2UsXG4gIG1heFRlbXBlcmF0dXJlLFxuICBtaW5UZW1wZXJhdHVyZVxuKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19jYXJkXCIpLmFwcGVuZENoaWxkKFxuICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpLCB7XG4gICAgICB0ZXh0Q29udGVudDogYCR7Q2l0eS5nZXROYW1lfWAsXG4gICAgfSlcbiAgKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvX2NhcmRcIikuYXBwZW5kQ2hpbGQoXG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIiksIHtcbiAgICAgIHRleHRDb250ZW50OiBgJHtjdXJyZW50VGVtcGVyYXR1cmV9wrBDYCxcbiAgICB9KVxuICApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fY2FyZFwiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKSwge1xuICAgICAgdGV4dENvbnRlbnQ6IGAke2N1cnJlbnRGZWVsc0xpa2V9wrBDYCxcbiAgICB9KVxuICApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fY2FyZFwiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICAgIGNsYXNzTGlzdDogXCJtaW5NYXhfdGVtcFwiLFxuICAgIH0pXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluTWF4X3RlbXBcIikuYXBwZW5kQ2hpbGQoXG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSwge1xuICAgICAgdGV4dENvbnRlbnQ6IGAke21pblRlbXBlcmF0dXJlfcKwQ2AsXG4gICAgfSlcbiAgKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5NYXhfdGVtcFwiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLCB7XG4gICAgICB0ZXh0Q29udGVudDogYCR7bWF4VGVtcGVyYXR1cmV9wrBDYCxcbiAgICB9KVxuICApO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHZXRVc2VySW5wdXQgfSBmcm9tIFwiLi9HZXRVc2VySW5wdXRcIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdldFVzZXJJbnB1dCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
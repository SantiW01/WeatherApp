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
/* harmony export */   Info: () => (/* binding */ Info),
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

  Info.setTemperature = result.main.temp;
  Info.setFeelsLike = result.main.feels_like;
  Info.setTemperatureMin = result.main.temp_min;
  Info.setTemperatureMax = result.main.temp_max;
  (0,_ShowTemperatureInfo__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
/* harmony export */   ChangeUnits: () => (/* binding */ ChangeUnits),
/* harmony export */   "default": () => (/* binding */ ShowTemperatureInfo)
/* harmony export */ });
/* harmony import */ var _GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetTemperatureInfo */ "./src/GetTemperatureInfo.js");
/* harmony import */ var _GetUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetUserInput */ "./src/GetUserInput.js");


let isCelsius = true;

function ShowTemperatureInfo() {
  document.querySelector(".info_card").replaceChildren();
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h2"), {
      textContent: `${_GetUserInput__WEBPACK_IMPORTED_MODULE_1__.City.getName}`,
      classList: "city_name",
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h3"), {
      textContent: `${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperature}°C`,
      classList: "city_temperature",
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h4"), {
      textContent: `${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getFeelsLike}°C`,
      classList: "city_feelslike",
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("div"), {
      classList: "minMax_tempC",
    })
  );
  document.querySelector(".minMax_tempC").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.TemperatureMin}°C`,
      classList: "min_temp",
    })
  );
  document.querySelector(".minMax_tempC").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperatureMax}°C`,
      id: "celsius",
      classList: "max_temp",
    })
  );
}

function ChangeUnits() {
  isCelsius = !isCelsius;
  if (!isCelsius) {
    document
      .querySelector(".city_temperature")
      .replaceChildren(
        document.createTextNode(
          `${(_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperature * (9 / 5) + 32).toFixed(2)} °F`
        )
      );
    document
      .querySelector(".city_feelslike")
      .replaceChildren(
        document.createTextNode(
          `${(_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getFeelsLike * (9 / 5) + 32).toFixed(2)}°F`
        )
      );
    document
      .querySelector(".min_temp")
      .replaceChildren(
        document.createTextNode(
          `${(_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperatureMin * (9 / 5) + 32).toFixed(2)}°F`
        )
      );
    document
      .querySelector(".max_temp")
      .replaceChildren(
        document.createTextNode(
          `${(_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperatureMax * (9 / 5) + 32).toFixed(2)}°F`
        )
      );
  } else {
    document
      .querySelector(".city_temperature")
      .replaceChildren(document.createTextNode(`${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperature}°C`));
    document
      .querySelector(".city_feelslike")
      .replaceChildren(document.createTextNode(`${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getFeelsLike}°C`));
    document
      .querySelector(".min_temp")
      .replaceChildren(document.createTextNode(`${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.TemperatureMin}°C`));
    document
      .querySelector(".max_temp")
      .replaceChildren(document.createTextNode(`${_GetTemperatureInfo__WEBPACK_IMPORTED_MODULE_0__.Info.getTemperatureMin}°C`));
  }
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
/* harmony import */ var _ShowTemperatureInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowTemperatureInfo */ "./src/ShowTemperatureInfo.js");



document.querySelector(".input_submit").addEventListener("click", _GetUserInput__WEBPACK_IMPORTED_MODULE_0__.GetUserInput);
document.querySelector(".info_card").addEventListener("click", _ShowTemperatureInfo__WEBPACK_IMPORTED_MODULE_1__.ChangeUnits);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QztBQUNNOztBQUVwRCxrRUFBa0UsdURBQVk7QUFDOUUsK0RBQStELDZEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9HZXRUZW1wZXJhdHVyZUluZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9HZXRVc2VySW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9TZXRDSXR5LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvU2hvd1RlbXBlcmF0dXJlSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaXR5Q29vcmQgfSBmcm9tIFwiLi9TZXRDSXR5XCI7XG5pbXBvcnQgU2hvd1RlbXBlcmF0dXJlSW5mbyBmcm9tIFwiLi9TaG93VGVtcGVyYXR1cmVJbmZvXCI7XG5cbmNvbnN0IEluZm8gPSB7XG4gIFRlbXBlcmF0dXJlOiAwLFxuICBGZWVsc0xpa2U6IDAsXG4gIFRlbXBlcmF0dXJlTWluOiAwLFxuICBUZW1wZXJhdHVyZU1heDogMCxcblxuICBnZXQgZ2V0VGVtcGVyYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuVGVtcGVyYXR1cmU7XG4gIH0sXG5cbiAgc2V0IHNldFRlbXBlcmF0dXJlKHZhbHVlVGVtcGVyYXR1cmUpIHtcbiAgICB0aGlzLlRlbXBlcmF0dXJlID0gdmFsdWVUZW1wZXJhdHVyZTtcbiAgfSxcblxuICBnZXQgZ2V0RmVlbHNMaWtlKCkge1xuICAgIHJldHVybiB0aGlzLkZlZWxzTGlrZTtcbiAgfSxcblxuICBzZXQgc2V0RmVlbHNMaWtlKHZhbHVlRmVlbHNMaWtlKSB7XG4gICAgdGhpcy5GZWVsc0xpa2UgPSB2YWx1ZUZlZWxzTGlrZTtcbiAgfSxcblxuICBnZXQgZ2V0VGVtcGVyYXR1cmVNaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuVGVtcGVyYXR1cmVNaW47XG4gIH0sXG5cbiAgc2V0IHNldFRlbXBlcmF0dXJlTWluKHZhbHVlVGVtcGVyYXR1cmVNaW4pIHtcbiAgICB0aGlzLlRlbXBlcmF0dXJlTWluID0gdmFsdWVUZW1wZXJhdHVyZU1pbjtcbiAgfSxcblxuICBnZXQgZ2V0VGVtcGVyYXR1cmVNYXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuVGVtcGVyYXR1cmVNYXg7XG4gIH0sXG5cbiAgc2V0IHNldFRlbXBlcmF0dXJlTWF4KHZhbHVlVGVtcGVyYXR1cmVNYXgpIHtcbiAgICB0aGlzLlRlbXBlcmF0dXJlTWF4ID0gdmFsdWVUZW1wZXJhdHVyZU1heDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEdldFRlbXBlcmF0dXJlSW5mbygpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7Q2l0eUNvb3JkLmdldExhdGl0dWRlfSZsb249JHtDaXR5Q29vcmQuZ2V0TG9uZ2l0dWRlfSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtwcm9jZXNzLmVudi5BUElfS0VZfWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBJbmZvLnNldFRlbXBlcmF0dXJlID0gcmVzdWx0Lm1haW4udGVtcDtcbiAgSW5mby5zZXRGZWVsc0xpa2UgPSByZXN1bHQubWFpbi5mZWVsc19saWtlO1xuICBJbmZvLnNldFRlbXBlcmF0dXJlTWluID0gcmVzdWx0Lm1haW4udGVtcF9taW47XG4gIEluZm8uc2V0VGVtcGVyYXR1cmVNYXggPSByZXN1bHQubWFpbi50ZW1wX21heDtcbiAgU2hvd1RlbXBlcmF0dXJlSW5mbygpO1xufVxuXG5leHBvcnQgeyBJbmZvIH07XG4iLCJpbXBvcnQgU2V0Q2l0eSBmcm9tIFwiLi9TZXRDSXR5XCI7XG5jb25zdCBDaXR5ID0ge1xuICBuYW1lOiBcIlwiLFxuXG4gIGdldCBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH0sXG5cbiAgc2V0IHNldE5hbWUodmFsdWVDaXR5TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlQ2l0eU5hbWU7XG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0VXNlcklucHV0KCkge1xuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfaW5wdXRcIikudmFsdWU7XG4gIENpdHkuc2V0TmFtZSA9IHVzZXJJbnB1dDtcbiAgU2V0Q2l0eShDaXR5LmdldE5hbWUpO1xufVxuXG5leHBvcnQgeyBDaXR5IH07XG4iLCJpbXBvcnQgR2V0VGVtcGVyYXR1cmVJbmZvIGZyb20gXCIuL0dldFRlbXBlcmF0dXJlSW5mb1wiO1xuXG5jb25zdCBDaXR5Q29vcmQgPSB7XG4gIGxhdGl0dWRlOiAwLFxuICBsb25naXR1ZGU6IDAsXG5cbiAgZ2V0IGdldExhdGl0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLmxhdGl0dWRlO1xuICB9LFxuXG4gIGdldCBnZXRMb25naXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9uZ2l0dWRlO1xuICB9LFxuXG4gIHNldCBzZXRMYXRpdHVkZSh2YWx1ZUxhdGl0dWRlKSB7XG4gICAgdGhpcy5sYXRpdHVkZSA9IHZhbHVlTGF0aXR1ZGU7XG4gIH0sXG5cbiAgc2V0IHNldExvbmdpdHVkZSh2YWx1ZUxvbmdpdHVkZSkge1xuICAgIHRoaXMubG9uZ2l0dWRlID0gdmFsdWVMb25naXR1ZGU7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2V0Q2l0eShjaXR5KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9NSZhcHBpZD0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBDaXR5Q29vcmQuc2V0TGF0aXR1ZGUgPSByZXN1bHRbMF0ubGF0O1xuICBDaXR5Q29vcmQuc2V0TG9uZ2l0dWRlID0gcmVzdWx0WzBdLmxvbjtcbiAgR2V0VGVtcGVyYXR1cmVJbmZvKCk7XG59XG5cbmV4cG9ydCB7IENpdHlDb29yZCB9O1xuIiwiaW1wb3J0IHsgSW5mbyB9IGZyb20gXCIuL0dldFRlbXBlcmF0dXJlSW5mb1wiO1xuaW1wb3J0IHsgQ2l0eSB9IGZyb20gXCIuL0dldFVzZXJJbnB1dFwiO1xubGV0IGlzQ2Vsc2l1cyA9IHRydWU7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dUZW1wZXJhdHVyZUluZm8oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19jYXJkXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fY2FyZFwiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKSwge1xuICAgICAgdGV4dENvbnRlbnQ6IGAke0NpdHkuZ2V0TmFtZX1gLFxuICAgICAgY2xhc3NMaXN0OiBcImNpdHlfbmFtZVwiLFxuICAgIH0pXG4gICk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb19jYXJkXCIpLmFwcGVuZENoaWxkKFxuICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpLCB7XG4gICAgICB0ZXh0Q29udGVudDogYCR7SW5mby5nZXRUZW1wZXJhdHVyZX3CsENgLFxuICAgICAgY2xhc3NMaXN0OiBcImNpdHlfdGVtcGVyYXR1cmVcIixcbiAgICB9KVxuICApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fY2FyZFwiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKSwge1xuICAgICAgdGV4dENvbnRlbnQ6IGAke0luZm8uZ2V0RmVlbHNMaWtlfcKwQ2AsXG4gICAgICBjbGFzc0xpc3Q6IFwiY2l0eV9mZWVsc2xpa2VcIixcbiAgICB9KVxuICApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fY2FyZFwiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICAgIGNsYXNzTGlzdDogXCJtaW5NYXhfdGVtcENcIixcbiAgICB9KVxuICApO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pbk1heF90ZW1wQ1wiKS5hcHBlbmRDaGlsZChcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLCB7XG4gICAgICB0ZXh0Q29udGVudDogYCR7SW5mby5UZW1wZXJhdHVyZU1pbn3CsENgLFxuICAgICAgY2xhc3NMaXN0OiBcIm1pbl90ZW1wXCIsXG4gICAgfSlcbiAgKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taW5NYXhfdGVtcENcIikuYXBwZW5kQ2hpbGQoXG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKSwge1xuICAgICAgdGV4dENvbnRlbnQ6IGAke0luZm8uZ2V0VGVtcGVyYXR1cmVNYXh9wrBDYCxcbiAgICAgIGlkOiBcImNlbHNpdXNcIixcbiAgICAgIGNsYXNzTGlzdDogXCJtYXhfdGVtcFwiLFxuICAgIH0pXG4gICk7XG59XG5cbmZ1bmN0aW9uIENoYW5nZVVuaXRzKCkge1xuICBpc0NlbHNpdXMgPSAhaXNDZWxzaXVzO1xuICBpZiAoIWlzQ2Vsc2l1cykge1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jaXR5X3RlbXBlcmF0dXJlXCIpXG4gICAgICAucmVwbGFjZUNoaWxkcmVuKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICBgJHsoSW5mby5nZXRUZW1wZXJhdHVyZSAqICg5IC8gNSkgKyAzMikudG9GaXhlZCgyKX0gwrBGYFxuICAgICAgICApXG4gICAgICApO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jaXR5X2ZlZWxzbGlrZVwiKVxuICAgICAgLnJlcGxhY2VDaGlsZHJlbihcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgYCR7KEluZm8uZ2V0RmVlbHNMaWtlICogKDkgLyA1KSArIDMyKS50b0ZpeGVkKDIpfcKwRmBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWluX3RlbXBcIilcbiAgICAgIC5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIGAkeyhJbmZvLmdldFRlbXBlcmF0dXJlTWluICogKDkgLyA1KSArIDMyKS50b0ZpeGVkKDIpfcKwRmBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWF4X3RlbXBcIilcbiAgICAgIC5yZXBsYWNlQ2hpbGRyZW4oXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgIGAkeyhJbmZvLmdldFRlbXBlcmF0dXJlTWF4ICogKDkgLyA1KSArIDMyKS50b0ZpeGVkKDIpfcKwRmBcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eV90ZW1wZXJhdHVyZVwiKVxuICAgICAgLnJlcGxhY2VDaGlsZHJlbihkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtJbmZvLmdldFRlbXBlcmF0dXJlfcKwQ2ApKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eV9mZWVsc2xpa2VcIilcbiAgICAgIC5yZXBsYWNlQ2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7SW5mby5nZXRGZWVsc0xpa2V9wrBDYCkpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5taW5fdGVtcFwiKVxuICAgICAgLnJlcGxhY2VDaGlsZHJlbihkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtJbmZvLlRlbXBlcmF0dXJlTWlufcKwQ2ApKTtcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWF4X3RlbXBcIilcbiAgICAgIC5yZXBsYWNlQ2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7SW5mby5nZXRUZW1wZXJhdHVyZU1pbn3CsENgKSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2hhbmdlVW5pdHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2V0VXNlcklucHV0IH0gZnJvbSBcIi4vR2V0VXNlcklucHV0XCI7XG5pbXBvcnQgeyBDaGFuZ2VVbml0cyB9IGZyb20gXCIuL1Nob3dUZW1wZXJhdHVyZUluZm9cIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dF9zdWJtaXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIEdldFVzZXJJbnB1dCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9fY2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgQ2hhbmdlVW5pdHMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
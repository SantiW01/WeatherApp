import { CityCoord } from "./SetCIty";
import ShowTemperatureInfo from "./ShowTemperatureInfo";

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

export default async function GetTemperatureInfo() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${CityCoord.getLatitude}&lon=${CityCoord.getLongitude}&units=metric&appid=${process.env.API_KEY}`,
    { mode: "cors" }
  );
  const result = await response.json();

  Info.setTemperature = result.main.temp;
  Info.setFeelsLike = result.main.feels_like;
  Info.setTemperatureMin = result.main.temp_min;
  Info.setTemperatureMax = result.main.temp_max;
  ShowTemperatureInfo();
}

export { Info };

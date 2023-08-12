import GetTemperatureInfo from "./GetTemperatureInfo";

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
export default async function SetCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.API_KEY}`,
    { mode: "cors" }
  );
  const result = await response.json();
  CityCoord.setLatitude = result[0].lat;
  CityCoord.setLongitude = result[0].lon;
  GetTemperatureInfo();
}

export { CityCoord };

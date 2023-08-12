import { CityCoord } from "./SetCIty";

export default async function GetTemperatureInfo() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${CityCoord.getLatitude}&lon=${CityCoord.getLongitude}&appid=${process.env.API_KEY}`,
    { mode: "cors" }
  );
  const result = await response.json();
}

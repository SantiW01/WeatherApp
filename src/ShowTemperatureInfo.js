import { Info } from "./GetTemperatureInfo";
import { City } from "./GetUserInput";
let isCelsius = true;

export default function ShowTemperatureInfo() {
  document.querySelector(".info_card").replaceChildren();
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h2"), {
      textContent: `${City.getName}`,
      classList: "city_name",
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h3"), {
      textContent: `${Info.getTemperature}°C`,
      classList: "city_temperature",
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h4"), {
      textContent: `${Info.getFeelsLike}°C`,
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
      textContent: `${Info.TemperatureMin}°C`,
      classList: "min_temp",
    })
  );
  document.querySelector(".minMax_tempC").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${Info.getTemperatureMax}°C`,
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
          `${(Info.getTemperature * (9 / 5) + 32).toFixed(2)} °F`
        )
      );
    document
      .querySelector(".city_feelslike")
      .replaceChildren(
        document.createTextNode(
          `${(Info.getFeelsLike * (9 / 5) + 32).toFixed(2)}°F`
        )
      );
    document
      .querySelector(".min_temp")
      .replaceChildren(
        document.createTextNode(
          `${(Info.getTemperatureMin * (9 / 5) + 32).toFixed(2)}°F`
        )
      );
    document
      .querySelector(".max_temp")
      .replaceChildren(
        document.createTextNode(
          `${(Info.getTemperatureMax * (9 / 5) + 32).toFixed(2)}°F`
        )
      );
  } else {
    document
      .querySelector(".city_temperature")
      .replaceChildren(document.createTextNode(`${Info.getTemperature}°C`));
    document
      .querySelector(".city_feelslike")
      .replaceChildren(document.createTextNode(`${Info.getFeelsLike}°C`));
    document
      .querySelector(".min_temp")
      .replaceChildren(document.createTextNode(`${Info.TemperatureMin}°C`));
    document
      .querySelector(".max_temp")
      .replaceChildren(document.createTextNode(`${Info.getTemperatureMin}°C`));
  }
}

export { ChangeUnits };

import { City } from "./GetUserInput";

export default function ShowTemperatureInfo(
  currentTemperature,
  currentFeelsLike,
  maxTemperature,
  minTemperature
) {
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h2"), {
      textContent: `${City.getName}`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h2"), {
      textContent: `${currentTemperature}°C`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("h3"), {
      textContent: `${currentFeelsLike}°C`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${minTemperature}°C`,
    })
  );
  document.querySelector(".info_card").appendChild(
    Object.assign(document.createElement("p"), {
      textContent: `${maxTemperature}°C`,
    })
  );
}

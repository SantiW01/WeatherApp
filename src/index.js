import { GetUserInput } from "./GetUserInput";
import { ChangeUnits } from "./ShowTemperatureInfo";

document.querySelector(".input_submit").addEventListener("click", GetUserInput);
document.querySelector(".info_card").addEventListener("click", ChangeUnits);

import SetCity from "./SetCIty";
const city = {
  name: "",

  get getName() {
    return this.name;
  },

  set setName(valueCityName) {
    this.name = valueCityName;
  },
};

export function GetUserInput() {
  const userInput = document.querySelector(".user_input").value;
  city.setName = userInput;
  SetCity(city.getName);
}

export { city };

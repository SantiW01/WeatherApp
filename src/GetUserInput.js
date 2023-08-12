import SetCity from "./SetCIty";
const City = {
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
  City.setName = userInput;
  SetCity(City.getName);
}

export { City };

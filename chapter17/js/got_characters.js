/*
Game of Thrones characters
*/

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

// Create and return an HTML <option> tag
const createOptionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

// Create and return and HTML <li> tag
const createLiElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};

const houseElement = document.querySelector("select");

// Fill the house list
houses.forEach(house => {
  houseElement.appendChild(createOptionElement(house.name, house.code));
});

// Handle house change event
houseElement.addEventListener("change", e => {
  // The value of the event target is the house code
  const characters = getCharacters(e.target.value);
  const characterElement = document.getElementById("characters");
  // Empty the list
  characterElement.innerHTML = "";
  // Add each character to the list
  characters.forEach(character => {
    characterElement.appendChild(createLiElement(character));
  });
});

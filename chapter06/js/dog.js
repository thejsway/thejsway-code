/* 
Object-oriented dog
*/

const dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,

  // Make the dog bark
  bark() {
    return "Woof! Woof!";
  }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

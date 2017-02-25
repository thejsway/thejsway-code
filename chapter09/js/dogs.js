/*
Dog objects
*/

const Dog = {
  // Initialize the dog
  init(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  },
  // Make the dog bark
  bark() {
    let sound = "Woof! Woof!";
    if (this.size > 60) {
      sound = "Grrr! Grrr!";
    }
    return sound;
  }
};

// Factory function to create and setup a new dog
function createDog(name, species, size) {
  const dog = Object.create(Dog);
  dog.init(name, species, size);
  return dog;
}

const fang = createDog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = createDog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

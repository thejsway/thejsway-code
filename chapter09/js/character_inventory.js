/*
Character inventory
*/

// Character prototype
const Character = {
  // Initialize the character
  init(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    // Inventory is managed by an object containg 2 properties
    this.inventory = {
      gold: 10,
      keys: 1
    };
  },
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points`);
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(`${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
                   + `, ${target.inventory.gold} gold and ${target.inventory.keys} key(s)`);
        this.xp += bonusXP;
        // The victim's inventory goes to its vanquisher
        this.inventory.gold += target.inventory.gold;
        this.inventory.keys += target.inventory.keys;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  },
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ` +
      `${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.keys} key(s)`;
  }
};

// Factory function to create and setup a new character
function createCharacter(name, health, strength) {
  const character = Object.create(Character);
  character.init(name, health, strength);
  return character;
}

const aurora = createCharacter("Aurora", 150, 25);
const glacius = createCharacter("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = createCharacter("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
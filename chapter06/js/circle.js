/*
Object-oriented circle
*/

const r = Number(prompt("Enter the circle radius:"));

const circle = {
  radius: r,

  // Return the circumference of the circle
  circumference() {
    return 2 * this.radius * Math.PI;
  },

  // Return the area of the circle
  area() {
    return this.radius ** 2 * Math.PI;
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

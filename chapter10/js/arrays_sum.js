/*
Arrays sum
*/

const arrays = [[1, 4], [11], [3, 5, 7]];

// Sums the elements of an array
const sumElements = array => array.reduce((acc, value) => acc + value, 0);

// Sum each sub-array and compute the total sum
const arraysSum = arrays.reduce((acc, array) => acc + sumElements(array), 0);

console.log(arraysSum); // 31

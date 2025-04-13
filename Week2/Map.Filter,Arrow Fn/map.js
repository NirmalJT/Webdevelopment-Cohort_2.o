//createing my own map method

Array.prototype.Map_N = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nirmalMap = numbers.Map_N((number) => number * 2);
console.log(nirmalMap);

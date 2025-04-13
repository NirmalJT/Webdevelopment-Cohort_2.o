Array.prototype.Filter_n = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Filter = numbers.Filter_n((number) => number % 2 === 0);
console.log(Filter);

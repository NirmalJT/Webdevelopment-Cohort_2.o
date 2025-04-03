/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let string = str.toLowerCase();
  let vowelCounts = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (vowels[i] === string[j]) {
        vowelCounts += 1;
      }
    }
  }
  return vowelCounts;
}
let str = "NirmalJyotiThakuria";

console.log(`Number of vowels in your given string is ${countVowels(str)}`);

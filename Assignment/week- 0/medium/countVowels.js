/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let string = str.toLowerCase();
  let countVowel = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (vowels[i] === string[j]) {
        countVowel += 1;
      }
    }
  }
  return countVowel;
}
let str = "NirmalJyotiThakuria";

console.log(countVowels(str));

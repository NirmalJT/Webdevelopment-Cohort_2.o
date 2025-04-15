/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase();
  let reverseStr = string.split("").reverse().join("");
  if (string === reverseStr) {
    return true;
  } else {
    return false;
  }
}
let str = "Nan";

console.log(isPalindrome(str));

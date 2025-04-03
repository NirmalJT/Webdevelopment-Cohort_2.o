/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let compStr = str.toLowerCase();
  let revStr = compStr.split("").reverse().join("");
  if (compStr === revStr) {
    console.log("Given String is palindrome");
  } else {
    console.log("Given string is not a palindrome");
  }
}

let str = "Nanaaa";
isPalindrome(str);

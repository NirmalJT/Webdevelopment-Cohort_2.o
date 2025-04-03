/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(`Your given strings ${str1} and ${str2} are not Anagram`);
    return;
  }
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  if (newStr1 === newStr2) {
    console.log(`Your given strings ${str1} and ${str2} are  Anagram`);
  } else {
    console.log(`Your given strings ${str1} and ${str2} are not Anagram`);
  }
  //   for (let i = 0; i < newStr1.length; i++) {
  //     if (newStr1[i] === newStr2[i]) {
  //       result += 1;
  //     } else {
  //       console.log(`Your given strings ${str1} and ${str2} are not Anagram`);
  //       break;
  //     }
  //   }
  //   if (result === newStr1.length) {
  //     console.log(`Your given strings ${str1} and ${str2} are  Anagram`);
  //   }
  // }
}

let str1 = "sparrtryr";
let str2 = "rasptryry";

isAnagram(str1, str2);

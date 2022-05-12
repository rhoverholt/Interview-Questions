// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  let letters = str.toLowerCase().split("");
  for (let idx = 0; idx < Math.ceil(letters.length / 2); idx++) {
    if (letters[idx] !== letters[letters.length - 1 - idx]) return false;
  }
  return true;
};

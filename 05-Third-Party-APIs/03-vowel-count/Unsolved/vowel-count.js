// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  return str
    .toLowerCase()
    .split("")
    .reduce(
      (prev, curr) =>
        ["a", "e", "i", "o", "u"].includes(curr) ? prev + 1 : prev,
      0
    );
};

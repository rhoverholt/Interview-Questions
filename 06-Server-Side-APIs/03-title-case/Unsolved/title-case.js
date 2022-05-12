// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  let words = str.split(" ");

  return words
    .reduce(
      (prev, curr) => prev + curr.charAt(0).toUpperCase() + curr.slice(1) + " ",
      ""
    )
    .trim();
};

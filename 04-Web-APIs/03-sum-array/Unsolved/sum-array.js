// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  //   let total = 0;
  //   for (el of arr) {
  //     total += el;
  //   }
  //   return total;

  return arr.reduce((prev, curr) => prev + curr);
};

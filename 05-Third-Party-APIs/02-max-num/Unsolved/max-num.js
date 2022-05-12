// Write code to return the largest number in the given array

var maxNum = function (arr) {
  //   let maxNum = arr[0];
  //   for (num of arr) {
  //     if (num > maxNum) maxNum = num;
  //   }
  //   return maxNum;

  //   return arr.reduce((prev, curr) => (curr > prev ? curr : prev));

  return Math.max.apply(null, arr);
};

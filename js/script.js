// Task №1
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(3));

// Task №2
// function pow(num, degree) {
//   if (degree === 0) {
//     return 1;
//   } if (degree > 0) {
//     return num * pow(num, degree - 1);
//   }
//   return 1 / (num * pow(num, -degree));
// }
// const result = pow(12, 6);
// console.log(result);

// Task №3
// function recursSum(a, b) {
//   if (b === 0) {
//     return a;
//   }
//   return recursSum(a + 1, b - 1);
// }
//
// const result = recursSum(17, 17);
// console.log(result);

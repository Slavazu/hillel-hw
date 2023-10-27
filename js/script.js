const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47,
];

// TASK #1
let sumPositiveNum = 0;
let qtyPositivesNum = 0;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] > 0) {
    sumPositiveNum += array[i];
    qtyPositivesNum += 1;
  }
}

console.log('Сума позитивних елементів:', sumPositiveNum);
console.log('Кількість позитивніх елементів:', qtyPositivesNum);

// TASK #2
// let minElement = array[0];
// let indexMinElement = 0;
//
// for (let i = 1; i < array.length; i += 1) {
//   if (array[i] < minElement) {
//     minElement = array[i];
//     indexMinElement = i;
//   }
// }
//
// console.log('Найменьший елемент масиву:', minElement);
// console.log('Порядковий номер найменшого елементу масиву:', indexMinElement);

// TASK #3
// let maxElement = array[0];
// let indexMaxElement = 0;
//
// for (let i = 1; i < array.length; i += 1) {
//   if (array[i] > maxElement) {
//     maxElement = array[i];
//     indexMaxElement = i;
//   }
// }
//
// console.log('Найбільший елемент:', maxElement);
// console.log('Порядковий номер найбільшого елементу:', indexMaxElement);

// TASK #4
// let qtyNegative = 0;
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] < 0) {
//     qtyNegative += 1;
//   }
// }
//
// console.log('Кфлькість негативних елементів:', qtyNegative);

// TASK #5
// let qtyOddPositive = 0;
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > 0 && array[i] % 2 !== 0) {
//     qtyOddPositive += 1;
//   }
// }
//
// console.log('Кількість непарних позитивних елементів:', qtyOddPositive);

// TASK #6
// let qtyEvenPositive = 0;
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > 0 && array[i] % 2 === 0) {
//     qtyEvenPositive += 1;
//   }
// }
//
// console.log('Кількість парних позитивних елементів:', qtyEvenPositive);

// TASK #7
// let sumEvenPositive = 0;
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > 0 && array[i] % 2 === 0) {
//     sumEvenPositive += array[i];
//   }
// }
//
// console.log('Сума парних позитивних елементів:', sumEvenPositive);

// TASK #8
// let sumOddPositive = 0;
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > 0 && array[i] % 2 !== 0) {
//     sumOddPositive += array[i];
//   }
// }
//
// console.log('Сума непарних позитивних елементів:', sumOddPositive);

// TASK #9
// let multiplyPositive = 1;
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > 0) {
//     multiplyPositive *= array[i];
//   }
// }
//
// console.log('Результат множення позитивних елементів:', multiplyPositive);

// TASK #10
// let maxElement = array[0];
//
// for (let i = 1; i < array.length; i += 1) {
//   if (array[i] > maxElement) {
//     maxElement = array[i];
//   }
// }
//
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] !== maxElement) {
//     array[i] = 0;
//   }
// }
//
// console.log('Обнуління всіх елементів, крім найбільшого:', array);

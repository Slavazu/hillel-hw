const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47,
];

// TASK #1
const sumPositiveNum = array.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
const qtyPositivesNum = array.filter((num) => num > 0).length;

console.log('Сума позитивних елементів:', sumPositiveNum);
console.log('Кількість позитивніх елементів:', qtyPositivesNum);

// // TASK #2
// const minElement = Math.min.apply(null, array);
// const indexMinElement = array.indexOf(minElement);
//
// console.log('Найменьший елемент масиву:', minElement);
// console.log('Порядковий номер найменшого елементу масиву:', indexMinElement);
//
// // TASK #3
// const maxElement = Math.max.apply(null, array);
// const indexMaxElement = array.indexOf(maxElement);
//
// console.log('Найбільший елемент:', maxElement);
// console.log('Порядковий номер найбільшого елементу:', indexMaxElement);
//
// // TASK #4
// const qtyNegative = array.filter(num => num < 0).length;
//
// console.log('Кількість негативних елементів:', qtyNegative);
//
// // TASK #5
// const qtyOddPositive = array.filter(num => num > 0 && num % 2 !== 0).length;
//
// console.log('Кількість непарних позитивних елементів:', qtyOddPositive);
//
// // TASK #6
// const qtyEvenPositive = array.filter(num => num > 0 && num % 2 === 0).length;
//
// console.log('Кількість парних позитивних елементів:', qtyEvenPositive);
//
// // TASK #7
// const sumEvenPositive = array.filter(num => num > 0 && num % 2 === 0).reduce((sum, num) => sum + num, 0);
//
// console.log('Сума парних позитивних елементів:', sumEvenPositive);
//
// // TASK #8
// const sumOddPositive = array.filter(num => num > 0 && num % 2 !== 0).reduce((sum, num) => sum + num, 0);
//
// console.log('Сума непарних позитивних елементів:', sumOddPositive);
//
// // TASK #9
// const multiplyPositive = array.filter(num => num > 0).reduce((product, num) => product * num, 1);
//
// console.log('Результат множення позитивних елементів:', multiplyPositive);
//
// // TASK #10
// const maxElement = Math.max.apply(null, array);
// const resultArray = array.map(num => num === maxElement ? num : 0);
//
// console.log('Обнуління всіх елементів, крім найбільшого:', resultArray);

const mainFunction = (callback) => {
    const num1 = +prompt('Введіть перше число:')
    const num2 = +prompt('Введіть друге число:')

    if (!isNaN(num1) && !isNaN(num2)) {
        callback(num1, num2)
    } else {
        alert('Виникла помилка')
    }
}
const exponentiation = (num1, num2) => {
    const result = num1 ** num2
    alert(`${result}`)
}

mainFunction(exponentiation)

// ДОДАТКОВЕ MULTIPLY

// const multiply = (num1, num2) => {
//     const result = num1 * num2
//     alert(`${result}`)
// }
//
// mainFunction(multiply)

// ДОДАТКОВЕ DIVISION

// const division = (num1, num2) => {
//   if (num2 === 0) {
//     if (num1 === 0) {
//       alert('NaN');
//     } else if (num1 > 0) {
//       alert('Infinity');
//     } else if (num1 < 0) {
//       alert('-Infinity');
//     }
//   } else {
//     const result = num1 / num2;
//     alert(`${result}`);
//   }
// };
//
// mainFunction(division);

// ДОДАТКОВЕ MODULO

// const modulo = (num1, num2) => {
//     if (num2 === 0) {
//         if (num1 === 0) {
//             alert('NaN')
//         } else if (num1 > 0) {
//             alert('infinity')
//         } else if (num1 < 0) {
//             alert('-infinity')
//         }
//     } else {
//         const result = num1 % num2
//         alert(`${result}`)
//     }
// }
//
// mainFunction(modulo)

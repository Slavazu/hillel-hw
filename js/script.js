'use strict';
const operand1 = parseFloat(prompt("Введіть перший операнд:"));
const operand2 = parseFloat(prompt("Введіть другий операнд:"));
function add(a, b) {
    const result = a + b;
    console.log(`result: ${a} + ${b} = ${result}`);
}function subtract(a, b) {
    const result = a - b;
    console.log(`result: ${a} - ${b} = ${result}`);
}function multiply(a, b) {
    const result = a * b;
    console.log(`result: ${a} * ${b} = ${result}`);
}function divide(a, b) {
    if (b === 0) {
        console.log("Error: division by zero is not possible");
    } else {
        const result = a / b;
        console.log(`result: ${a} / ${b} = ${result}`);
    }
}
add(operand1, operand2);
subtract(operand1, operand2);
multiply(operand1, operand2);
divide(operand1, operand2);
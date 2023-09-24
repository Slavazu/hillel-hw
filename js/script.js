'use strict';

let operation = prompt("select an operation (add, sub, mult, div):");

let num1 = parseFloat(prompt("enter the first number:"));

let num2 = parseFloat(prompt("enter the second number:"));

let result;

if (operation === "add") {
    result = num1 + num2;
} else if (operation === "sub") {
    result = num1 - num2;
} else if (operation === "mult") {
    result = num1 * num2;
} else if (operation === "div") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        alert("error: Division by zero!");
    }
} else {
    alert("error: undefined operation!");
}


if (result !== undefined) {
    alert(num1 + " " + operation + " " + num2 + " = " + result);
}
'use strict';

let num = +prompt("Введіть число:");

let degree = +prompt("Введіть сутпінь:");

function exponent(num, degree) {
    if (isNaN(num) || isNaN(degree)) {
        return 'Виникла помилка.';
    }

    return Math.pow(num, degree);
}

let result = exponent(num, degree);

if (typeof result === 'number') {
    alert('Результат: ' + result);
} else {
    alert(result);
}

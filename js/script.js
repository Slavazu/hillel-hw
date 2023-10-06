'use strict';

let numOrStr = prompt('input number or string?')
console.log(numOrStr)

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('empty string');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_Nan');
        break;
    default:
        console.log('OK!');
}



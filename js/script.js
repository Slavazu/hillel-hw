'use strict';
1.
let user = {};

user.name = 'John';

user.surname = 'Smith';

user.name = 'Pete';

delete user.name;
console.log(user);



2.
// Чи можна змінити об'єкт, оголошений за допомогою const?
// Ні, не можна змінити об'єкт оголошений за допомогою 'const' - це приведе до помилки.
//const user = { name: "John"};

// Це працюватиме? - Так, якщо замінити 'const' на 'let'.
user.name = "Pete";
console.log(user);



3.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(salaries);

let sum = null


for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);
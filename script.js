// 1.Практичне завдання
const user = {
  name: 'Slava',
};

Object.defineProperty(user, 'name', {
  value: 'Slava',
  writable: false,
  configurable: true,
  enumerable: true,
});

Object.defineProperty(user, 'age', {
  value: 33,
  writable: true,
  configurable: true,
  enumerable: false,
});

for (const key in user) {
  console.log(key);
}
console.log(Object.keys(user));

// 2.Розширене Завдання
// const user = {
//   name: 'Viacheslav',
//   surname: 'Zubenko',
//
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullName(value) {
//     const nameSurnameArray = value.split(' ');
//
//     if (nameSurnameArray.length === 2) {
//       this.name = nameSurnameArray[0];
//       this.surname = nameSurnameArray[1];
//     } else {
//       console.log('Error');
//     }
//   },
// };
//
// console.log('Name:', user.name);
// console.log('Surname:', user.surname);
//
// user.fullName = 'Slava Zub';
//
// console.log('Name:', user.name);
// console.log('Surname:', user.surname);

// 3.Додаткове Завдання
// const user = {
//   name: 'Viacheslav',
// };
//
// Object.defineProperty(user, 'name', {
//   writable: false,
//   configurable: false,
//   enumerable: true,
// });
//
// Object.freeze(user);
//
// user.name = 'Alex';
//
// user.age = '33';
//
// console.log(user.name);
// console.log(user.age);

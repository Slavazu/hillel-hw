// **1.**Функція Ітератора для Масиву у Зворотньому Порядку:
function reverseArrayIterator(array) {
  let index = array.length - 1;

  return {
    next() {
      return index >= 0
        ? { value: array[index--], done: false }
        : { done: true };
    },
  };
}

const myArray = [1, 2, 3, 4, 5];
const iterator = reverseArrayIterator(myArray);

let nextElement = iterator.next();
while (!nextElement.done) {
  console.log(nextElement.value);
  nextElement = iterator.next();
}

// **2.**Генератор Послідовності Фібоначчі:
function* fibonacciGenerator() {
  let prev = 0;
  let current = 1;

  while (true) {
    yield current;
    [prev, current] = [current, prev + current];
  }
}

const generator = fibonacciGenerator();

for (let i = 0; i < 15; i++) {
  console.log(generator.next().value);
}

// **3.**Ітератор для Перебору Властивостей Об'єкта:
function objectKeyIterator(obj) {
  const keys = Object.keys(obj);
  let index = 0;

  return {
    next() {
      return index < keys.length
        ? { value: keys[index++], done: false }
        : { done: true };
    },
  };
}

const myObject = {
  name: 'Slava',
  age: 33,
  gender: 'Male',
  country: 'Ukraine',
  city: 'Odesa',
};

const itr = objectKeyIterator(myObject);

let nextKey = itr.next();
while (!nextKey.done) {
  console.log(nextKey.value);
  nextKey = itr.next();
}

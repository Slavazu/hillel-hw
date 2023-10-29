const numbers = [1, 2, 3, 4, 5];

//  indexOf
function indexOf(array, searchElement) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

console.log('1. indexOf:', indexOf(numbers, 3));

// Имитатор lastIndexOf
function lastIndexOf(array, searchElement) {
  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

console.log('2. lastIndexOf:', lastIndexOf(numbers, 3));

// Имитатор find
function find(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

console.log('3. find:', find(numbers, (num) => num > 3));

// Имитатор findIndex
function findIndex(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

console.log('4. findIndex:', findIndex(numbers, (num) => num > 3));

// Имитатор includes
function includes(array, searchElement) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}

console.log('5. includes:', includes(numbers, 3));

// Имитатор every
function every(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}

console.log('6. every:', every(numbers, (num) => num > 0));

// Имитатор some
function some(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}

console.log('7. some:', some(numbers, (num) => num > 6));

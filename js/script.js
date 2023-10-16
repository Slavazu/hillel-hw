function padString(str, length, char = ' ', leftToRight = true) {
  if (typeof str !== 'string' || typeof length !== 'number' || typeof char !== 'string' || typeof leftToRight !== 'boolean') {
    return 'some error';
  }

  if (str.length >= length) {
    return str.substr(0, length);
  }

  const padding = char.repeat(length - str.length);
  return leftToRight ? padding + str : str + padding;
}

console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
console.log(padString('hello', 5, '*'));
console.log(padString('hello', 10, '-', false));
console.log(padString('hello', 3, '*', false));
console.log(padString('hello', 10, '!', true));
console.log(padString('hello', 0, '*'));
console.log(padString('hello', 8));

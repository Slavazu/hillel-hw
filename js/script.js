function insertWordInto(initialString) {
  return function (newWord) {
    const words = initialString.split(' ');
    const randomIndex = Math.floor(Math.random() * (words.length + 1));

    words.splice(randomIndex, 0, newWord);

    const resultString = words.join(' ');

    return resultString;
  };
}

const insert = insertWordInto('hello world');
const result = insert('Odesa');
console.log(result);
const secondResult = insert('Odesa');
console.log(secondResult);
const thirdResult = insert('Odesa');
console.log(thirdResult);
const fourthResult = insert('Odesa');
console.log(fourthResult);

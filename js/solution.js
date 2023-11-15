const ulElement = document.getElementById('ulId');
const liElements = ulElement.getElementsByTagName('li');

for (const li of liElements) {
  console.log(li.textContent);
}

console.log('Кіл-ть елементів:', liElements.length);

const liTextArr = [];

for (const li of liElements) {
  liTextArr.push(li.textContent);
}

console.log('Масив текстів:', liTextArr);

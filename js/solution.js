const ulElement = document.querySelector('#ulId');

console.log('Всі елементи:');
for (const liElement of ulElement.children) {
  if (liElement.tagName === 'LI') {
    console.log(`${liElement.textContent}`);
  }
}
const ulAttributes = ulElement.attributes;
const valuesArray = [];
const namesArray = [];

for (const attribute of ulAttributes) {
  valuesArray.push(attribute.nodeValue);
  namesArray.push(attribute.name);
}

console.log('Значення атрибутів:', valuesArray);
console.log('Назви атрибутів:', namesArray);

const lastLiElement = document.querySelector('#ulId li:last-child');
if (lastLiElement) {
  lastLiElement.textContent = 'Привет меня зовут Слава';
}
console.log(lastLiElement);

const firstLiElement = document.querySelector('#ulId li:first-child');
if (firstLiElement) {
  firstLiElement.setAttribute('data-my-name', 'Слава');
}
console.log(firstLiElement);

// const ulElement = document.querySelector('#ulId');
if (ulElement) {
  ulElement.removeAttribute('data-dog-tail');
}
console.log(ulElement);

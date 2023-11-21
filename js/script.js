function generateList(array) {
  const ul = document.createElement('ul');

  for (const item of array) {
    const li = document.createElement('li');

    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      li.textContent = item;
    }

    ul.appendChild(li);
  }

  return ul;
}

const myArray = [1, 2, [1.1, 1.2, 1.3], 3];
const myList = generateList(myArray);
document.body.appendChild(myList);

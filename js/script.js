const folderPath = './images/';
const fileNames = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp', '8.webp', '9.webp'];
const randomFileName = fileNames[Math.floor(Math.random() * fileNames.length)];
const randomImagePath = `${folderPath}/${randomFileName}`;
const randomImageElement = document.querySelector('#randomImage');
randomImageElement.src = randomImagePath;
console.log(randomImagePath);

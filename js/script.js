const input = document.createElement('input');
input.type = 'text';
input.id = 'myInput';

const infoBlock = document.createElement('div');
infoBlock.id = 'info-block';
infoBlock.textContent = '<div></div>';

document.body.appendChild(input);
document.body.appendChild(infoBlock);

document.body.style.display = 'flex';
input.style.marginRight = '10px';

input.addEventListener('focus', () => {
  infoBlock.style.display = 'block';
});
input.addEventListener('blur', () => {
  infoBlock.style.display = 'none';
});

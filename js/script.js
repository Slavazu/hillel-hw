document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.images');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  images.forEach((image) => {
    image.addEventListener('click', () => {
      const imgSrc = image.getAttribute('src');
      const imgAlt = image.getAttribute('alt');
      const imgWidth = image.getAttribute('width');
      const imgHeight = image.getAttribute('height');

      const paragraphId = image.parentElement.getAttribute('id');
      const paragraph = document.querySelector(
        `#${paragraphId} .hidden`,
      ).textContent;

      const enlargedContent = document.createElement('div');
      enlargedContent.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}" width="${imgWidth}" height="${imgHeight}" /><p>${paragraph}</p>`;

      overlay.innerHTML = '';
      overlay.appendChild(enlargedContent);
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const userDataContainer = document.getElementById('userData');

  const storedData = localStorage.getItem('formData');

  if (storedData) {
    const formData = JSON.parse(storedData);

    const ul = document.createElement('ul');

    for (const key in formData) {
      const li = document.createElement('li');
      li.textContent = `${key}: ${formData[key]}`;
      ul.appendChild(li);
    }

    userDataContainer.appendChild(ul);
  } else {
    userDataContainer.textContent = 'No user data available.';
  }
});

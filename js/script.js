document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      const jsonData = JSON.stringify(formObject);
      localStorage.setItem('formData', jsonData);
    });
  } else {
    // Если формы нет (на странице displayData.html)
    const userDataList = document.getElementById('userDataList');
    const jsonData = localStorage.getItem('formData');

    if (jsonData) {
      try {
        const formObject = JSON.parse(jsonData);

        for (const key in formObject) {
          if (formObject.hasOwnProperty(key)) {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<strong>${key}:</strong> ${formObject[key]}`;
            userDataList.appendChild(listItem);
          }
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else {
      const noDataMessage = document.createElement('p');
      noDataMessage.textContent = 'No user data available.';
      userDataList.appendChild(noDataMessage);
    }
  }
});

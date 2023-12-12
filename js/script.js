(() => {
  const formHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { target } = e;
    const data = {};
    const formFields = target.querySelectorAll('input, textarea, select');

    formFields.forEach((field) => {
      const { name, value, type } = field;
      if (type !== 'submit' && !(type === 'checkbox' && !field.checked)) {
        data[name] = value;
      }
    });

    localStorage.setItem('formData', JSON.stringify(data));
    window.location.href = 'displayData.html';
  };

  const displayUserData = () => {
    const userDataList = document.querySelector('#userDataList');
    const noDataMessage = document.querySelector('#noDataMessage');

    const savedData = localStorage.getItem('formData');

    console.log('Saved Data:', savedData);

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      for (const [key, value] of Object.entries(parsedData)) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        userDataList.appendChild(listItem);
      }

      noDataMessage.style.display = 'none';
    } else {
      userDataList.style.display = 'none';
      noDataMessage.style.display = 'block';
    }
  };

  const loadedHandler = () => {
    const form = document.querySelector('#form');
    if (form) {
      form.addEventListener('submit', formHandler);
    }

    if (window.location.href.includes('displayData.html')) {
      displayUserData();
    }
  };

  document.addEventListener('DOMContentLoaded', loadedHandler);
})();

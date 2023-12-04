document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('Form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      email: form.elements.email.value,
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      nickname: form.elements.nickname.value,
      password: form.elements.password.value,
      option: form.elements.option.value,
      message: form.elements.message.value,
      file: form.elements.file.value,
      terms: form.elements.terms.checked,
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    form.reset();
  });
});

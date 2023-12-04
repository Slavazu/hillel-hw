document.addEventListener('DOMContentLoaded', () => {
  const applyTheme = (theme) => {
    const { body } = document;
    const isLightTheme = theme === 'light';

    body.classList.toggle('bg-dark', !isLightTheme);
    body.classList.toggle('text-white', !isLightTheme);

    localStorage.setItem('theme', theme);
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  const radioLightTheme = document.getElementById('radioLightTheme');
  const radioDarkTheme = document.getElementById('radioDarkTheme');

  const changeThemeHandler = (theme) => () => applyTheme(theme);

  radioLightTheme.addEventListener('change', changeThemeHandler('light'));
  radioDarkTheme.addEventListener('change', changeThemeHandler('dark'));
});

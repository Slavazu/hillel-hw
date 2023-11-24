(function () {
  document.querySelector('.tab').classList.add('active');
  document.querySelector('.tab-panel').classList.add('active');
  function selectPanel(e) {
    const { target } = e.target.dataset;
    document.querySelectorAll('.tab, .tab-panel').forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    document.querySelector(`.${target}`).classList.add('active');
  }
  document.querySelectorAll('.tab').forEach((el) => {
    el.addEventListener('click', selectPanel);
  });
}());

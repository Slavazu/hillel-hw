document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-add]');
  const input = document.querySelector('[data-input]');
  const list = document.querySelector('[data-list]');

  button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      const li = createTodoElement(input.value);
      list.prepend(li);
      input.value = '';
    } else {
      alert('Введите текст задачи!');
    }
  });

  const createTodoElement = (text) => {
    const li = document.createElement('li');
    li.className = 'todo_list_item';
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteBtn);

    return li;
  };
});

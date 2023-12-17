const todoApp = (function () {
  const todoModel = {
    todos: [],

    addTodo(text) {
      if (text.trim() !== '') {
        this.todos.unshift({ text });
        this.saveToLocalStorage();
      }
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    },

    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    loadFromLocalStorage() {
      const storedTodos = localStorage.getItem('todos');
      this.todos = storedTodos ? JSON.parse(storedTodos) : [];
    },
  };

  const todoView = {
    button: document.querySelector('[data-add]'),
    input: document.querySelector('[data-input]'),
    list: document.querySelector('[data-list]'),

    init(controller) {
      this.button.addEventListener('click', () => {
        controller.handleAddTodo();
      });
    },

    render(todos, removeTodoHandler) {
      this.list.innerHTML = '';
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo_list_item';
        li.textContent = todo.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';

        deleteBtn.addEventListener('click', () => {
          removeTodoHandler(index);
        });

        li.appendChild(deleteBtn);
        this.list.appendChild(li);
      });
    },
  };

  const todoController = {
    model: todoModel,
    view: todoView,

    init() {
      this.model.loadFromLocalStorage();
      this.view.init(this);
      this.view.render(this.model.todos, this.handleRemoveTodo.bind(this));
    },

    handleAddTodo() {
      const text = this.view.input.value;
      this.model.addTodo(text);
      this.view.render(this.model.todos, this.handleRemoveTodo.bind(this));
      this.view.input.value = '';
    },

    handleRemoveTodo(index) {
      this.model.removeTodo(index);
      this.view.render(this.model.todos, this.handleRemoveTodo.bind(this));
    },
  };

  return todoController;
}());

document.addEventListener('DOMContentLoaded', () => {
  todoApp.init();
});

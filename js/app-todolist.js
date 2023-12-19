(function () {
  const CONSTANTS = Object.freeze({
    todoFormSelector: '#todoForm',
    todoContainerSelector: '#todoItems',
    dataKey: 'formData',
  });

  const controller = {
    formHandler(e) {
      e.preventDefault();
      e.stopPropagation();

      const { target } = e;
      const data = Array.from(target.querySelectorAll('input, textarea'))
        .reduce((acc, item) => {
          acc[item.name] = item.value;
          return acc;
        }, {});

      const savedData = model.save(data);

      if (savedData) {
        view.renderElement(savedData);
        view.resetForm();
      }
    },

    removeTodoItemHandler(e) {
      e.stopPropagation();

      const { target } = e;
      if (!target.hasAttribute('data-remove-btn')) return;

      const todoId = +target.closest('[data-todo-item]').getAttribute('data-todo-item');
      const removedElement = model.removeElementById(todoId);

      if (removedElement) {
        view.removeElement(todoId);
      } else {
        alert(`Cannot remove element with ID ${todoId}`);
      }
    },

    loadedHandler() {
      model.initId();

      const form = document.querySelector(CONSTANTS.todoFormSelector);
      form.addEventListener('submit', this.formHandler);

      model.get().forEach((item) => view.renderElement(item));

      const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);
      todoContainer.addEventListener('click', this.removeTodoItemHandler);
    },

    init() {
      this.formHandler = this.formHandler.bind(this);
      this.removeTodoItemHandler = this.removeTodoItemHandler.bind(this);
      this.loadedHandler = this.loadedHandler.bind(this);

      document.addEventListener('DOMContentLoaded', this.loadedHandler);
    },
  };

  const view = {
    renderElement(data) {
      const template = this.createTemplate(data);
      this.renderTodoItem(template);
    },

    renderTodoItem(template) {
      const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);
      todoContainer.prepend(template);
    },

    createTemplate(data) {
      const wrapper = document.createElement('div');
      wrapper.className = 'col-4';
      wrapper.setAttribute('data-todo-item', data.id);

      const taskWrapper = document.createElement('div');
      taskWrapper.className = 'taskWrapper';
      wrapper.appendChild(taskWrapper);

      this.createTaskElement('div', 'taskHeading', data.title, taskWrapper);
      this.createTaskElement('div', 'taskDescription', data.description, taskWrapper);

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-sm btn-danger';
      deleteBtn.innerText = 'X';
      deleteBtn.setAttribute('data-remove-btn', '');
      taskWrapper.appendChild(deleteBtn);

      return wrapper;
    },

    createTaskElement(elementType, className, innerHTML, parent) {
      const taskElement = document.createElement(elementType);
      taskElement.className = className;
      taskElement.innerHTML = innerHTML;
      parent.appendChild(taskElement);
    },

    resetForm() {
      document.querySelector(CONSTANTS.todoFormSelector).reset();
    },

    removeElement(todoId) {
      const elementToRemove = document.querySelector(`[data-todo-item="${todoId}"]`);
      if (elementToRemove) {
        elementToRemove.remove();
      }
    },
  };

  const model = {
    currentId: 0,

    save(data) {
      this.currentId++;
      const dataCopy = { id: this.currentId, ...data };
      const savedData = this.get();
      savedData.push(dataCopy);

      try {
        localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedData));
        return dataCopy;
      } catch (e) {
        console.error('Error saving data:', e.message);
        return null;
      }
    },

    get() {
      const savedData = JSON.parse(localStorage.getItem(CONSTANTS.dataKey)) || [];
      return savedData;
    },

    removeElementById(todoId) {
      const savedElements = this.get();
      const index = savedElements.findIndex((item) => item.id === todoId);

      if (index !== -1) {
        const removedElement = savedElements.splice(index, 1)[0];

        try {
          localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(savedElements));
          return removedElement;
        } catch (e) {
          console.error('Error removing element:', e.message);
          return null;
        }
      }

      return null;
    },

    initId() {
      const items = this.get();
      this.currentId = items.length > 0 ? items[items.length - 1].id : 0;
    },
  };

  controller.init();
}());

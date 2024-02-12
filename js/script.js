class TaskManager {
  constructor() {
    this.tasks = new Map();
  }

  addTask(id, description) {
    try {
      if (this.tasks.has(id)) {
        throw new Error(`Завдання з ID ${id} вже існує.`);
      }
      this.tasks.set(id, description);
      console.log(`Завдання ${id} додано: "${description}"`);
    } catch (error) {
      console.error(error.message);
    }
  }

  removeTask(id) {
    try {
      if (!this.tasks.has(id)) {
        throw new Error(`Завдання з ID ${id} не існує.`);
      }
      this.tasks.delete(id);
      console.log(`Завдання ${id} видалено.`);
    } catch (error) {
      console.error(error.message);
    }
  }

  findTask(id) {
    try {
      if (!this.tasks.has(id)) {
        throw new Error(`Завдання з ID ${id} не знайдено.`);
      }
      console.log(`Завдання ${id}: ${this.tasks.get(id)}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  displayTasks() {
    if (this.tasks.size === 0) {
      console.log('Немає завдань для відображення.');
      return;
    }
    console.log('Список завдань:');
    this.tasks.forEach((description, id) => {
      console.log(`${id}: "${description}"`);
    });
  }

  updateTaskDescription(id, newDescription) {
    try {
      if (!this.tasks.has(id)) {
        throw new Error(`Завдання з ID ${id} не існує.`);
      }
      this.tasks.set(id, newDescription);
      console.log(`Опис завдання ${id} оновлено на: "${newDescription}"`);
    } catch (error) {
      console.error(error.message);
    }
  }
}
const taskManager = new TaskManager();

// Додавання завдань
taskManager.addTask(1, 'Вивчати основи JavaScript');
taskManager.addTask(2, 'Читати про можливості ES6+');

// Додавання завдання з існуючим ID
taskManager.addTask(1, 'Спроба додати з існуючим ID');

// Виведення всіх завдань
taskManager.displayTasks();

// Оновлення опису завдання
taskManager.updateTaskDescription(1, 'Освоїти основи JavaScript');
// Спроба оновити неіснуюче завдання
taskManager.updateTaskDescription(3, 'Це завдання не існує');

// Видалення завдання
taskManager.removeTask(2);
// Спроба видалити неіснуюче завдання
taskManager.removeTask(2);

// Пошук конкретного завдання
taskManager.findTask(1);
// Спроба знайти неіснуюче завдання
taskManager.findTask(3);

// Виведення оновленого списку завдань
taskManager.displayTasks();

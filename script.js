function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.information = function () {
  console.log(`Информация о владельце: ${this.name}, ${this.age} лет`);
};

function Car(brand, model, year, license, owner) {
  if (owner.age > 18) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.license = license;
    this.owner = owner;
  } else {
    console.log('Владелец должен быть старше 18 лет.');
    return null;
  }
}

Car.prototype.information = function () {
  console.log(`Транспортное средство: ${this.brand} ${this.model}; Год выпуска: ${this.year}; Номерной знак: ${this.license}`);
  this.owner.information();
};

const person1 = new Person('Екатерина', 25);
const person2 = new Person('Олег', 30);
const person3 = new Person('Александр', 22);
const person4 = new Person('Татьяна', 35);
const person5 = new Person('Андрей', 28);
const person6 = new Person('Ольга', 40);
const person7 = new Person('Виталий', 19);

const car1 = new Car('Toyota', 'Camry', 2022, 'ВН0234МН', person1);
const car2 = new Car('Honda', 'Civic', 2020, 'НН0230ТН', person2);
const car3 = new Car('Ford', 'Focus', 2021, 'ВМ0500МТ', person3);
const car4 = new Car('Chevrolet', 'Malibu', 2020, 'ВХ4400ТТ', person4);
const car5 = new Car('Nissan', 'Altima', 2023, 'АХ0220РР', person5);
const car6 = new Car('Hyundai', 'Elantra', 2019, 'ІІ0566АН', person6);
const car7 = new Car('Kia', 'Soul', 2022, 'АА0598СТ', person7);

car1.information();
car2.information();
car3.information();
car4.information();
car5.information();
car6.information();
car7.information();

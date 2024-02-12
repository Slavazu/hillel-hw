const cacheComplexCalculations = (function () {
  const cache = new WeakMap();

  return function (object, compute) {
    if (cache.has(object)) {
      console.log('Використовуємо кешований результат.');
      return cache.get(object);
    }

    const result = compute(object);
    cache.set(object, result);
    console.log('Обчислення виконано та результат кешовано.');
    return result;
  };
}());

// Приклад:
function complexCalculation(obj) {
  return obj.value ** 2;
}

const obj = { value: 4 };

// Виконання з кешуванням
console.log(cacheComplexCalculations(obj, complexCalculation));
// Повторне виконання
console.log(cacheComplexCalculations(obj, complexCalculation));

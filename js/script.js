const trackObjects = (function () {
  const processedObjects = new WeakSet();

  return function (object) {
    if (processedObjects.has(object)) {
      console.log('Вже оброблявся.');
      return true;
    }
    processedObjects.add(object);
    console.log('Додано до списку оброблених.');
    return false;
  };
}());

const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };

console.log(trackObjects(obj1));
console.log(trackObjects(obj2));

console.log(trackObjects(obj1));
console.log(trackObjects(obj2));

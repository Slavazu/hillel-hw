const person = { name: 'Слава' };

function myBind(fn, context, ...rest) {
  return function (...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...args);
    delete context[uniqId];
    return result;
  };
}

myBind(function (greeting) {
  console.log(`${greeting}, ${this.name}!`);
}, person)('Привет');

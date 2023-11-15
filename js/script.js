function myBind(fn, context, ...rest) {
  return function (...args) {
    const combinedArgs = [...rest, ...args];
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...combinedArgs);
    delete context[uniqId];
    return result;
  };
}

const person = {
  name: 'Cлава',
  greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  },
};

const boundGreet = myBind(person.greet, person, 'Привет');
boundGreet();

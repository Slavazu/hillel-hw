function myBind(func, context, ...partialArgs) {
  return function (...args) {
    const allArgs = partialArgs.concat(args);
    return func.bind(context, ...allArgs)();
  };
}

const person = {
  name: 'Viacheslav',
  info(age, email) {
    console.log(`My name is ${this.name}, i’m ${age} years old, my email: ${email}.`);
  },
};

const boundFunction = myBind(person.info, person, 33, 'viach@gmail.com');
boundFunction();

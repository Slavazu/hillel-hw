const person = {
  name: 'Слава',
};
function info(phone, email) {
  console.log(`Имя: ${this.name}, Тел.: ${phone}, Email: ${email}`);
}
function myBind(fn, context, ...rest) {
  return function (...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...rest.concat(args));
    delete context[uniqId];
    return result;
  };
}

myBind(info, person)('099999222', 'vi@gmail.com');
myBind(info, person, '099999222')('vi@gmail.com');
myBind(info, person, '099999222', 'vi@gmail.com')();

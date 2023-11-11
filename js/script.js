const person = {
  name: 'Viacheslav',
  age: '33',
  email: 'viach@gmail.com',
};
function info() {
  console.log(`name: ${this.name}, age: ${this.age}, email: ${this.email}`);
}
// info.bind(person)();

function bind(fn, context) {
  return fn.bind(context);
}
bind(info, person)();

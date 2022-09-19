function ExampleConstructor() {

}
console.log('value of ExampleConstructor: ', ExampleConstructor.prototype.__proto__);
console.log('typeof prototype property: ', typeof ExampleConstructor.prototype.__proto__);

var newFunction = new ExampleConstructor();
console.log('newFunction: ', newFunction);

var isTrue = newFunction instanceof ExampleConstructor;
console.log('instanceof: ', isTrue);

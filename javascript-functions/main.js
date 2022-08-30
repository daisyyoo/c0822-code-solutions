function convertMinutesToSeconds(minutes) {
  var total = minutes * 60;
  return total;
}
console.log('Number of minutes: ', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}
console.log('Welcome greeting: ', greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('The area is: ', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('The first name is: ', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}
console.log('The last element is: ', getLastElement(['propane', 'and', 'propane', 'accessories']));

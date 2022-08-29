var student = {
  firstName: 'Daisy',
  lastName: 'Yoo',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Sous Chef';

console.log('value of livesInIrine: ', student.livesInIrvine);
console.log('valueof previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2018
};

vehicle['color'] = 'Dark Grey';
vehicle['isConvertible'] = false;
console.log('value of color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle ', vehicle);

var pet = {
  name: 'Dooboo',
  type: 'Jindo Dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);

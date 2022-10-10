/* exported invert */

// create a new object container
// create a new variable to hold property, that'll become value
// create a new variable to hold value to become property
// use the for in to loop the data
// assign it per loop and then add to new object container
// output new container

function invert(source) {
  var newObject = {};
  for (var key in source) {
    var property = key;
    var value = source[key];
    newObject[value] = property;
  }
  return newObject;
}

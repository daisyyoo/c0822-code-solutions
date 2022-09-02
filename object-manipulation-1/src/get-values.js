/* exported getValues */

// make a new array container
// find the value of key of the object using for...in
// add it into the new array container
// output the new array

function getValues(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

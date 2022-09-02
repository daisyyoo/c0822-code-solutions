/* exported getKeys */

// make a new array container
// find the key of the object using for...in
// add it into the new array container
// output the new array

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}

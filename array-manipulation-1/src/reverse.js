/* exported reverse */

// make a new array container
// start by locating the last value in the array
// add into new array container
// increment down until past the first value
// output the new array

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

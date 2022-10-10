/* exported flatten */

// make a new empty array
// use a for loop to go through the given array
// check if the slot in the array is an array
// if it's an array, loop through the array
// assign each value to another variable and push it into the new array
// if not, just push the value into the new array
// once the loop is over, return the new array

function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        var newValue = array[i][j];
        newArray.push(newValue);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

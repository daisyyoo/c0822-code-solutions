/* exported compact */

// create a new array container
// starting from the first value of the given array,
// input the value into conditional, which will run IF TRUTHY
// if truthy, run the statement and add into new array container
// at the end, output new array

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

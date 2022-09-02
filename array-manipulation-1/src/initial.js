/* exported initial */

// make a new array
// locate the first value in the array
// add it to the new array
// increment until the 2nd to last value in the array via length - 2
// return output of new array

function initial(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 2; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

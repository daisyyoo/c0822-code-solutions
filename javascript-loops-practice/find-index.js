/* exported findIndex */

// start at the first value of the array with [0].
// check if this value strictly equals the value given
// if so, return true
// if not, increment to the second value and check again
// if after the last value of the array does not equal to value, exit loop and return -1

function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

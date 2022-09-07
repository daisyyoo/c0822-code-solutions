/* exported includes */

// make if statement to match value in given array
// if found, return true
// out of the loop, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

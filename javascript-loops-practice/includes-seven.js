/* exported includesSeven */

// start at the first location of the array [0] and see if it's strictly equal to 7
// if yes, then stop and return true
// if not, then increment to next value at location [1] and test again
// if any of them strictly equals to 7, stop and return true
// keep incrementing until you reach the last location of the array
// if the last value of the array is not strictly equal to 7, then return false.

function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== 7) {
      return false;
    }
  }
}

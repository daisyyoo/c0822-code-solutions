/* exported equal */

// use a for loop to compare if the same space of the first and second array are equal
// if any of them are not equal, return false
// if at the end of the loop, everything is same, then return true

function equal(first, second) {
  for (var i = 0; i < first.length; i++) {
    if (first.length !== second.length) {
      return false;
    } else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

/* exported unique */

// make a new array
// push the first slot into the new array
// use a for loop
// starting from the second slot, check if it's equal to the first value in the new array
// if not, then push into the new array
// return the new array

function unique(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  } else if (array.length > 0) {
    newArray.push(array[0]);
    for (var i = 1; i < array.length; i++) {
      if (newArray.indexOf(array[i]) === -1) {
        newArray.push(array[i]);
      }
    }
  }
  return newArray;
}

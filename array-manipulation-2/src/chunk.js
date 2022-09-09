/* exported chunk */

// make an empty array for final output
// make 2 for loops
// first one to increment per given size
// make new variable with empty array
// second loop to increment +1,
// if sub array has reached size, then exit loop, reset array value and loop again
// push the sub array every time the loop is exited
// return the final array at the way end

function chunk(array, size) {
  var finalArray = [];
  for (var i = 0; i < array.length; i += size) {
    var newArray = [];
    for (var j = i; j < array.length; j++) {
      if (newArray.length !== size) {
        newArray.push(array[j]);
      } else {
        break;
      }
    }
    finalArray.push(newArray);
  }
  return finalArray;
}

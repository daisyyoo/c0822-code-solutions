/* exported take */

// make a new array container
// start at the first location and push into new array container
// loop until given count + 1
// return new array

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

/* exported takeRight */

// make new array container
// if count is larger than array.length, return the array
// find the value at array.length - count to start inputting into new container
// add each value into new array
// loop to increment count
// output new array

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count > array.length) {
      return array;
    } else if (i < array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

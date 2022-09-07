/* exported dropRight */

// make new array container
// if count is larger than array.length, return the array
// start at 0 and end at array.length - count to loop
// add each value into new array
// output new array

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count > array.length) {
      return array;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

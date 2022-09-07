/* exported drop */

// make new array container
// use the count number as the array location
// push that value into a new array and loop
// output new array

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

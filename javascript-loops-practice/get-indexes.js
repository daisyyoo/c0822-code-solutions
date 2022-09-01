/* exported getIndexes */

// create a new array container
// insert the first location of the old array into the new array, start at 0
// increment until the number is equal or larger than the length of the array
// add each incremented number into new array
// get back new array

function getIndexes(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}

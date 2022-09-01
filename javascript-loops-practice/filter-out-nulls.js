/* exported filterOutNulls */

// make new array container
// start at first location of array [0] and test if it's not equal to null
// if not equal to null, add the value into new array
// else do nothing and move onto next array value
// increment the locatiom of array and repeat
// exit when the location of array is equal to or larger than array length
// return new array

function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

/* exported filterOutStrings */

// make a new array container
// find the first value of the array [0], and evaluate if the value is not a string
// if not a string, add into new array
// if a string, do nothing and move to next value
// increment to the second value of the array and repeat evaluation
// stop once the number/location of array is equal or larger than array's length
// print out new array

function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof '') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

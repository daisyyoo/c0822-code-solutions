/* exported union */

// make a new array
// push the first index of first array into the new array
// use a for loop to loop through first array
// use indexOf method to see if index at first array exists in new array
// if not, push into new array
// use second for loop to loop through second array
// same indexOf method
// same push into new array
// return new array

function union(first, second) {
  var newArray = [];
  newArray.push(first[0]);
  for (var i = 1; i < first.length; i++) {
    if (newArray.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (newArray.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

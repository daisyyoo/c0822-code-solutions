/* exported difference */

// make a new array
// use a for loop to loop through the first array
// use indexOf method to check if index at first array exists in second array
// if not, push into new array
// make a second for loop to loop through second array
// repeat same vetting as first loop
// if not, then push into new array
// return new array

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

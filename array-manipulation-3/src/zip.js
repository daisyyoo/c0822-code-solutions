/* exported zip */

// make a new final array to hold everything
// use a for loop,
// if i is less than the length of either arrays, so it stops at the shortest one
// make a new array
// push that slots's value of first array into the array, then push second array's slot value
// then push that new array into the final array

function zip(first, second) {
  var finalArray = [];
  for (var i = 0; i < first.length; i++) {
    if (i < first.length && i < second.length) {
      var newArray = [];
      newArray.push(first[i]);
      newArray.push(second[i]);
      finalArray.push(newArray);
    }
  }
  return finalArray;
}

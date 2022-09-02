/* exported tail */

// make a new array container
// locate the second value in the array
// push the value into new array
// increment until the last value of the arary
// output the new array once last value is passed

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

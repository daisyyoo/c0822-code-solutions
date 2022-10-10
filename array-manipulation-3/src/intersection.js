/* exported intersection */

// make a new array
// use a for loop to loop through the first array
// use indexOf method to see if it equals to 0 or larger (meaning it's present in the other array)
// then push into new array
// return new array

function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) >= 0) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}

/* exported addSuffixToAll */

// create a new array container
// take the word at first location [0] in array
// concatenate suffix and add to newArray
// increment the location and find second word in array
// concatenate suffix and add to newArray
// repeat until the location number is equal to or larger than length of array
// return new array

function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}

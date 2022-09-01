/* exported getWords */

// make new array container
// evaluate the string starting from the first value and check if it's a space
// if so, then separate/split and in array via split method
// if no space, then return empty array

function getWords(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      string.split(' ');
    }
  }
  var newArray = [];
  newArray.push(string);
  return newArray;
}

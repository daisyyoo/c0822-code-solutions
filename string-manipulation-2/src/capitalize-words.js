/* exported capitalizeWords */

// create new string
// make string lowercase
// always capitalize the first value in string
// if the value is not a space, add the value into new string
// if the value is a space, capitalize the next value and return the current value of space
// concatenate the values
// return new string

function capitalizeWords(string) {
  var newString = '';
  var lowercase = string.toLowerCase();
  var newValue = lowercase;
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      var firstCap = lowercase[i].toUpperCase();
      newString += firstCap;
    } else if (lowercase[i] === ' ') {
      newValue = newValue.replaceAll(newValue[i + 1], newValue[i + 1].toUpperCase());
      newString += lowercase[i];
    } else {
      newString += newValue[i];
    }
  }
  return newString;
}

/* exported reverseWord */

// start at the last char of the string using length to find the value
// add the value of the last char into a new string variable reverse
// concatenate every value to the variable while incrementing down in location
// return the concatenated sum of the reverse variable after last value

function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

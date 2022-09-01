/* exported isUpperCased */

// find the first value in the string using [0] and evaluate if it's lowercased
// if so, return false
// if not, then increment and check until it reaches end of string
// if at the end of the string, all are uppercase, return true

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

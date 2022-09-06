/* exported numVowels */

// create an array of vowels, lower and uppercase
// create a variable with value = 0
// have the strings look through the array
// if there's a vowel, add + 1 into new variable
// return output of new variable at the end

var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
function numVowels(string) {
  var totalVowels = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        totalVowels++;
      }
    }
  }
  return totalVowels;
}

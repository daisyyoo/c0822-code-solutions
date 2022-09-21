/* exported reverseWords */

// make a new string for the output
// separate the string into an array with index via split method
// using a for loop to isolate the array, make an empty string and
// start adding the value of each indexed string in the array and
// concatenate this result into the new string that'll be final output

function reverseWords(string) {
  var finalString = '';
  var stringArray = string.split(' ');

  for (var i = 0; i < stringArray.length; i++) {
    for (var j = stringArray[i].length - 1; j >= 0; j--) {
      if (j > 0) {
        var newString = '';
        newString += stringArray[i][j];
      } else if (j === 0 && i !== stringArray.length - 1) {
        newString = stringArray[i][j] + ' ';
      }
      finalString += newString;
    }
  }
  return finalString;
}

/* exported swapChars */

// make new variable with empty string
// if the string location is not equal to either first or second index,
// input into new string
// if string at first index found, change value to string at second index
// put into new variable and then add that value into new string
// if string at second index found, change value to string at first index,
// put into another new variable and add that into new string
// output new variable string

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      var newIndex1 = string[secondIndex];
      newString += newIndex1;
    } else if (i === secondIndex) {
      var newIndex2 = string[firstIndex];
      newString += newIndex2;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

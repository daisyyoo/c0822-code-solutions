/* exported truncate */

// make a new string
// use the number given to end the condition of the loop (<= the number)
// starting at the beginning, put it into the new string
// increment through the loop and concatenate every letter
// once the length is reached, exit the loop and concatenate ellipsis (...)
// if the number is never reached within loop, still concatenate ...
// Have the loop only run if the string's length is longer than the length
// if not, then take the string and concatenate ellipsis and output

function truncate(length, string) {
  var truncated = '';
  for (var i = 0; i < length; i++) {
    if (string.length > length) {
      truncated += string[i];
    } else {
      return string + '...';
    }
  }
  return truncated + '...';
}

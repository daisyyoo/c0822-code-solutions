/* exported capitalize */

// change the word and make the entire string lowercase
// divide the string so only the first character is capitalized and concatenate with the rest of the string
// output the string

function capitalize(word) {
  var lowercase = word.toLowerCase();
  var capitalized = lowercase[0].toUpperCase() + lowercase.slice(1);
  return capitalized;
}

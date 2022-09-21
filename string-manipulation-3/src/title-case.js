/* exported titleCase */

// use split to make an array of indexed words
// capitalize the first char [0] of every indexed word
// if the word.length is 4+, capitalize first char
// unless it's in the special array of words that are not capitalized
// which can still be capitalized if it's the first word or after a colon or hyphen
// JavaScript === JavaScript
// API === API

function titleCase(title) {
  // var specialArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var finalString = '';
  var titleLowerCase = title.toLowerCase();
  var titleArray = titleLowerCase.split(' ');

  // if (titleArray[i] === 'javascript') {
  //   //replace 'Javascript' with 'JavaScript'
  // }

  // if (titleArray[i] === 'api') {
  //   //replace 'api' with 'API'
  // }

  // if (titleArray[i].length < 3 && titleArray[i] in specialArray))
  // keep lowercase

  // if (titleArray[i].length > 3)
  // capitalize

  //   if (specialArray.includes(titleArray[i]) {
  //     //capitalize
  //   } else if ( ) {
  //     //follows after colon or hyphen
  //     //capitalize
  //   }

  for (var i = 0; i < titleArray.length; i++) {
    for (var j = 0; j < titleArray[i].length; j++) {
      var newString = '';
      if (j === 0) {
        newString += titleArray[i][j].toUpperCase();
      } else {
        newString += titleArray[i][j];
      }

      finalString += newString;
    }
    finalString += ' ';
  }
  return finalString.trim();
}

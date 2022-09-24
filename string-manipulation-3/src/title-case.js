/* exported titleCase */

// use split to make an array of indexed words
// capitalize the first char [0] of every indexed word
// if the word.length is 4+, capitalize first char
// unless it's in the special array of words that are not capitalized
// which can still be capitalized if it's the first word or after a colon or hyphen
// JavaScript === JavaScript
// API === API

function titleCase(title) {
  var specialArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var finalString = '';
  var titleLowerCase = title.toLowerCase();
  var titleArray = titleLowerCase.split(' ');

  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray[i] === 'api') {
      var apiValue = titleArray[i];
      apiValue = 'API';
      finalString += apiValue;
    } else if (titleArray[i] === 'javascript:') {
      var javaColon = titleArray[i];
      javaColon = 'JavaScript: ';
      finalString += javaColon;
    } else if (titleArray[i] === 'javascript') {
      var javascript = titleArray[i];
      javascript = 'JavaScript ';
      finalString += javascript;
    } else if (titleArray[i].length < 3) {
      // debugger;
      var smallWord = titleArray[i];
      if (smallWord[0] !== titleLowerCase[0]) {
        for (var j = 0; j < specialArray.length; j++) {
          if (smallWord === specialArray[j]) {
            smallWord = smallWord + ' ';
          }
          // this has to fit here somewhere since it's the same conditional, but i can't figure out where...
          var capSmallWord = smallWord.replace(smallWord[0], smallWord[0].toUpperCase());
          smallWord = capSmallWord;
        }
        smallWord = smallWord + ' ';
        finalString += smallWord;
      }
    } else if (titleArray[i][0]) {
      var capitalized = titleArray[i].replace(titleArray[i][0], titleArray[i][0].toUpperCase());
      var wordWithSpace = capitalized + ' ';
      finalString += wordWithSpace;
    }
  }
  return finalString.trim();
}

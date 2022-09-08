var $letter = document.querySelectorAll('.letter');
var wholeDoc = document.querySelector('body');

function typeTest(event) {
  for (var i = 0; i < $letter.length; i++) {
    if (event.key === $letter[i].textContent) {
      $letter[i].className = 'correct-letter';
      $letter[i + 1].className = 'letter border';
    }
  }
  // if (event.key !== $letter[i].textContent) {
  //   $letter[i].className = 'incorrect-letter';
}

wholeDoc.addEventListener('keydown', typeTest);

// when typed correctly, it stays green, border bottom disappears
// the letter only has border bottom when at $letter[i]
// when typed incorrectly, the border bottom also red

// waiting for next letter is letter and border
// classes correct-letter and incorrect-letter

// PROBLEMS
// everything else turns incorrect and red,
// when it should only be when that letter is incorrect
// if the same letter exists, it turns green before the typing gets there.

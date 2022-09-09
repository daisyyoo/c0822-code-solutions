var $letter = document.querySelectorAll('.letter');
var wholeDoc = document.querySelector('body');
var counter = 0;

function typeTest(event) {
  if (event.key === $letter[counter].textContent) {
    $letter[counter].className = 'correct-letter';
    $letter[counter + 1].className = 'letter border';
    counter++;
  } else if (event.key !== $letter[counter].textContent) {
    $letter[counter].className = 'incorrect-letter';
  }
}

wholeDoc.addEventListener('keydown', typeTest);

var number = 4;
var countdownID = null;
var $header = document.querySelector('h1');

function countdown() {
  number--;
  if (number > 0) {
    $header.textContent = number;
  } else {
    $header.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownID);
  }
}

countdownID = setInterval(countdown, 1000);

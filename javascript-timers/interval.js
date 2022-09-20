setInterval(countdown, 1000);

function countdown() {
  var $header = document.querySelector('h1');
  var number = parseInt($header.textContent);
  if (number > 1) {
    number--;
    var numberString = number.toString();
    $header.textContent = numberString;
  } else if (number === 1) {
    $header.textContent = '~Earth Beeeelooowww Us~';
  }
}

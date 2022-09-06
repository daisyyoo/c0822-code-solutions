var clickedNumber = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickIncrement(event) {
  clickedNumber++;
  $clickCount.textContent = 'Clicks: ' + clickedNumber;
  for (var i = 0; i < clickedNumber; i++) {
    if (i <= 4) {
      $hotButton.className = 'hot-button cold';
    } else if (i > 4 && i <= 7) {
      $hotButton.className = 'hot-button cool';
    } else if (i > 7 && i <= 10) {
      $hotButton.className = 'hot-button tepid';
    } else if (i > 10 && i <= 13) {
      $hotButton.className = 'hot-button warm';
    } else if (i > 13 && i <= 16) {
      $hotButton.className = 'hot-button hot';
    } else {
      $hotButton.className = 'hot-button nuclear';
    }
  }
}
$hotButton.addEventListener('click', clickIncrement);

$clickCount.addEventListener('click', clickIncrement);

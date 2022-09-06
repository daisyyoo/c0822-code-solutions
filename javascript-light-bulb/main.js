var $clickBackground = document.querySelector('.background-color');
var $clickLightbulb = document.querySelector('.lightbulb');

function clickOn(event) {
  if ($clickLightbulb.className === 'lightbulb-off') {
    $clickBackground.className = 'column-full background-color';
    $clickLightbulb.className = 'lightbulb';
  } else if ($clickLightbulb.className === 'lightbulb') {
    $clickBackground.className = 'column-full background-color-off';
    $clickLightbulb.className = 'lightbulb-off';
  }
}

$clickLightbulb.addEventListener('click', clickOn);

var $background = document.querySelector('.background-color');
var $lightbulb = document.querySelector('.lightbulb');
var lightOn = true;

function clickOn(event) {
  if (lightOn === true) {
    $background.className = 'column-full background-color-off';
    $lightbulb.className = 'lightbulb-off';
    lightOn = false;
  } else if (lightOn === false) {
    var $lightbulbOff = document.querySelector('.lightbulb-off');
    $background.className = 'column-full background-color';
    $lightbulbOff.className = 'lightbulb';
    lightOn = true;
  }
}

$lightbulb.addEventListener('click', clickOn);

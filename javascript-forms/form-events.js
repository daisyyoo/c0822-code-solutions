function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name + ':', event.target.value);
}

var $focusInput = document.querySelector('#user-name');
var $blurInput = document.querySelector('#user-email');
var $inputInput = document.querySelector('#user-message');

$focusInput.addEventListener('focus', handleFocus);
$focusInput.addEventListener('blur', handleBlur);
$focusInput.addEventListener('input', handleInput);

$blurInput.addEventListener('focus', handleFocus);
$blurInput.addEventListener('blur', handleBlur);
$blurInput.addEventListener('input', handleInput);

$inputInput.addEventListener('focus', handleFocus);
$inputInput.addEventListener('blur', handleBlur);
$inputInput.addEventListener('input', handleInput);

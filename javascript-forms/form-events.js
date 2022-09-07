function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
// console.log('value of', event.target.name + ':', event.target.value);
}

var $focusInput = document.querySelector('#user-name');
var $blurInput = document.querySelector('#user-email');
var $inputInput = document.querySelector('#user-message');
$focusInput.addEventListener('focus', handleFocus);
$focusInput.addEventListener('focus', handleFocus);
$focusInput.addEventListener('focus', handleFocus);

$blurInput.addEventListener('blur', handleBlur);
$blurInput.addEventListener('blur', handleBlur);
$blurInput.addEventListener('blur', handleBlur);

$inputInput.addEventListener('input', handleInput);
$inputInput.addEventListener('input', handleInput);
$inputInput.addEventListener('input', handleInput);

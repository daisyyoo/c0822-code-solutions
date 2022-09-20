setTimeout(changeHeader, 2000);

function changeHeader() {
  var $header = document.querySelector('h1');
  $header.textContent = 'Hello There';
}

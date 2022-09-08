var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', switchTab);

function switchTab(event) {
  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewElements.length; j++) {
      if (dataView === $viewElements[j].getAttribute('data-view')) {
        $viewElements[j].className = 'view';
      } else {
        $viewElements[j].className = 'view hidden';
      }
    }

    for (var i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
  }
}

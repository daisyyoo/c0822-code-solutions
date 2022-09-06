function handleClick(event) {
  console.log('Clicked message: ', 'button clicked');
  console.log('Clicked event: ', event);
  console.log('Clicked event target: ', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('hovered message: ', 'button hovered');
  console.log('hovered event: ', event);
  console.log('hovered event target: ', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('double clicked message: ', 'button double-clicked');
  console.log('double event: ', event);
  console.log('double event target: ', event.target);
}

var $dblclick = document.querySelector('.double-click-button');
$dblclick.addEventListener('dblclick', handleDoubleClick);

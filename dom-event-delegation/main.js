var $taskList = document.querySelector('.task-list');
var $button = document.querySelectorAll('button');
$taskList.addEventListener('click', checked);

function checked(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  for (var i = 0; i < $button.length; i++) {
    if (event.target === $button[i]) {
      console.log('closest .task-list-item', $button[i].closest('.task-list-item'));
      event.target.closest('.task-list-item').remove();
    }
  }
}

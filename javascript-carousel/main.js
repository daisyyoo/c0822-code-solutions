var currentIndex = 0;
var newIndex = 1;
var countdownID = null;
var circlesAll = document.querySelectorAll('.fa-circle');
var imagesAll = document.querySelectorAll('img');
var $chevronRight = document.querySelector('.chevron-right');
var $chevronLeft = document.querySelector('.chevron-left');
var $circlesAll = document.querySelectorAll('.image-nav > i');

$chevronRight.addEventListener('click', goRight);
$chevronLeft.addEventListener('click', goLeft);
$circlesAll.addEventListener('click', circleClick);

function circleClick(event) {
  if (event.target.matches('i')) {
    // show which one it clicked and highlighted
  }
}

function showIndex(newIndex) {
  for (var i = 0; i < circlesAll.length; i++) {
    if (i === newIndex) {
      circlesAll[newIndex].className = 'fa-solid fa-circle';
      imagesAll[newIndex].className = 'show';
    } else {
      circlesAll[i].className = 'fa-regular fa-circle';
      imagesAll[i].className = 'hidden';
    }
  }
}

function showNextIndex() {
  if (currentIndex < 4) {
    newIndex++;
    currentIndex++;
  } else if (currentIndex === 4) {
    newIndex = 0;
    currentIndex = 0;
  }
  return newIndex;
}

function showPreviousIndex() {
  if (currentIndex > 0) {
    newIndex--;
    currentIndex--;
  } else if (currentIndex === 0) {
    newIndex = 4;
    currentIndex = 4;
  }
  return newIndex;
}

function imageCarousel() {
  var nextIndex = showNextIndex();
  showIndex(nextIndex);
}

function goRight(event) {
  var nextIndex = showNextIndex();
  showIndex(nextIndex);
  clearInterval(countdownID);
  countdownID = showNextIndex(goRight, 3000);
}

function goLeft(event) {
  var newIndex = showPreviousIndex();
  showIndex(newIndex);
  clearInterval(countdownID);
  countdownID = showNextIndex(goRight, 3000);
}

countdownID = showNextIndex(imageCarousel, 3000);

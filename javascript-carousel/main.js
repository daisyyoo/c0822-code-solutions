var currentIndex = 0;
var newIndex = 1;
var countdownID = null;
var circlesAll = document.querySelectorAll('.fa-circle');
var imagesAll = document.querySelectorAll('img');
var $chevronRight = document.querySelector('.chevron-right');
var $chevronLeft = document.querySelector('.chevron-left');
var $circleNav = document.querySelector('.image-nav');

$chevronRight.addEventListener('click', goRight);
$chevronLeft.addEventListener('click', goLeft);
$circleNav.addEventListener('click', circleClick);

function circleClick(event) {
  if (event.target.matches('i')) {
    event.target.closest('i').className = 'show';
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
  if (currentIndex >= 0 && currentIndex < 3) {
    newIndex++;
    currentIndex++;
  } else if (currentIndex === 3) {
    newIndex = 0;
    currentIndex++;
  } else if (currentIndex === 4) {
    newIndex++;
    currentIndex = 0;
  }
}

function showPreviousIndex() {
  if (currentIndex >= 1 && currentIndex < 4) {
    newIndex--;
    currentIndex--;
  } else if (currentIndex === 4) {
    newIndex = 4;
    currentIndex--;
  } else if (currentIndex === 0) {
    newIndex--;
    currentIndex = 4;
  }
}
function imageCarousel() {
  showIndex(newIndex);
  showNextIndex();
}

function goRight(event) {
  clearInterval(countdownID);
  showIndex(newIndex);
  showNextIndex();
  countdownID = setInterval(imageCarousel, 3000);
}

function goLeft(event) {
  clearInterval(countdownID);
  showPreviousIndex();
  showIndex(currentIndex);
  countdownID = setInterval(imageCarousel, 3000);
}

countdownID = setInterval(imageCarousel, 3000);

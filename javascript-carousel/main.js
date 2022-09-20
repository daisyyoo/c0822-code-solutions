var imageNum = 0;
var countdownID = null;
var $images = document.querySelectorAll('img');
var $chevronRight = document.querySelector('.chevron-right');
var $chevronLeft = document.querySelector('.chevron-left');
var $circle0 = document.querySelector('.circle-0');
var $circle1 = document.querySelector('.circle-1');
var $circle2 = document.querySelector('.circle-2');
var $circle3 = document.querySelector('.circle-3');
var $circle4 = document.querySelector('.circle-4');
var $circlesAll = document.querySelectorAll('.image-nav > i');

function countdown() {
  if (imageNum < 4) {
    $images[imageNum].className = 'hidden';
    $circlesAll[imageNum].className = 'fa-regular fa-circle';
    imageNum++;
    $images[imageNum].className = 'show';
    $circlesAll[imageNum].className = 'fa-solid fa-circle';
  } else if (imageNum === 4) {
    $images[imageNum].className = 'hidden';
    $circlesAll[imageNum].className = 'fa-regular fa-circle';
    imageNum = 0;
    $images[imageNum].className = 'show';
    $circlesAll[imageNum].className = 'fa-solid fa-circle';
  }
}

countdownID = setInterval(countdown, 3000);

function clickRight() {
  countdown();
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

function clickLeft() {
  if (imageNum > 0 && imageNum <= 4) {
    $images[imageNum].className = 'hidden';
    $circlesAll[imageNum].className = 'fa-regular fa-circle';
    imageNum--;
    $images[imageNum].className = 'show';
    $circlesAll[imageNum].className = 'fa-solid fa-circle';
  } else if (imageNum === 0) {
    $images[imageNum].className = 'hidden';
    $circlesAll[imageNum].className = 'fa-regular fa-circle';
    imageNum = 4;
    $images[imageNum].className = 'show';
    $circlesAll[imageNum].className = 'fa-solid fa-circle';
  }
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

$circle0.addEventListener('click', goToImg0);
$circle1.addEventListener('click', goToImg1);
$circle2.addEventListener('click', goToImg2);
$circle3.addEventListener('click', goToImg3);
$circle4.addEventListener('click', goToImg4);

function goToImg0() {
  $images[imageNum].className = 'hidden';
  $circlesAll[imageNum].className = 'fa-regular fa-circle';
  imageNum = 0;
  $images[imageNum].className = 'show';
  $circlesAll[imageNum].className = 'fa-solid fa-circle';
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

function goToImg1() {
  $images[imageNum].className = 'hidden';
  $circlesAll[imageNum].className = 'fa-regular fa-circle';
  imageNum = 1;
  $images[imageNum].className = 'show';
  $circlesAll[imageNum].className = 'fa-solid fa-circle';
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

function goToImg2() {
  $images[imageNum].className = 'hidden';
  $circlesAll[imageNum].className = 'fa-regular fa-circle';
  imageNum = 2;
  $images[imageNum].className = 'show';
  $circlesAll[imageNum].className = 'fa-solid fa-circle';
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

function goToImg3() {
  $images[imageNum].className = 'hidden';
  $circlesAll[imageNum].className = 'fa-regular fa-circle';
  imageNum = 3;
  $images[imageNum].className = 'show';
  $circlesAll[imageNum].className = 'fa-solid fa-circle';
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

function goToImg4() {
  $images[imageNum].className = 'hidden';
  $circlesAll[imageNum].className = 'fa-regular fa-circle';
  imageNum = 4;
  $images[imageNum].className = 'show';
  $circlesAll[imageNum].className = 'fa-solid fa-circle';
  clearInterval(countdownID);
  countdownID = setInterval(countdown, 3000);
}

$chevronRight.addEventListener('click', clickRight);
$chevronLeft.addEventListener('click', clickLeft);

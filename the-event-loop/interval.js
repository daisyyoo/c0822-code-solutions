var currentCount = 3;
var countdownID = setInterval(countdown, 1000);

function countdown() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(countdownID);
  }
}

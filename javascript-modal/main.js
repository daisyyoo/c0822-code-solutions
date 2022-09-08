var $openButton = document.querySelector('.open-button');
var $noButton = document.querySelector('.no');
var $backgroundClosed = document.querySelector('.dark-background-closed');
var $surveyBoxClosed = document.querySelector('.survey-box-closed align-content');
var survey = false;

function fillSurvey(event) {
  event.preventDefault();
  if (survey === true) {
    var $backgroundOpen = document.querySelector('.dark-background');
    var $surveyBoxOpen = document.querySelector('.survey-box align-content');
    $backgroundOpen.className = '.dark-background-closed';
    $surveyBoxOpen.className = '.survey-box-closed align-content';
    survey = false;
  } else if (survey === false) {
    $backgroundClosed.className = '.dark-background';
    $surveyBoxClosed.className = '.survey-box align-content';
    survey = true;
  }
}

$openButton.addEventListener('click', fillSurvey);
$noButton.addEventListener('click', fillSurvey);

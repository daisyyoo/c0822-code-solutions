var $openButton = document.querySelector('.open-button');
var $noButton = document.querySelector('.no');
var survey = true;

function fillSurvey(event) {
  event.preventDefault();
  if (survey === true) {
    var $backgroundOpen = document.querySelector('.dark-background');
    var $surveyBoxOpen = document.querySelector('.survey-box');
    $backgroundOpen.className = 'dark-background-closed';
    $surveyBoxOpen.className = 'survey-box-closed align-content';
    survey = false;
  } else if (survey === false) {
    var $backgroundClosed = document.querySelector('.dark-background-closed');
    var $surveyBoxClosed = document.querySelector('.survey-box-closed.align-content');
    $backgroundClosed.className = 'dark-background';
    $surveyBoxClosed.className = 'survey-box align-content';
    survey = true;
  }
}

$openButton.addEventListener('click', fillSurvey);
$noButton.addEventListener('click', fillSurvey);

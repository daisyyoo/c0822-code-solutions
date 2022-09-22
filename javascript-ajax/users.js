var $userList = document.querySelector('#user-list');

function getJSONWebsite() {
  var newXHR = new XMLHttpRequest();
  newXHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
  newXHR.responseType = 'json';
  newXHR.addEventListener('load', function () {
    console.log(newXHR.status);
    console.log(newXHR.response);
    for (var i = 0; i < newXHR.response.length; i++) {
      var $li = $userList.appendChild(document.createElement('li'));
      $li.textContent = newXHR.response[i].name;
    }
  });
  newXHR.send();
}
getJSONWebsite();

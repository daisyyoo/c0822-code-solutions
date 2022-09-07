var $contactForm = document.querySelector('form');

function submitForm(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.message.value;
  var messageData = {
    name,
    email,
    message
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submitForm);

// use this method down here instead
// var messageData = {
//   name: name,
//   email: email,
//   message: message
// };

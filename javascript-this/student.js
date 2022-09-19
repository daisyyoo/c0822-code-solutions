/* exported student */
var student = {
  firstName: 'Daisy',
  getFirstName: function () {
  },
  lastName: 'Yoo',
  getLastName: function () {
  },
  subject: 'JavaScript',
  getSubject: function () {
  },
  getFullName:
    function () {
      return this.firstName + ' ' + this.lastName;
    },
  getIntroduction:
    function () {
      return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    }

};

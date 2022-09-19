/* exported student */
var student = {
  firstName: 'Daisy',
  getFirstName: function () {
    return this;
  },
  lastName: 'Yoo',
  getLastName: function () {
    return this;
  },
  subject: 'JavaScript',
  getSubject: function () {
    return this;
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

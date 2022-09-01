/* exported getStudentNames */

// make new array container
// start with the first object in the array [0]
// add the name of the first object into array
// increment [0] until less than the length of the array
// add the name of each object in between each iteration
// when loop is exited, print out new array

function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

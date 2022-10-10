/* exported omit */

// make an empty object container
// run a for in loop
// use a for loop to loop through keys array
// if keys[i] !== undefined, add it into a different array
// if it is undefined, then add into another different object container
// output the desired object container

function omit(source, keys) {
  var needed = {};
  var array = keys;
  for (keys in source) {
    for (var i = 0; i < array.length; i++) {
      if (keys === array[i]) {
        array.shift(i);
        i++;
        break;
      } else {
        needed[keys] = source[keys];
        i++;
      }
    }
  }
  return needed;
}

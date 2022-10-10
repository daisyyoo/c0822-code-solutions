/* exported pick */

// make new object container
// Use a for loop to loop through the keys array
// if it exists in keys array,
// then add into object
// return new object container

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }
  return newObject;
}

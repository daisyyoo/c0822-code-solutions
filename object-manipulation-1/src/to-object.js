/* exported toObject */

// make an empty object container
// using the array index, add the first array value to the object to name the property
// then equal it to the second array value for the value of the property
// output the object container

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

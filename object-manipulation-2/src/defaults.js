/* exported defaults */

// 2 for in loops, the first one to loop through source object
// get the property
// then do second loop of the target object and get property
// if source[property] !== target[property],
// then add it into the target object
// if not, then move on

function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

/* exported defaults */

// 2 for in loops, the first one to loop through source object
// get the property
// then do second loop of the target object and get property
// if source[property] !== target[property],
// then add it into the target object
// if not, then move on

// function defaults(target, source) {
//   for (key in source) {
//     for (var i = 0; i < Object.keys.length; i++) {
//       if (key !== Object.keys(target)[i]) {
//         source[key] = target[key];
//         target[key] = source[key];
//       } else if (source[key] !== target[key]) {
//         source[key] = target[key];
//         target[key] = source[key];
//       }
//     }
//   }
// }

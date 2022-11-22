/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)  // constant time
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n) // linear time
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) // linear time
    if (!seen[word]) {              // 3 * n = O(3n) ~= O(n)
      seen[word] = true;            // 2 * n = O(2n) ~= O(n)
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1) // constant time
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) // constant time
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n) // linear time
    i++                             // 2 * n = O(2n) ~= O(n) // linear time
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) // linear time
    let isUnique = true;            // 1 * n = O(1)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 1 * n * n = O(n^2) // quadratic time
      c++                           // 2 * n * n = O(2n^2) ~= O(n^2)
    ) {
      const comparing = words[c];   // 2 * n * n = O(2n^2) ~= O(n^2)
      if (comparing === word) {     // 2 * n * n = O(2n^2) ~= O(n^2)
        isUnique = false;           // 1 * n * n = O(n^2) // quadratic time
      }
    }
    if (isUnique) {                 // 1 * n = O(n) // linear time
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) // linear time
    }
  }
  return unique;                    // 1 * 1 = O(1) // constant time
} // Big O Notation for uniqueQuadratic: O(n^2) // quadratic time

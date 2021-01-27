// Rabin-Karp Algorithm
// Time Complexity: O(nm)
// Space Complexity: O(1)
// can be used when multiple pattern has the same length.
// Plagarism detection

const prime = 101;

function searchRabinKarp(text, pattern) {
  let matches = [];
  let m = pattern.length;
  let hashPattern = createHash(pattern, m);
  let hashText = createHash(text, m);
  let primeToPower = Math.pow(prime, m);
  let endIndex = text.length - m;

  for (let i = 0; i <= endIndex; i++) {
    if (hashText === hashPattern) {
      if (checkEqual(i, text, pattern)) {
        matches.push(i);
      }
    }
    hashText = prime * hashText - primeToPower * text.charCodeAt(i) + text.charCodeAt(i + m);
  }

  return matches;
}

function checkEqual(index, text, pattern) {
  for (let j = 0; j < pattern.length; j++) {
    if (text[index + j] !== pattern[j]) {
      return false;
    }
  }
  return true;
}
  
function createHash(str, end) {
  let hash = 0;
  for (let i = 0; i < end && i < str.length; i++) {
    hash = prime * hash + str.charCodeAt(i);
  }
  return hash;
}

// Rolling Hash:
// Prime: 101, String "abc"
// hashAbc = a * p^0 + b * p^1 + c * p^2
// hash of bcd: ((hashAbc - a) / p) + d * p^2
// or
// hashAbc = (((p * 0) + a) * p + b) * p + c;
// hash of bcd: (hashAbc * p) - a * p^2 + d;

console.log(searchRabinKarp("AABAACAADAABAABA","AABA"));
// 0, 9, 12

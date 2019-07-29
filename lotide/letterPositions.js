const assertArraysEqual = function (array1, array2) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log("Arrays are not the same");
        return false;
      }
    }

  } else {
    console.log("arrays not same length, therefore not the same");
    return false;
  }
  console.log("arrays are the same!");
  return true;
} 

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed: " + [actual] + " === " + [expected]);
  }
  else {
    console.log("🚫Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

const letterPositions = function(sentence) {
  let results = {};
  for (var letter of sentence) {
  results[letter] = [];
  } 
  for (var a in results) {
    for (var i = 0; i < sentence.length; i++) {
      if (a === sentence[i]) {
        results[a].push(i)
      }
    } 
  } return results
}




console.log(letterPositions("lighthouse in the house"))

{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

assertArraysEqual(letterPositions("hello").e, [1]);

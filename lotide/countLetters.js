
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed: " + [actual] + " === " + [expected]);
  }
  else {
    console.log("🚫Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};


const countLetters = function(phrase){
  var dict = {};
  for (var letter of phrase){
    dict[letter] = 0
    for (var i = 0; i < phrase.length; i++){
      if (letter === phrase[i]){
        dict[letter] += 1
      }
    }
  }
  return dict
}


console.log(countLetters("lighthouse in the house"))

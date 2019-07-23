var word = process.argv[2];

obfuscate = function(word){
  var str = ""
  var word1 = word
  for (var i = 0; i < word1.length; i++) {
    if (word1[i] === "a") {
      str += 4
    } else if (word1[i] === "e") {
      str += 3
    }
    else if (word1[i] === "o") {
      str +=  0
    }
    else if (word1[i] === "l") {
      str +=  1
    }
    else {
      str += word[i]
    }
  } return (str)
} 


console.log(obfuscate(word))
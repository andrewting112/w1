const findKey = function(object, callback){
  for (var key in object) {
    if (callback(object[key])) {
      return key
    }
  }
}
const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const results1 = findKey(data1, x => x.stars === 2);
console.log(results1);


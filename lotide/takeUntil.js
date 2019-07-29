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


  

const takeUntil = function(array, callback) {
  newArray = []
  for (var i = 0; i < array.length; i++){
    if (callback(array[i])){
      return newArray;
    }
    newArray.push(array[i])
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data1, x => x === ',');
console.log(results2);
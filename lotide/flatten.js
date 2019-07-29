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

function eqArrays(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) 
    return false;
  }
  return true;
}


  const flatten = function (array1) {
  var flattened = [];
  for (var a = 0; a < array1.length; a++) {
    if (Array.isArray(array1[a])) {
      for (var b = 0; b < array1[a].length; b++) {
        flattened.push(array1[a][b]);
      }
    } else {
      flattened.push(array1[a]);
    }
  }

  return flattened;


}


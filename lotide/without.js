const without = function(array1, exclude) {
  for(var a = 0 ; a< exclude.length; a++) {
    for(var b = 0; b< array1.length; b++) {
      if(array1[b] === exclude[a]){
        array1.splice(b,1);
      }
    }
  }
   return array1;
}









console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
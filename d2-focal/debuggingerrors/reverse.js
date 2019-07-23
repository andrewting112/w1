var s = process.argv[2];


function reverseString (s) {
  return s.split("").reverse().join("") ;
}

console.log(reverseString(s));
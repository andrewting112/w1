function reverseString (s) {
  return s.split("").reverse().join("") ;
}

console.log(reverseString(process.argv.slice(2).join("\n")));
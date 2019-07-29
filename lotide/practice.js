let middle = function (array) {
  if (array.length <= 2) {
    return []
  } else if (array.length % 2 === 0) {
    var even = [array[(array.length) / 2 - 1], array[(array.length / 2)]]
    return even
  } else {
    var oddMiddle = [Math.floor((array.length) / 2) + 1];
    return oddMiddle;
  }
}

console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))




function sumItems(arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])) {
      total += sumItems(arr[i])
    }
    else {
      total += arr[i]
    }
  }
  return total
}

module.exports = sumItems;
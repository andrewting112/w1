const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    var middle = [arr[(arr.length) / 2 - 1], arr[(arr.length / 2)]];
    return middle;
  } else {
    var oddMiddle = [Math.floor((arr.length) / 2) + 1];
    return oddMiddle;
  }
}

module.exports = middle;

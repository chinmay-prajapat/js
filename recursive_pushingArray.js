function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    var output = rangeOfNumbers(startNum, endNum - 1);
    output.push(endNum);
    return output;
  }
}
console.log(rangeOfNumbers(1, 10));

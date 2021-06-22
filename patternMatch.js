"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine().trim(), 10);
  var myArr = [];
  for (let NItr = 0; NItr < N; NItr++) {
    const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

    const firstName = firstMultipleInput[0];
    // this is a check
    const emailID = firstMultipleInput[1];
    if (/@gmail/.test(emailID)) {
      myArr.push(firstName);
    }
  }
  myArr.sort(function (a, b) {
    return a.localeCompare(b);
  });
  console.log(myArr.join("\n"));
}

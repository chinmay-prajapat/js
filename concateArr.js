let myFun = (x) => {
  let re = x.toString();
  let sum = [];
  for (var i = 0; i < re.length; i++) {
    sum.push(re[i] ** 2);
  }
  return sum.join("");
};
console.log(myFun(9119));

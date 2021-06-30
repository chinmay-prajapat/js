myFun = (x) => {
  x = x.split("");

  for (i = 0; i < x.length; i++) {
    let j = i - 1;
    let key = x[i];
    while (j >= 0 && x[j] > key) {
      x[j + 1] = x[j];
      j--;
    }
    x[j + 1] = key;
  }
  return x;
};

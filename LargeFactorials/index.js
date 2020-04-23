function factorial(n) {
  let res = [1];
  for (let i = 2; i <= n; ++i) {
    // 2，3，4，5，。。。，n
    for (let j = 0; j < res.length || c !== 0; ++j) {
      c += (res[j] || 0) * i;
      res[j] = c % 10;
      c = Math.floor(c / 10);
    }
  }
  return res.reverse().join("");
}

console.log(factorial(100))
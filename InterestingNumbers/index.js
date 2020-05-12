function isInteresting(number, awesomePhrases) {
  // Go to town!
  // 前置条件
  if (number <= 99) {
    return 0;
  }

  //
}

/**
 * 是否为回文序列
 * @param{string[]} number
 */
function isPalindrome(number) {
  let len = number.length, i = 0, mid = Math.floor(len / 2), nearFlag = false;
  for (; i < mid; i++) {
    let p = number[i], n = number[len - 1 - i];
    if (p !== n) {
      if (i === 0) {
        // 宽容序列
        if (Number(p) === Number(n + 1) || Number(p) === Number(n + 2)) {
          nearFlag = true;
        }
      } else {
        break;
      }
    }
  }
  console.log("+++", i, nearFlag)

  return nearFlag ? 1 : (i === mid ? 2 : 0)
}
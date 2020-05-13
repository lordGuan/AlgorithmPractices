/**
 * 是否有趣
 * @param{number} number
 * @param{number[]} awesomePhrases
 * @return {number}
 */
function isInteresting(number, awesomePhrases) {
  // Go to town!
  // 最小的有趣数是100，最小输入值是98
  if (number < 98) {
    return 0;
  }


  function check(number) {
    let arr = String(number).split('')
    return number >= 100 && (isIncreasing(number)
      || isDiminishing(number)
      || isTailZero(arr)
      || isTotalSame(arr)
      || isPalindrome(arr)
      || awesomePhrases.indexOf(number) > -1)
  }


  // 精确判断
  if (check(number)) {
    return 2
  }

  if (check(number + 1) || check(number + 2)) {
    return 1
  }

  return 0
}

/**
 * 是否为回文序列
 * @param{string[]} number
 */
function isPalindrome(number) {
  let len = number.length, i = 0, mid = Math.floor(len / 2);
  for (; i < mid; i++) {
    if (number[i] !== number[len - 1 - i]) {
      break;
    }
  }

  return i === mid
}

/**
 * 是否为自增序列
 * @param{number} number
 */
function isIncreasing(number) {
  let T = "1234567890"
  return T.indexOf(String(number)) > -1
}

/**
 * 是否为递减序列
 * @param{number} number
 */
function isDiminishing(number) {
  let T = "9876543210"
  return T.indexOf(String(number)) > -1
}

/**
 * 是否为尾零序列
 * @param{string[]} number
 */
function isTailZero(number) {
  let flag = true
  for (let i = 1; i < number.length; i++) {
    if (number[i] !== '0') {
      flag = false
      break
    }
  }
  return flag
}

/**
 * 是否每一位数都相同
 * @param{string[]} number
 */
function isTotalSame(number) {
  let s = number[0], flag = true
  for (let i = 1; i < number.length; i++) {
    if (number[i] !== s) {
      flag = false
      break
    }
  }
  return flag
}
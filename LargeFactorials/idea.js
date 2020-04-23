/**
 * 普通阶乘算法
 * @param{number} n
 * @private
 */
function _factorials(n) {
  if (n < 0) {
    return null
  }
  if (n === 0) {
    return '1'
  }

  // 循环法
  let result = '1';
  for (let i = 2; i <= n; i++) {
    result = _timeStrings(result, String(i))
  }

  return result
}


console.log(_factorials(15))

/**
 * 仅限于其中一个乘数为个位数
 * @param{string} a
 * @param{string} b
 * @private
 */
function _timeStrings(a, b) {
  let aToArray = a.split(''),
    bToArray = b.split(''),
    x, y

  if (aToArray.length > bToArray.length) {
    x = aToArray
    y = bToArray
  } else {
    x = bToArray
    y = aToArray
  }

  let xLength = x.length,
    yLength = y.length,
    sumCarry = 0,
    result = []


  for (let i = 1; i <= yLength; i++) {
    let yBit = Number(y[yLength - i])
    let timeCarry = 0
    let sumCarry = 0
    for (let j = 1; j <= xLength; j++) {
      let xBit = Number(x[xLength - j])

      // 处理乘法
      let timeResult = xBit * yBit + timeCarry
      let timeLeft = timeResult % 10
      timeCarry = (timeResult - timeLeft) / 10

      // 处理加法
      let sumBit = result[i + j - 2] || 0
      let sumResult = sumBit + timeLeft + sumCarry
      let sumLeft = sumResult % 10
      result[i + j - 2] = sumLeft
      sumCarry = (sumResult - sumLeft) / 10
    }
    if (timeCarry !== 0 || sumCarry !== 0) {
      result.push(timeCarry + sumCarry)
    }
  }

  // 这里不再考虑0开头的数字
  return result.reverse().join('')
}

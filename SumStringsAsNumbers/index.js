/**
 * 大数加法
 * @param{string} a
 * @param{string} b
 */
function sumStrings(a, b) {
  let bigger, smaller, aToArray = a.split(''), bToArray = b.split(''), carry = 0

  // 如果a比b位数少
  if (a.length > b.length) {
    bigger = aToArray
    smaller = bToArray
  } else {
    bigger = bToArray
    smaller = aToArray
  }

  let biggerLength = bigger.length,
    smallerLength = smaller.length

  // 注意处理增位
  for (let i = 1; i <= bigger.length; i++) {
    let biggerBit = Number(bigger[biggerLength - i]), bitResult = biggerBit
    // 判断smaller是否被加完了
    if (smallerLength - i >= 0) {
      bitResult += Number(smaller[smallerLength - i])
    }

    bitResult += carry

    // 当前位和值大于10，计算进位量
    if (bitResult >= 10) {
      let left = bitResult % 10
      bigger[biggerLength - i] = String(left)
      carry = (bitResult - left) / 10
    } else {
      bigger[biggerLength - i] = String(bitResult)
      carry = 0
    }
  }

  // 要清空多余的0
  return bigger.reduce((prev, curr) => {
    if (prev === '') {
      if (curr === '0') {
        return prev
      } else {
        return prev + curr
      }
    } else {
      return prev + curr
    }
  }, carry === 0 ? '' : String(carry))
}

console.log(sumStrings('99', '1'))
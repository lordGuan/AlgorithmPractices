import isInteger from 'lodash/isInteger'
import padEnd from 'lodash/padEnd'

/**
 * padEnd函数第二个参数是要修正到的指定长度，并不是需要追加的长度
 * @param number
 * @param decimal
 */
export const intercept = (number: number, decimal: number = 8) => {
  if (isNaN(number) || !isFinite(number)) {
    number = 0
  }
  let numStr = String(number)
  if (isInteger(number)) {
    // 整数补零
    if (decimal > 0) {
      numStr += '.'
      numStr = padEnd(numStr, decimal + numStr.length, '0')
    }
  } else {
    // 科学计数法
    if (numStr.indexOf('e-') >= 0 || numStr.indexOf('E-') >= 0) {
      numStr = number.toFixed(decimal + 1)
    }
    let [integerPart, decimalPart] = numStr.split('.')
    decimalPart = decimalPart || ''
    if (decimalPart.length < decimal) {
      numStr = padEnd(numStr, decimal - decimalPart.length, '0')
    } else {
      numStr = `${integerPart}.${decimalPart.substr(0, decimal)}`
    }
  }
  return numStr
}

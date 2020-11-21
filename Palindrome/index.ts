/**
 * 判断是否回文序列(递归式)
 * @param str
 * @param left
 */
export function palindrome(str: string, left = 0): boolean {
    let last = str.length - left - 1
    if (left >= last) return true
    if (str[left] === str[last]) {
        return palindrome(str, left + 1)
    } else {
        return false
    }
}

/**
 * 判断是否回文序列(简单循环式)
 * @param str
 */
export function palindrome_2(str: string): boolean {
    let length = str.length
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (str[i] !== str[length - i - 1]) return false
    }
    return true
}

/**
 * 判断是否回文序列(api式)
 * @param str
 */
export function palindrome_3(str: string): boolean {
    return str.split('').reverse().join('') === str
}

/**
 * 计算最长回文子序列长度
 * 思路：递归到最小子问题(包含重复子问题)
 * @param str
 * @param i
 * @param j
 */
export function lps(str: string, i = 0, j = str.length - 1): number {
    if (i === j) return 1
    if (i > j) return 0
    if (str[i] === str[j]) {
        return lps(str, i + 1, j - 1) + 2
    } else {
        return Math.max(lps(str, i + 1, j), lps(str, i, j - 1))
    }
}

/**
 * 动态规划法求最长回文子序列长度
 * cabbaeac
 * @param str
 */
export function lps_2(str: string): number {
    let length = str.length
    let record = new Array(length)
    for (let i = 0; i < length; i++) {
        let _recode = new Array(length).fill(0)
        _recode[i] = 1
        record[i] = _recode
    }

    for (let i = 1; i < length; i++) {
        for (let j = 0; j + i < length; j++) {
            record[j][j + i] = str[j] === str[j + i] ?
                (record[j + 1][j + i - 1] + 2) :
                (Math.max(record[j + 1][j + i], record[j][j + i - 1]))
        }
    }


    return record[0][length - 1]
}
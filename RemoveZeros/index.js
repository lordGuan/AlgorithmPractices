function removeZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isZero(arr[i])) {
      // 找到一个零元素
      for (let j = i + 1; j < arr.length; j++) {
        // 找之后的第一个非零元素
        // a[j-1]移动到a[j],a[j-2]移动到a[j-3],...,a[i]移动到a[i+1]
        if (!isZero(arr[j])) {
          for (let k = 0; j - k > i; k++) {
            swap(arr, j - k - 1, j - k)
          }
          break
        }
      }
    }
  }
  return arr
}

function isZero(ele) {
  return ele === '0' || ele === 0
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

let target = [3, '0', 2, '0', 1, 0, -1, -2]

console.log(removeZeros(target))

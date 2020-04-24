/**
 * 应该叫旋转输出
 * 入参一定是一个矩阵
 * @param{Array<Array<number>>} array
 */
function snail(array) {
  let result = []
  let n = array[0].length // 矩阵阶数：注意0阶矩阵表达为[[]]
  let i = 0, j = 0, direction = 0

  while (n > 0) {
    // 记录元素
    result.push(array[i][j])

    // 如果记录完全，则退出
    if (result.length >= n * n) {
      break
    }

    // 选择"walk"方向
    if (direction === 0 && j + i === n - 1) {
      direction = 1 // 向下
    } else if (direction === 1 && j === i) {
      direction = 2 // 向左
    } else if (direction === 2 && i + j === n - 1) {
      direction = 3
    } else if (direction === 3 && i - j === 1) {
      direction = 0
    }

    // 根据方向移动坐标
    switch (direction) {
      case 0: // 向右 j++
        j++
        break
      case 1: // 向下 i++
        i++
        break
      case 2: // 向左 j--
        j--
        break
      case 3: // 向上 i--
        i--
        break
      default:
    }
  }

  return result
}


console.log(snail([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]))

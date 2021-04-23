// 寻找数组的中心索引
//输入：nums = [1, 7, 3, 6, 5, 6]
// 输出：3
// 解释：
// 中心下标是 3 。
// 左侧数之和 (1 + 7 + 3 = 11)，
// 右侧数之和 (5 + 6 = 11) ，二者相等。

export function pivotIndex(nums: number[]): number {
  let SUM = nums.reduce((total, n) => total + n, 0)

  let i = 0, left = 0

  while (i < nums.length) {
    let temp = (SUM - nums[i]) / 2

    if (temp === left) {
      return i
    }
    left += nums[i++]
  }


  return -1
}

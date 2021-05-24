export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let m = nums1.length, n = nums2.length, total = m + n
  let i = m - 1, j = n - 1
  let flag = total % 2 === 0
  let temp = []
  while (temp.length < (flag ? (total + 2) / 2 : (total + 1) / 2)) {
    let a = i < 0 ? -Infinity : nums1[i]
    let b = j < 0 ? -Infinity : nums2[j]
    temp.push(a > b ? nums1[i--] : nums2[j--])
  }

  return flag ? (temp.pop() + temp.pop()) / 2 : temp.pop()
}

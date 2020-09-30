/**
 * 先排序，再测试
 * 但是会产生副作用
 * 且不知道为什么内存占用奇高，可能是排序过程内存消耗
 * @param nums
 */
export function majorityElement(nums: number[]): number {
    if (nums.length <= 0) return -1
    if (nums.length === 1) return nums[0]
    nums.sort((a, b) => a - b)
    const middle = Math.ceil(nums.length / 2 - 1)
    for (let i = 0; i <= middle; i++) {
        if (nums[i] === nums[i + middle]) return nums[i]
    }
    return -1
}

/**
 * 摩尔投票法
 * 执行速度和内存占用不相上下，内存不知道消耗在哪了
 * 用Map的方式居然是最省内存
 * @param nums
 */
export function majorityElement_2(nums: number[]): number {
    if (nums.length <= 0) return -1
    let count = 0
    let major = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            major = nums[i]
            count++
        } else {
            nums[i] === major && count++ || count--
        }
    }
    if (count > 0) {
        let check = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === major) {
                check++
                if (check > nums.length / 2) return major
            }
        }
        return -1
    }
    return -1
}

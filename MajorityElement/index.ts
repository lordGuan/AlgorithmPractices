export function majorityElement(nums: number[]): number {
    if (nums.length <= 0) return -1
    if (nums.length === 1) return nums[0]
    const s = nums.sort((a, b) => a - b)
    const l = s.length
    const middle = Math.ceil(l / 2 - 1)
    for (let i = 0; i <= middle; i++) {
        let last = l % 2 === 0 ? 0 : 1
        if (s[i] === s[i + middle - last]) return s[i]
    }
    return -1
}

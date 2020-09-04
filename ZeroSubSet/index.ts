/**
 * 很暴力的暴力法
 * @param list
 * @param sum
 * @param depth
 * @param start
 */
export function find(list: number[], sum = 0, depth = 3, start = 0): number[][] {
    let result = []
    for (let i = start; i < list.length - depth + 1; i++) {
        if (depth === 1) {
            if (sum - list[i] === 0) {
                result.push([list[i]])
            }
        } else {
            let sub = find(list, sum - list[i], depth - 1, i + 1)
            sub.forEach(s => s.push(list[i]))
            result = result.concat(sub)
        }
    }
    return result
}

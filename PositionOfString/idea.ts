function get(num: string) {
    for (let i = num.length - 1; i >= 0; i--) {
        out(num.slice(0, i), num.slice(i))
    }
}

function out(a: string, b: string) {
    const type = `split:${a.length},${b.length}`
    if (a === '') {
        console.log(type, +b - 1, +b, +b + 1)
    } else {
        let tryTime = 0
        while (true) {
            let exp = Math.pow(10, a.length + tryTime)
            let after = +b * exp + (+a)
            if (Math.floor((after + 1) / exp) === +b) {
                console.log(type, after, after + 1)
                break
            } else {
                tryTime++
            }
        }
    }
}

/**
 * 统计长度
 * @param num
 */
function count(num: string) {
    let l = num.length
    let result = (+num - Math.pow(10, l - 1)) * l
    for (let i = 1; i < l; i++) {
        result += 9 * Math.pow(10, i - 1) * i
    }
    return result
}

function idea(num: string) {
    let l = num.length
    for (let i = 0; i < l; i++) {

    }
}


get('998')


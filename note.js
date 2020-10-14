function gridIndex(grid, indices) {
    const n = (grid[0] || []).length

    let result = ''

    indices.forEach(id => {
        let realId = id - 1
        let i = Math.floor(realId / n)
        let j = realId % n

        result += grid[i][j]
    })

    return result
}


function solution(list) {
    // TODO: complete solution
    // 至少三连才能算区间

    let result = ''

    let last = list.reduce((prev, curr) => {
        if (prev.length <= 0) {
            prev.push(curr)
            return prev
        } else {
            if (curr - prev[prev.length - 1] === 1) {
                prev.push(curr)
                return prev
            } else {
                if (prev.length < 3) {
                    result += prev.join(',')
                } else {
                    result += (prev[0] + "-" + prev[prev.length - 1])
                }
                result += ','
                return [curr]
            }
        }
    }, [])

    if (last.length < 3) {
        result += last.join(',')
    } else {
        result += (last[0] + "-" + last[last.length - 1])
    }

    return result
}

//```
//EFhZINtl3rgKW9
//bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir
//dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp
//!@#$%^&*()_+-
//abcdefghijklmnopqrstuvwxyz
//bdfhjlnprtvxzBDFHJLNPRTVXZ
//dhlptxBFJNRVZ37,aeimquyCGK
//hpxFNV3,emuCKS08bjrzHPX5 g
//
//```



function A(c,i) {
    let offset = c.charCodeAt(0) - 97
    let k = (i+offset) % 66

    return 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'[k]
}

function _A(c, i) {
    i = i % 66
    let index = 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'.indexOf(c)

    return index + 97 - i
}


function encode(str) {
    return str.split('').map((c,i)=>A(c,i)).join('')
}

function decode(str) {
    return str.split('').map((c,i)=>_A(c,i)).join('')
}

const decodeA = encode('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
console.log(decodeA)
console.log( decodeA === 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir')

const decodeB = encode('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
console.log(decodeB)
console.log(decodeB === 'dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp')

const temp = decode('dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp')

console.log(temp)


// https://www.codewars.com/kata/52cf02cd825aef67070008fa/train/javascript

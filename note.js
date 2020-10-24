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

// console.log (device.encode ('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')) ;
// console.log (device.encode ('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')) ;
// console.log (device.encode ('!@#$%^&*()_+-')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz') ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//     return device.encode (a) ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//     return device.encode ('_'+a)[1] ;
// }).join ('')) ;
// console.log ('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
//     return device.encode ('__'+a)[2] ;
// }).join ('')) ;

//```
//EFhZINtl3rgKW9
// 'a'的0-65
//bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir
//dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp
//!@#$%^&*()_+-
//abcdefghijklmnopqrstuvwxyz
//bdfhjlnprtvxzBDFHJLNPRTVXZ
//dhlptxBFJNRVZ37,aeimquyCGK
//hpxFNV3,emuCKS08bjrzHPX5 g
//
//```

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 13579, acegikmoqsuwyACEGIK
// OSW048?bfjnrvzDHLPTX159 cg
// owEMU2.dltBJRZ7aiqyGOW4?fn
// 'A'的0-65
// 1OoD70MkvRuPqHabdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA 1OoD70MkvRuPq

// 0-9
// MoLyoAVqjM

const map = {
    "0": "M",
    "1": "O",
    "2": "Q",
    "3": "S",
    "4": "U",
    "5": "W",
    "6": "Y",
    "7": "0",
    "8": "2",
    "9": "4",
    " ": "?",
    "!": "!",
    "\"": "\"",
    "#": "#",
    "$": "$",
    "%": "%",
    "&": "&",
    "'": "'",
    "(": "(",
    ")": ")",
    "*": "*",
    "+": "+",
    ",": "8",
    "-": "-",
    ".": "6",
    "/": "/",
    ":": ":",
    ";": ";",
    "<": "<",
    "=": "=",
    ">": ">",
    "?": ".",
    "@": "@",
    "A": "1",
    "B": "3",
    "C": "5",
    "D": "7",
    "E": "9",
    "F": ",",
    "G": " ",
    "H": "a",
    "I": "c",
    "J": "e",
    "K": "g",
    "L": "i",
    "M": "k",
    "N": "m",
    "O": "o",
    "P": "q",
    "Q": "s",
    "R": "u",
    "S": "w",
    "T": "y",
    "U": "A",
    "V": "C",
    "W": "E",
    "X": "G",
    "Y": "I",
    "Z": "K",
    "[": "[",
    "\\": "\\",
    "]": "]",
    "^": "^",
    "_": "_",
    "`": "`",
    "a": "b",
    "b": "d",
    "c": "f",
    "d": "h",
    "e": "j",
    "f": "l",
    "g": "n",
    "h": "p",
    "i": "r",
    "j": "t",
    "k": "v",
    "l": "x",
    "m": "z",
    "n": "B",
    "o": "D",
    "p": "F",
    "q": "H",
    "r": "J",
    "s": "L",
    "t": "N",
    "u": "P",
    "v": "R",
    "w": "T",
    "x": "V",
    "y": "X",
    "z": "Z",
    "{": "{",
    "|": "|",
    "}": "}",
    "~": "~"
}


function A(c, i) {
    let offset = c.charCodeAt(0) - 97
    let k = (i + offset) % 66

    return 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'[k]
}

function _A(c, i) {
    i = i % 66
    let index = 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHa'.indexOf(c)

    return index + 97 - i
}


function encode(str) {
    return str.split('').map((c, i) => A(c, i)).join('')
}

function decode(str) {
    return str.split('').map((c, i) => _A(c, i)).join('')
}

const decodeA = encode('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
console.log(decodeA)
console.log(decodeA === 'bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir')

const decodeB = encode('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
console.log(decodeB)
console.log(decodeB === 'dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp')

const temp = decode('dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp')

console.log(temp)


// https://www.codewars.com/kata/52cf02cd825aef67070008fa/train/javascript

/**
 * 编码
 * @param code{number} ASCII码
 * @param index{number} 出现位置
 * @constructor
 */
function F(code, index) {
    index = index % 66
    return code + (Math.pow(2, index + 1) - 1)
}

// F(x, i) === F(x - 1, i - 1)

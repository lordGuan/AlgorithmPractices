# 有趣数问题

## 问题描述
满足以下条件称为"有趣"：
- 任何尾数都是0的数：1000，90000
- 每个数字都相同: 1111
- 升序（即"1234567890"的子序列）: 1234，7890
- 降序（即"9876543210"的子序列）: 4321
- 回文序列: 1221 or 73837
- 在第二个参数awesomePhrases中

入参严格满足上述条件返回2；入参与最接近的有趣数之间相差2或1且小于这个最接近的有趣数返回1；完全不是的返回0

## 例子
```js
// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
```

## 连接
https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript

## 思路
分很多子算法，判断回文序列，判断子序列等  
优化先后判断的顺序（比如第一位数和第二位数相同，不可能是第一种情况等）  
判断近似情况
/**
 * idea1 先处理没有重复字母的情况
 * 注意：这里为了方便处理，str其实是str.split("")
 * 如果str不包含重复字母，数量关系上应该是：permutations(str) = str.length * permutations(str*)
 * 理论上递归的终止条件是str.length === 1，此时应当返回1
 * @param str
 */
function permutations(str) {
  if (str.length === 1) {
    return 1;
  }
  let result = 0;
  // 理论上求str组合数，要讨论str每一个元素做起始元素的情况，所以循环str是一定的
  for (let i = 0; i < str.length; i++) {
    let newArr = [...str];
    newArr.splice(i, 1);
    result += permutations(newArr);
  }

  return result;
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function isEqual(arr, step, i) {
  // 自我对换不处理
  if (step === i) {
    return false
  }
  // 至少和str[step]的自我对换是等价的
  if (arr[step] === arr[i]) {
    return true;
  }
  // 从i+1开始寻找，如果有和str[i]，则把交换过程放到swap(step,k)
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[k] === arr[i]) {
      return true;
    }
  }
  return false;
}

function isEqual2(arr, step, i) {
  for (let p = step; p < i; p++) {
    if (arr[p] === arr[i]) {
      return true;
    }
  }
  return false;
}

/**
 * idea2 在idea1的前提下，优化临时数组的问题
 * @param str
 * @param step 标记递归到了哪一步，默认是0
 * @param result 保存结果的数组
 */
function permutations2(str, step = 0, result = []) {
  if (str.length === step + 1) {
    result.push(str.join(""));
  }
  // 本次调用针对是的str[step]到str[str.length-1]的子串
  for (let i = step; i < str.length; i++) {
    if (!isEqual3(str, step, i)) {
      // 对换来得到除了首字母以外的剩余部分
      swap(str, step, i);
      // 针对剩下的部分
      permutations2(str, step + 1, result);
      swap(str, step, i);
    }
  }
  return result;
}

// console.log(permutations("aaab".split("")));
console.log(permutations2("aaab".split("")));

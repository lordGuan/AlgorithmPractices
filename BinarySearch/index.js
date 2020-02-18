/**
 * 循环二分查找 查找到一个就返回
 * @param arr 升序序列
 * @param target 目标
 * @return number 目标下标，不存在返回-1
 */
function binary_search_1(arr, target) {
  let low = 0, high = arr.length - 1, mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      high = mid - 1;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    }
  }
  return -1;
}

/**
 * 递归二分查找，递归临时数组
 * @param arr 升序序列
 * @param target 目标
 * @return number 目标下标，不存在返回-1
 */
function binary_search_2(arr, target) {
  let mid = Math.floor((arr.length - 1) / 2);
  if (arr[mid] > target) {
    return binary_search_2(arr.slice(0, mid), target);
  }
  
  if (arr[mid] < target) {
    let temp = binary_search_2(arr.slice(mid + 1), target);
    return temp !== -1 ? (mid + temp + 1) : -1;
  }
  
  if (arr[mid] === target) {
    return mid;
  }
  
  return -1;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(i => {
  console.log(binary_search_1(a, i));
  console.log(binary_search_2(a, i));
});


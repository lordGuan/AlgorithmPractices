// 快速排序
// 1. 基准位
// 2. 左右两个锚点向中间扫描（为的是找基准为的位置，同时让基准位左边的集合都小于基准位，右边的集合都大于基准位）
// 3. 对左右两边的集合进行递归

// 1. 需要交换函数
// 2. 需要进行递归

/**
 * 交换函数
 * @param arr
 * @param i
 * @param j
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 快速排序（递归）
 * @param arr 集合
 * @param left 左锚点
 * @param right 右锚点
 */
function quick_sort(arr, left, right) {
  if (left > right) {
    return;
  }
  
  // 记录基准位
  // i和j是真正移动的锚点
  // left和right是递归过程中的区间指示
  let p = arr[left], pIndex = left,
    i = left, j = right;
  
  while (i !== j) {
    
    // 都是右边先动，找到不满足划分的位置
    while (arr[j] >= p && i < j) {
      j--;
    }
    while (arr[i] <= p && i < j) {
      i++;
    }
    
    if (i < j) {
      swap(arr, i, j);
    }
  }
  
  // 找到基准位
  arr[pIndex] = arr[left];
  arr[left] = p;
  
  // 左边集合的递归
  // 因为i是标准位，不用在参与了
  quick_sort(arr, left, i - 1);
  quick_sort(arr, i + 1, right)
}

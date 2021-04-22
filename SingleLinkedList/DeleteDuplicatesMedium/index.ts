import {ListNode} from "../listNode";

/**
 * 100ms(51%) 40.9(11%)
 * @param head
 */
function deleteDuplicates_v1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  // 初始条件
  let _head = null, _tail = null, a = head, b = head.next

  function push(node: ListNode) {
    if (!_head) {
      _head = _tail = node
    } else {
      _tail.next = node
      _tail = node
    }
  }

  let count = 0
  while (b) {
    if (a.val === b.val) {
      b = b.next
      count++
    } else {
      if (count === 0) {
        // a 是独一无二的
        push(a)
      }
      // a到b-1都要删除
      a = b
      b = a.next
      count = 0
    }
  }

  // 处理结尾情况
  push(count === 0 ? a : null)
  return _head
}


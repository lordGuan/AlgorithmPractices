/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


import {ListNode} from "../listNode";

/**
 * 108ms(35%) 40.8(5%)
 * @param head
 */
function deleteDuplicates_v1(head: ListNode | null): ListNode | null {
  let a = head, b = head?.next

  while (b) {
    if (a.val === b.val) {
      a.next = b.next
    } else {
      a = b
    }
    b = b.next
  }

  return head
}

/**
 * 96ms(87%) 40.7(6%)
 * @param head
 */
function deleteDuplicates_v2(head: ListNode | null): ListNode | null {
  let b = head

  while (b && b.next) {
    if (b.val === b.next.val) {
      b.next = b.next.next
    } else {
      b = b.next
    }
  }

  return head
}

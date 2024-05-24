// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;
  let firstNode = head;
  let secondNode = head.next;
  let remaining = swapPairs(secondNode.next);
  firstNode.next = remaining;
  secondNode.next = firstNode;
  return secondNode;
}

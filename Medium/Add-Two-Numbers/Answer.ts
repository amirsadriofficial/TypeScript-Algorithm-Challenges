//  Definition for singly-linked list.
class ListNodeClass {
  val: number;
  next: any;
  constructor(val?: number, next?: any) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: any, l2: any, carry: number = 0): any {
  if (!l1 && !l2 && !carry) return null;
  var total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(total / 10 + "");
  return new ListNodeClass(
    total % 10,
    addTwoNumbers(l1?.next, l2?.next, carry)
  );
}

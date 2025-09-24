/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let i = l1;
    let j = l2;
    let carry = 0;
    let head = new ListNode(0);
    let current = head;
    while(i !== null || j !== null || carry !== 0){
        let sum = carry;
        if (i !== null){
            sum += i.val;
            i = i.next;
        }
        if (j !== null){
            sum += j.val;
            j = j.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    return head.next;
};
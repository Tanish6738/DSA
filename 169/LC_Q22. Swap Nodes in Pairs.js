/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Create a dummy node to handle head swap easily
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    
    while(prev.next !== null && prev.next.next !== null) {
        let i = prev.next;
        let j = prev.next.next;
        
        // Perform the swap
        i.next = j.next;
        j.next = i;
        prev.next = j;
        
        // Move to next pair
        prev = i;
    }
    
    return dummy.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    let temp = head;
    while(temp != null ){
        arr.push(temp.val)
        temp = temp.next
    }

    let n = arr.length%2 == 0 ?  Math.floor(arr.length / 2 ) : Math.floor(arr.length / 2 ) + 1;

    for(let i = 0 ; i<n;i++){
        if( arr[i] != arr[arr.length - i  - 1]) return false;
    }

    return true
};











/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return true;

    let slow = head, fast = head;
    let prev = null;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;

        const newPrev = prev;
        prev = slow;
        slow = slow.next;
        prev.next = newPrev;
    }

    let p1 = prev;
    let p2 = fast === null ? slow : slow.next;

    while(p1 !== null && p2 !== null){
        if(p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};




console.log(isPalindrome([1,2,2,1]));
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    
    while (lists.length > 1) {
        let l1 = lists.shift();
        let l2 = lists.shift();
        let merged = mergeTwoLists(l1, l2);
        lists.push(merged);
    }
    
    return lists[0];
};

let mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1 !== null) current.next = l1;
    if (l2 !== null) current.next = l2;
    
    return dummy.next;
}

// For testing with arrays, you need to convert them to linked lists first
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

// Test
let lists = [[1,4,5],[1,3,4],[2,6]].map(arrayToList);
console.log(listToArray(mergeKLists(lists)));
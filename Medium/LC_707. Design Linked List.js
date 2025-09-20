// LeetCode 707: Design Linked List
// Implement a singly linked list with operations:
// get(index), addAtHead(val), addAtTail(val), addAtIndex(index,val), deleteAtIndex(index)

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // keep tail for O(1) addAtTail
        this.size = 0;
    }

    addAtHead(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        if (this.size === 0) {
            this.tail = node;
        }
        this.size++;
    }

    addAtTail(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    print() {
        let parts = [];
        let curr = this.head;
        while (curr) {
            parts.push(String(curr.val));
            curr = curr.next;
        }
        console.log(parts.join('->') + (parts.length ? '' : 'empty'));
    }
}

// NOTE: Usage / tests will be added below (separate step) to exercise all APIs.

// Simple demonstration (can be commented out when submitting to LeetCode)
const list = new MyLinkedList();
list.addAtHead(2);      // [2]
list.addAtHead(1);      // [1,2]
list.addAtTail(3);      // [1,2,3]
list.print();           // expected: 0->1->3->4
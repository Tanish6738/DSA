const prompt = require('prompt-sync')();

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    buildTree() {
        const rootValue = prompt("Enter root value: ");
        if (rootValue == -1) return null;
        const root = new Node(rootValue);
        console.log("enter the value of left node of " + rootValue);
        root.left = this.buildTree();
        console.log("enter the value of right node of " + rootValue);
        root.right = this.buildTree();

        return root;    
    }
    preOrder(root){
        if (root == null) return;
        process.stdout.write(root.value+" ");
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    postOrder(root){
        if (root == null) return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        process.stdout.write(root.value+" ");
    }
    inOrder(root){
        if (root == null) return;
        this.inOrder(root.left);
        process.stdout.write(root.value+" ");
        this.inOrder(root.right);
    }

    maxDepth(root){
        if (root == null) return 0;
        let left = this.maxDepth(root.left);
        let right = this.maxDepth(root.right);

        return Math.max(left,right) + 1;
    }

    DFS (root){
        let ans = [];
        if (root == null ) return
        let left  = this.DFS(root.left)
        let right = this.DFS(root.right)
        return [...left,...right,root.value]

    }
}

const tree = new Tree();
const root = tree.buildTree();
let ans = tree.maxDepth(root);
console.log(ans);

//Function creator for nodes
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

//creation of nodes itself
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

//Setup children or nodes
root.left = n1;
root.right = n2;
n1.left = n3;
n2.right = n4;

console.log(root, n1, n2, n3, n4);
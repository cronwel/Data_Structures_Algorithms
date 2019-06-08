class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }

}

class SinglyLinkedList{
  constructor(){
    this.head   = null;
    this.tail   = null;
    this.length = 0;
  }
}


var list = new SinglyLinkedList();








//this is the long form, not a good implementation
// var first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("Inspector");
// first.next.next.next = new Node("Gadget");
// first.next.next.next.next = new Node("Tiberius");


// console.table(first);

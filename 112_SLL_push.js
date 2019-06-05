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
  };
  // - accepts one value
  push(val){
    // - create a new Node using the value passed to the function
    var newNode = new Node(val);
    // - if there is no head, set the head and the tail to be the newly created node
    if( !this.head ) {
      this.head = newNode;
      this.tail = this.head;
    } else{
      // - else set the next property on the tail to new node
      this.tail.next = newNode;
      // - set the tail property to be the new node
      this.tail = newNode;
    }
    // - increment by one
    this.length++;
    return this;

  }
}

var list = new SinglyLinkedList();

list.push("you");
list.push(99);
list.push("test");
console.log(list);

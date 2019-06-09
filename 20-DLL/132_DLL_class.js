class Node{
  constructor(val){
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DLL {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

first = new Node(12);
first.next = new Node(13);
console.table(first);



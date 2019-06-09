class Node{
  constructor(val){
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}
class DLL {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}



list = new DLL();
console.table(list);

list.push(99);
list.push(45);
list.push(72);


console.table(list);
console.log(list.prev);
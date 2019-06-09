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
  pop(){
    if( !this.head) return undefined;
    var remove = this.tail;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.tail = remove.prev;
      this.tail.next = null;
      remove.prev = null;
    }
    this.length--;
    return remove;
  }
}



list = new DLL();

list.push(99);
list.push(45);
list.push(72);
console.dir(list);
list.pop();

console.dir(list);



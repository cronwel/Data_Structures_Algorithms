class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class sLL{
  constructor(){
    this.head   = null;
    this.tail   = null;
    this.length = 0;
  };
  push(val){
    var newNode = new Node(val);
    if( !this.head ) {
      this.head = newNode;
      this.tail = this.head;      
    } else{
      this.tail.next = newNode;
      this.tail = newNode;
    }    
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    // - If there are no nodes, return undefined
  if(!this.head ) return undefined;
  // - Store the current head property in a variable
  var currentHead = this.head;
  // - set the head property to be the current head's next property
  this.head = currentHead.next;
  // - decrement the length by 1
  this.length--;
  // return the value of the node removed
  return currentHead;
  }


}
var list = new sLL();
list.push("you");
// list.push(99);
// list.push("last");
list.pop();
console.log(list);


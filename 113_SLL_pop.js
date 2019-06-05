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
}


// if there are no nodes in the list, return undefined
// loop through the list until you reach the tail
// set the next property of the 2nd to last node to be null
// set the tail to be the 2nd to last node
// decrement the length by 1
// return the value of the node removed
 


var list = new sLL();
list.push("you");
// list.push(99);
// list.push("last");
list.pop();
console.log(list);

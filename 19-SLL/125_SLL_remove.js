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
  if(!this.head ) return undefined;
  var currentHead = this.head;
  this.head = currentHead.next;
  this.length--;
  return currentHead;
  }
  unshift(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while(counter !== index ){
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val){
    var foundNode = this.get(index);
    if(foundNode ) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return this.push(val);
    if(index === 0) return this.unshift(val);    
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    ProgressEvent.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length -1) return this.pop();
    var previousNode = this.get(index -1);
    var removed = previousNode.next;
    this.length--;
    return removed;
  }
};

var list = new sLL();
list.push("you");
list.push("are cray")
list.push("are cray")
list.push("are cray")
list.get(2);
list.get(3);
list.pop(2);

console.log(list);

// - if the index is less than zero or greater than the length, return false
// - if the index is the same as the length, push a new node to the end of the list
// - if the index is 0, unshift a new node to the start of the list
// - Otherwise, use the get method, access the node at the index -1
// - set the next property on that node to be the new node
// - set the next property on the new node tobe the previous next 
// - increment the length
// return true
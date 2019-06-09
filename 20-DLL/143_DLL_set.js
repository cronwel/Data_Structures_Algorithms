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
  shift(){
    if(this.length === 0) return undefined;
    var version1= this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = version1.next;
      this.head.prev = null;
      version1.next = null;
    }
    this.length--;
    return version1;
  }
  unshift(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    if(index <= this.length/2){
      var count = 0;
      var current = this.head;
      while(count != index){
        current = current.next;
        count++;      
      }
    } else {
      var count = this.length -1;
      var current = this.tail;
      while(count != index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val){
  var foundNode = this.get(index);
  if(foiundNode != null){
    foundNode.val = val;
    return true;
  }
  return false;
  }  
}

var list = new DoublyLinkedList()

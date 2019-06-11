class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }
  pop(){
    if(!this.first) return null;
    var temp = this.first;
    if(this.size === 1){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}




var stack = new Stack();
stack.push(9);
stack.push(12);
stack.push(2);
stack.pop();

console.log(stack);



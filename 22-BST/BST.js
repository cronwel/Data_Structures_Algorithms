class Node{
  constructor(val){
    this.left = null;
    this.val = val;
    this.right = null;
  }
}


class BST {
  constructor(){
    this.root = null;
  }
  //167 Insertion####################################
 insert(val){
   var newNode = new Node(val);
   if(this.root === null) {
     this.root = newNode;
     return this;
    } 
      var current = this.root;
      while(true){
        if(val === current.val) return undefined;
        if(val < current.val){
          if(current.left === null){
            current.left = newNode;
            return this;
          } 
            current = current.left;
          } else {
            if(current.right === null){
              current.right = newNode;
              return this;
            }
            current = current.right;
          }
      }
  }
  
 //169 Find##########################################
  find(val){
    if(this.root === null) return false;
    var current = this.root, found = false;
    while(current && !found){
      if(val < current.val){
        current = current.left;
      } else if(val > current.val){
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

}

var tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(1);
tree.insert(2);
tree.insert(1);
tree.insert(3);

tree.insert(8);
tree.insert(12);
tree.insert(16);

console.table(tree);
console.log(tree.find(22));

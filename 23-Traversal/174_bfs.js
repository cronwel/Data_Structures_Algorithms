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
  //167 Insertion##########################
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
  
 //169 Find################################
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

//174-BFS##################################
  contains(val){
    if(this.root === null) return false;
    var current = this.root,
    found = false;
    while(current && !found){
      if(val < current.val) {
        current = curent.left;
      } else if(val > current.val){
        current = current.right;
      } else {
        return true;
      }
    }
    return true;
  }
  bfs(){
    var node = this.root,
        data = [],
       queue = [];
    queue.push(node);
    while(queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }
// 176. Preorder###########################
  preorder(){
    var data= [];
    function traverse(node){
      data.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  //177. Postorder#########################
  postorder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

}

var tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.table(tree);
console.log(tree.preorder());
console.log(tree.postorder());

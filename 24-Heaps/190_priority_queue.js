
//186###################################
class PQ{
  constructor(){
    this.values = [];
  }

  insert(val, priority){
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    this.bubble();
  }

  bubble(){
   let index = this.values.length - 1;
   const element = this.values[index];
   while(index > 0){
    let parent = Math.floor((index - 1)/2);
    let p      = this.values[parent];
    // if(element > p ){
    //   this.values[parent] = element;
    //   this.values[index]  = p;
    //   index = parent;
    // }
    if(element.priority <= p.priority) break;
    this.values[parent] = element;
    this.values[index]  = p;
    index = parent;
   }
  }
  // 188 ExtractMax#####################################
  remove(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.down();
    }
    return max;
  }
  down(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let clx = 2*index + 1;
      let crx = 2*index + 2;
      let lchild,rchild;
      let swap = null;
      if(clx < length){
        lchild = this.values[clx];
        if(lchild.priority > element.priority) swap = clx;
      } 
      if(crx < length){
        rchild = this.values[crx];
        if(
            (swap === null && rchild.priority > element.priority) ||
            (swap !== null && rchild.priority > lchild.priority )
        ){
          swap = crx;
        }
      }
      if(swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }  
}

class Node{
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}


let er = new PQ();

er.insert("stab wound", 2);
er.insert("gunshot wound", 5);
er.insert("cold", 1);
er.insert("herpes", 3);
er.insert("pregnancy", 4);
console.log(er);

er.remove()
console.log(er);
er.remove()
console.log(er);
er.remove()
console.log(er);
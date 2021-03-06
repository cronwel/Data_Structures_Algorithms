
//186###################################
class MaxBH{
  constructor(){
    this.values = [41,39,33,18,27,12];
  }

  insert(element){
    this.values.push(element);
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
    if(element <= p) break;
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
        if(lchild > element) swap = clx;
      } 
      if(crx < length){
        rchild = this.values[crx];
        if(
            (swap === null && rchild > element) ||
            (swap !== null && rchild > lchild )
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


let heap = new MaxBH();

heap.insert(55);


console.log(heap);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();




console.log(heap);



console.log(heap.values);
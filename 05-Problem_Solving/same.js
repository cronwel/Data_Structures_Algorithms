function same(arr1,arr2){

  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i =0; i <arr1.length; i++) {
    let sameAtIndex = arr2.indexOf(arr1[i] **2);
    if(sameAtIndex === -1){
      return false;
    }
    console.log(arr2);
    arr2.splice(sameAtIndex,1)
  }
  return true;
}

var a = [1,2,3,3];
var b = [9,1,4,9];

console.log(same(a,b));
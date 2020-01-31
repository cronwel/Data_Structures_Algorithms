// 31

function sumZero(arr){
  let pairs = {};
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum > 0 ){
      right --;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4,-2,-3,-1,0,1,3,2,5]));
// function sumZero(arr){
// 	for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + " = arr[i], i = " + i)
// 		for(let j = i+1; j < arr.length; j++){
//     console.log(arr[j] + " = arr[j], j = " + j)
      
// 			if(arr[i] + arr[j] === 0){
// 				return [arr[i], arr[j]];
//         }
//      }
//    }
// }



// -4 = arr[i], i = 0 
//     -3 = arr[j], j = 1 
//     -2 = arr[j], j = 2 
//     -1 = arr[j], j = 3 
//     0 = arr[j], j = 4 
//     1 = arr[j], j = 5 
//     2 = arr[j], j = 6 
//     5 = arr[j], j = 7 

// -3 = arr[i], i = 1 
//     -2 = arr[j], j = 2 
//     -1 = arr[j], j = 3 
//     0 = arr[j], j = 4 
//     1 = arr[j], j = 5 
//     2 = arr[j], j = 6 
//     5 = arr[j], j = 7 

// -2 = arr[i], i = 2 
//     -1 = arr[j], j = 3 
//     0 = arr[j], j = 4 
//     1 = arr[j], j = 5 
//     2 = arr[j], j = 6

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right ) {
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

sumZero([-4,-3,-2,-1,0,1,2,5])

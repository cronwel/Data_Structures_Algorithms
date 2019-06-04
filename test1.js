function array_diff(a, b) {
  var result = [];
  for(var i = 0; i < a.length; i++){
    console.log("number is " +  a[i]);
    for(var j = 0; j< b.length; j++){
      if(b[j] === a[i]){
        result.push(a[i]);
      }
      
    }
  }
  return result;
  }

console.log(array_diff([1,2,3,4,5,6,], [3,4]));


// create an array, = result
// create loop that iterates over each element in outer array
// create another loop that iterates over inner array 
//  if outer array[element] given positojn matches inner array
//    push the element to result
//  if it doesn't, increment to the next one
//  loop completes
//  then the next element in the array checks
// 
// Almost works!!!!!!!
// did not solve for empy arrays
// 
// 
// 
// 
// 
// 

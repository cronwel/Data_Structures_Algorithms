function countUniqueValues(arr) {
  var i = 0;
  for(var j = 1; j < arr.length; j ++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(arr[j]);
  }
}

console.log(countUniqueValues([1,3,3,3,3,3,3,4,5,6,7]));
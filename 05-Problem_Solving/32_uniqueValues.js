function countUniqueValues(arr) {
  var i = 0;
  for(var j = 1; j < arr.length; j ++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
    // console.log(i,j);
  }
  console.log(i + 1)
}

countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7])
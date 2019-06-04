function merge(arr) {
  let results = [];
  let i = 0;
  let j = 0;
  while ( i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr2[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
        j++;
    }
    while(i < arr1.length){
      results.push(arr1[i])
      i++;
    }
    while(j < arr2.length){
      results.push(arr1[j])
      j++;
    }
  }
  return results;
};




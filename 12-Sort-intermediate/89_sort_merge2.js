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
      results.push(arr2[j])
      j++;
    }
  }
  return results;
};

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let l = mergeSort(arr.slice(0,mid));
  let r = mergeSort(arr.slice(mid));
  return merge(l, r)
};








// Pseudocode

// Deconstruct array into halves until arrays are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged and sorted array

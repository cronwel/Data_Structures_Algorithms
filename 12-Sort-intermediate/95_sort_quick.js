function quickSort(arr, left = 0, right = arr.length -1) {
  if(left < right){
    let pivotindex = pivot(arr, left, right)
    

    quickSort(arr, left, pivotindex -1);

    quickSort(arr, pivtoindex + 1, right)
  }
  return arr;
}
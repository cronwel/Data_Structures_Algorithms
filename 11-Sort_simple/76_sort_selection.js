function selection(arr){
  for (let i = 0; i < array.length; i++) {
    const low = i
    for (let j = i + 1; j < array.length; j++) {
      if (arr[j] < arr[low]){
        low = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
  }
  return arr;
}
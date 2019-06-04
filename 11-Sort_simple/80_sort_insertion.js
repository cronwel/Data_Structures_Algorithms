function insertion(arr) {
  // - start by picking the second element in the array
	// - compare the second element wit the previous
	// 	○ if left is greater than right, swap
	// - continue to the next element
	// 	○ if the order is incorrect, iterate through the sorted portion to place the element in the correct place
	
  for (let i = 0; i < array.length; i++) {
    var current = arr[i];
    for (let j = i -1; j >= 0 && arr[j] > current; j--) {
       arr[j + 1]  = arr[j]      
    }
    arr[j + 1] = current;
    console.log(arr);
  }
  return arr;
}



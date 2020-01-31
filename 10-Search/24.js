function linearSearch(arr,num){
	for(var x = 0; x < arr.length; x++){
    console.log(arr[x]);
    
    if(arr[x] === num) 
      return x;
    }
  return -1;
}

console.log(linearSearch([10,67,15,20,25,30], 15))
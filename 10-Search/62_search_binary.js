function binarySearch(arr, num) {
  var l = 0; //-----------------------not 0 as a value 0, but  as index 0, as in arr[0]
  var r = arr.length -1;//--------- the -1 is necessary, otherwise out of bounds?
  var m = Math.floor((l + r) /2)
  while(arr[m] !== num && l <= r){
    // console.log(l,m,r);
    if(num < arr[m]){
      r = m - 1;//Yes, you are changing the variables original definition
    } else {
      l = m + 1;
    }
          m = Math.floor((l + r) / 2);
    }
    // console.log(l,m,r);
    if(arr(m) === num ){
      return m;
    }
    return -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 28));


// binarySearch([1,2,3,4,5,6,7,23,34,45,56,67,78,89], 45)


function binarySearch(arr, num) {
  var l = 0; //-----------------------not 0 as a value 0, but  as index 0, as in arr[0]
  var r = arr.length -1;//--------- the -1 is necessary, otherwise out of bounds?
  var m = Math.floor((l + r) /2)
  while(arr[m] !== num && l <= r){
    if(num < arr[m]) r = m - 1;
    else l = m + 1;
    m = Math.floor((l + r) / 2);
    }
    return arr[m] === num ? m : -1;
}

console.log(binarySearch([2,5,6,9,13,15,28,30], 28));


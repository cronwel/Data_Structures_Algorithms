

// This is total garbage, this does not Work
// this is what I came up with off the top of my head

function sort(arr){
  const sorted = [];
  for(var i = 0; i < arr.length; i++)
    if(arr[0]<arr[1]){
      arr[0].push(sorted);
      arr++;
    }
  return sorted;

};


console.log(sort(23,45,6,12,13));

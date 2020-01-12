function sumRange(num){
  if(num === 1) return 1;
  const g = num + sumRange(num - 1);
  return g;
};


// What is the base case?

// What's the situation with the different input?

// What would happen if we didn't return?

console.log(sumRange(4));


function factorial(num) {
  let total = 1;
  for(let i = num; i > 0; i--){
    total *= i;
    console.log(total);
  }
  return total;
};

console.log("Answer is " + factorial(7));
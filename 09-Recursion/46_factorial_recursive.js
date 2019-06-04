function factorial(num) {
  let total = 1;
  if (num ===1 ) return 1;
  const g = num * factorial(num - 1);
  console.log(g + " is g, num is " + num );
  return g;
};

console.log("Answer is " + factorial(7));
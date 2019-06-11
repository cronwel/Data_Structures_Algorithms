function factorial(x){
  if(x === 0) return 1;
  return x * factorial(x - 1);
}

const b = factorial(4);

console.log(b);
console.table(b);
console.dir(b);

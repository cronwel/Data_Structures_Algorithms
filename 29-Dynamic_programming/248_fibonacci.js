function fib(n){
  if(n <=2 ) return 1;
  var fibnums = [0,1,1];
  for(var i = 3; i <= n; i++){
    fibnums[i]= fibnums[i - 1] + fibnums[i -2];
  }
  return fibnums[n];
}

console.log(fib(8));

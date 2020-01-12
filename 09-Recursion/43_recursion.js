function countDown(num){
  if(num <=0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  // countdown(num);
}

var num = 4;
countDown(4);
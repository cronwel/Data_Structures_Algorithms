function naiveSearch(long, short){
  count = 0;

  // loop over long string(outer)
  for(var i = 0; i < long.length; i++){
    // loop over short string(inner)
    for(var j = 0; j < short.length; j++){
      // match= no, break inner loop
      if( short[j] !== long[i + j]) break;
      // match = yes, continue
      // if inner loop completes && "short match long"
      if( j === short.length - 1) count++;
      // increment count of  "short match long"
    }
  }
  console.log(count + " = " + short );
  
  return count;
  
}

console.log(naiveSearch("programming is fun when you understand stuff", "n"));
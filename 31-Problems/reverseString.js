function FirstReverse(str) { 
    var x = str
        .split('')
        .reverse()
        .join('');

    return x; 
      
  }
  str = 'Hello I eat pizza';
  console.log(FirstReverse(str));
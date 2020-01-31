function charCount(str){
  var result = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if(result[char]> 0){
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

var x = charCount("Hello hOW are you");
console.log(x);
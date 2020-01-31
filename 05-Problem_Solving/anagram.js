
function anagram(s1,s2) {
  if(s1.length !== s2.length ) {
      return false;
  }
  let list1={};
  let list2={};
  for(let letter in s1 ){
      list1[letter] = (list1[letter] || 0) + 1
  }
  for(let letter in s2 ){
      list2[letter] = (list2[letter] || 0 ) + 1
  }
  for(let key in list1 ) {
      if( list1[key.value] !== list2[key.value])
      return false;
      console.log(list1.valueOf(key.value));
  }
  return true
 }




// console.log("Test 1 = " + anagram("mom", "mom"))
// console.log("Test 2 = " + anagram("msdfinm", "mom"))


// Official Solution

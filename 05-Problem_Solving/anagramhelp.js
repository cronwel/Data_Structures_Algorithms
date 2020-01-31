function validAnagram(str1, str2){
       
  if(str1.length !== str2.length){
      return false;
  }
  let strCounter1 = {}
  let strCounter2 = {}
  
 for(let val of str1){
     strCounter1[val] = (strCounter1[val] || 0) +1;
 }
 for(let val of str2){
     strCounter2[val] = (strCounter2[val] || 0) +1
 }
 console.log(strCounter1);
 console.log(strCounter2);
 for(let key in strCounter1){
     if(!(key ** 2 in strCounter2)){
         return false;
     }
     if(strCounter2[key ** 2] !== strCounter1[key]){
         return false;
     }
 }
 console.log()
  return true;
  
}

validAnagram('qwe3efws', 'qeywrt');
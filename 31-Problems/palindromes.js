function palindrome(str){
    var arr = str.split('');

    if(arr === arr.reverse) {
        return `It's a palindrome buckaroo. Check it =  ${arr.reverse}`;
    } else {
       return "not a palindrome";
    }
    
}

console.log(palindrome('bab'))
function replaceS(str) { 
return str
  .replace(/[a-zA-Z]/g, (x) => String.fromCharCode(x.charCodeAt(0)+1))
  .replace(/[aieou]/g, vowels => vowels.toUpperCase());
}
  str ='hello mister';
  console.log(replaceS(str))


  // IT WORKS!!!
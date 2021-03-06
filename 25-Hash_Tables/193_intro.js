// 198##################################
// function hash(key, arrl){
//   let total = 0;
//   let nonprime = 31;
//   for(let i = 0; i < Math.min(key.length, 100); i++){
//     let char = key[i];
//     let value = char.charCodeAt(0)- 96;
//     total = (total* nonprime + value) % arrl;
//   }
//   return total;
// };

// 201-Set and Get##############################
class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    let index = this._hash(key);
      return index;
  }
  
}

let ht = new HashTable();

console.log(ht);

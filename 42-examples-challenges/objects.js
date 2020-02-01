const data = [
  {name: 'Alice', title: 'engineer'},
  {name: 'Bob', title: 'manager'},
  {name: 'Carl', title: 'engineer'},
  {name: 'Dave', title: 'CEO'},
  {name: 'Ed', title: 'designer'},
]



function indexByField(array, field){

  for ( field in array) {
    console.log(`${{...array.field}} : ${array[field]}`);
    console.log(array)
  }


}

console.log(indexByField(data));


// for(var i = 0; i < array.length; i++){
//   var x = array[i];
  
//   return Object.keys(x)
// }
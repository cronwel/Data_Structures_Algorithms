function simpleAdding(num) {
    if(num === 0){
        return num;
    }
    console.log(num);
    return num + simpleAdding(num -1);
}

console.log(simpleAdding(12));


// IT WORKS!!!!!!
// And I actually figured it out
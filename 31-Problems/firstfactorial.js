function firstFactorial(num){

    if(num === 0) {
        return 1
    } else {
        return num * firstFactorial(num-1)
    }
}

// firstFactorial(4);


console.log(firstFactorial(4));

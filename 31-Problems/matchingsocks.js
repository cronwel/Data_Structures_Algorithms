
function match(n, arr){
    let pairs = 0;
    let sorted = arr.sort((a,b) => a-b );
    console.log(sorted);
    for(var i = 0; i < n-1; i++ ){   
        if(sorted[i]===sorted[i+1]){
            pairs++;
            i += 1;
            console.log(i + " " + sorted[i])
        }
    }
    return pairs;
}

const n= 7;
const m = [1,2,3,1,2,3,4];

console.log(match(n,m));
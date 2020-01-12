// ATTEMPT # 1
// This works but it doesn't. At least not for Hakcerrank


// function countingvalleys(n, s){
//     var arr = s.split("");    
//     var start = null;
//     var up = 0;
//     var down = 0;
//     if(arr.length === n){
//         console.log(`${arr.length} and ${ n}`)
//         if(arr[i]==="U" ? start-- : start++ );
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i]==="U"){
//                 up++;
//             }else{
//                 down++;
//             };
//             console.log(`${i}, up is ${up} and down is ${down} and it starts at a ${start}`);
//         }
//         return (start + up - down)
//     } else {
//       return   "no way buckarro"
//     }
// };
// console.log(countingvalleys(12, "DDUUDDUDUUUD"));

function countingValleys(n, s) {
    let below = false;
    let dip = 0;
    var arr = s.split('');

    if(arr.length === n){
        arr.map(steps => ((steps === "U") ? 1: -1))
            .reduce((p,n)=> {
                if(p < 0 && !below){
                    below = true;
                }
                if((p+n) === 0 && below){
                    dip++;
                    below = false;
                }
                return p + n;
            });
        }
    return dip;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));

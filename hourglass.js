var i = 6;
var j = 6;
var x = [i][j] =
[
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
]

function maxGlass(arr) {
   let  maxGlassValue = [];
   if (typeof arr === "object"
       && arr.length === 6
       && arr.map(i => i.length).reduce((p,n)=> p + n) === 36 ) {
        for( let row = 0; row <=3; row++ ) {
            for( let col = 0; col <= 3; col++ ) {
                let sum = 0;
                sum += arr[row][col];
                sum += arr[row][col + 1];
                sum += arr[row][col + 2];
                sum += arr[row][col +1];
                sum += arr[row][col];
                sum += arr[row][col + 1];
                sum += arr[row][col + 2];
                console.log(sum);
                maxGlassValue.push(sum);
            };
        }
       }
    return (maxGlassValue.length > 0 ) ? Math.max(...maxGlassValue) : 0;
}

console.log(maxGlass(x));
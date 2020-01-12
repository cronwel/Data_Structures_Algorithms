// function foo(){
//     function bar() {
//         return 3;
//     }
//     return bar();
//     function bar() {
//         return 8;
//     }
// }

// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }


// console.log(foo());

// function foo(){
//     var bar = function() {
//         return 3;
//     };
//     return bar();
//     var bar = function() {
//         return 8;
//     };
// }

// function foo(){
//     return bar();
//     var bar = function() {
//         return 3;
//     };
//     var bar = function() {
//         return 8;
//     };
// }
// console.log(foo());

var foo = function(){
    return 4;
};
function bar() {
    return 3;
};
var baz = function biz(){
    return 4;
};
console.log(bar()); 
console.log(bar);
console.log(foo());
console.log(foo);
console.log(baz());
console.log(baz);
console.log(baz.biz);
// console.log(baz.biz());

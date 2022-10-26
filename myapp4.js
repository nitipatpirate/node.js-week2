// var a = 200;//ES6 : Global scope variable with function scope
{
    // var a = 300;//ES5: Local scope variable
    console.log(a);
}
// console.log(a)

let b = 400;//ES6 : Global scope variable with function scope
{
    let b = 500;//ES5: Local scope variable
    console.log(b);
}
console.log(b);
// {
//     var a = 'b'
// }
// {
//     var a = 30
// }
// Immediately invoked function makes var variable local like let
// and we can use the var only inside the scope to which it belongs
// this can be solution for reassignment of var variable which occurs 
// when you use the same name of variable for two information.
// the formula of immediately invoked function : 
// (()=>{
//     var a = 'b'
// })()
// console.log(a);
// in this case node js could not find the a variable outside the scope cause
//  it is now officially sealed and not global(local)
// =======================NFE==============================
// const moment = function test() {
    // test.local = 'web'
// }
// moment()
// console.log(moment.local);
// named function expression is the method that can make two name for one function 
// and the second one can be used only inside of the block scope, if it is used outside
//  the block scope then the error will happen
// ========================new Function===================
// new Function was the method of creating function before the function expression, 
// declaration and arrow function
// let a = new Function(`console.log('hey')`)
// a()
// =========================================================================================
// (()=>{
//     var a = 'me'
// })()
// console.log(a);
// function a(){
//     var b = 'c'
// }
// console.log(b);
// ======================================================================================
// (
//     () =>{
//     var a = 'b'
// })()
// console.log(a);
// ==============================================================================================
// const calculate = function calculate2(number=10){
//     if (number === 1) return console.log(number += 1)
//     else return number += number + calculate2(number-1)
// }
// calculate(10)
// let a = new Function('a', "b", 'return console.log(a+b)')
// a(1, 9)
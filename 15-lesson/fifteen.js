// let b = 0;
// const getSum = (a) => {
//     if (a === 1) return b += 1
//     else {
//         b += a
//         getSum(a-1)
//     }
// }
// getSum(4)
// console.log(b);
// ===========================================
// ==========Faktorial solving==================
// let b = '';
// const math = (a) => {    
//     if (a === 1) return b += 1
//     else {         
//         b += a             
//         return math(a - 1)
//     }    
// }

// math(7)
// console.log(eval(b.split('').join('*')));
// ============================================
// let a = [2, 3]

// console. log(a[a.length-1]);
// const fib = (b) => {
//     for(i in a) {
//         // console.log([a.length-2], [a.length-1]);
//         // let c = a.length-2 + a[i-1]
//         // console.log(c);
//     }
// }
// fib()
// ======================================================================
// let count = 0
// function calculate(number) {
//     if (number === 1) return count += 1
//     else return count += number + calculate(number-1)
// }
// calculate(3)
// console.log(count);
// =============================================================
// let company = {
//     web : [
//         {name : 'John', salary : 1000},
//         {name : 'Peter', salary : 2000}
//     ],
//     na : {
//         frontend : [
//             {name : 'Chris', salary : 3500},
//             {name : 'Smith', salary : 10000}
//         ],
//         backend : [
//             {name : 'Harry', salary : 15000},
//             {name : 'Mike', salary : 20000}
//         ]
//     }
// }
// function calculate(company){
//     if (Array.isArray(company)) {
//         return company.reduce((sum, current)=> sum + current.salary, 0)
//     } else {
//         let count = 0;
//         for(let value of Object.values(company)){
//             count += calculate(value)
//         }
//         return count
//     }
// }
// console.log(calculate(company))
// ==============================================================================
// let res = 0
// function calculate(number){
//     if (number===1) return res += 1
//     else return res += number + calculate(number-1)
// }
// calculate(3)
// console.log(res); 
// ==========================================================
// let res = 0
// function calculate(number){
//     if (number===1) return res = number * 1
//     else return res = number * calculate(number-1)
// }
// calculate(4)
// console.log(res); 
// =========================================================
//0 1 1 2 3 5 8 13 
// console.log(a);
let a = [0, 1]
function calculate(stop){
    if(stop) return a[stop]
    else {
        let b = a.at(-1) + a.at(-2)
        let c = a.push(b)
        return calculate(a.length+1)
    }
}
console.log(calculate(4))

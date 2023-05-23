// setInterval(()=>{console.log('hey');}, 1000)
// setTimeout(()=>{console.log('hey');}, 9000)
// let a = {
//     b : 'c',
//     v : function (){
//         return ()=>{
//         console.log(this.b);
//         }
//     }
// }
// console.log(a.v()());
// let l = a
// a.v()()
// ==========================================================================================
// let a = {
//     b : 'c',
//     n : function (){
//         return ()=>{
//             console.log(`${this.b}`);
//         }
//     } 
// }
// a.n()()
// =====================================================================
// let count = 10
// let id = setInterval(() => {
    // let time = new Date()
    // console.log(time.getSeconds());
    // if(time.getSeconds() == 36) clearInterval(id)
    // console.log(time.getSeconds());
    // console.log(count--);
    // if(count===0) clearInterval(id)
// }, 1000);
// ===========================================================
// let a = 5
// let id = setInterval(()=>{
//     console.log(a--);
//     if(a===0) clearInterval(id)
// }, 1000)
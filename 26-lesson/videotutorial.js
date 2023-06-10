// const { rejects } = require("assert");
// const { log } = require("console");
// const { promiseImpl } = require("ejs");
// const { resolve } = require("path");

// const { async } = require("rxjs");

// const { async } = require("rxjs");
// =============================promise, async await and callback======================================
{
// let cars = [
//     {id : 1, brand : 'spark', year : 2010},
//     {id : 2, brand : 'Traverse', year : 2021},
//     {id : 3, brand : 'Tracker2', year : 2022},
// ]
// ==============================================================
// function render(){
//     setTimeout(() => {
//         cars.forEach(value=>{console.log(`${value.id}) ${value.brand}`)})
//     }, 1000);
// }
// render()
// console.log('==========');
// function deleteCar(id){
//     setTimeout(() => {
//         let res = cars.filter(value=>value.id !== id)
//         cars = res
//         console.log('=====================');
//         render()
//     }, 2000);
// }
// deleteCar(1)
// ==================================promise======================================
// function deleteCar(id){
//     return new Promise((resolve, rejects)=>{
//         setTimeout(() => {
//             let res = cars.filter(value=>value.id !== id)
//             cars = res
//             let error = false
//             if(!error) resolve()
//             else rejects(`There is an error that you should fix.`)
//         }, 2000);
//     })
// }
// deleteCar(1).then(render).catch(error=>console.log(error))
// ===================================async await1================================
// async function deleteCar(id){
//     let res = await cars.filter(value=>value.id !== id)
//     cars = res
//     render()
// }
// deleteCar(1)
// =============================async await2============================================
// function deleteCar(id){
    // return new Promise((resolve, rejects)=>{
    //     setTimeout(() => {
    //         let res = cars.filter(value=>value.id !== id)
    //         cars = res
    //         let error = false
    //         if(!error) resolve()
    //         else rejects(`There is an error that you should fix.`)
    //     }, 2000);
    // })
// }
// async function final(){
    // await deleteCar(1)
    // render()
// }
// final()
}
// ====================================================================================================
// let cars = [
//     {id : 1, brand : 'spark', year : 2010},
//     {id : 2, brand : 'Traverse', year : 2021},
//     {id : 3, brand : 'Tracker2', year : 2022},
// ] 
// function deleteCar(id){
//     let res = cars.filter((value)=>value.id!==id)
//     cars = res
// }
// function addCar(usr){
//     cars = [...cars, {id : eval(`${cars.at(-1).id}+1`), name : usr}]
// }
// addCar('Tahoe')
// deleteCar(2)
// addCar('ELantra')
// addCar('Sonata')
// console.log(cars);
// let b = cars.slice(1)
// let v = b.map((value)=>{
//     return value.id -1    
// })
// console.log(cars.slice(1));
// console.log(v);
// ==============================================================
// function* data(){
//     yield 1
//     yield 2
// }

// const { log } = require("console");
// const Generator = require("yeoman-generator");

// const generator = data()
// const gr1  = data()

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// ================================================================
// console.log(generator.next());
// console.log(generator.next());
// console.log(gr1.next());
// =======================loop of generator==========================
// ====================for loop=======================
// for (i of generator){
    // console.log(i);
// }
// ======================array spread operator===================
// console.log([...generator]);
// try {
//     console.log(number);
//     console.log(a);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
// class a {
//     getInfo(){
//         console.log('Here is child');
//     }
// }
// class b extends a {
//     getChild(){
//         console.log('Here is parent');
//     }
//     getBoth(){
//         this.getChild()
//         super.getInfo()
//     }
// }
// let c = new b()
// c.getBoth()
// ==================================================
// class a {
//     #name = 'me'    
//     set getPrivate(value){
//         this.#name = value
//         console.log(value);
//     }
//     get getPrivate(){
//         console.log(this.#name);
//     }
// }
// let b = new a()
// b.getPrivate
// ===========================6/June/2023======================
// function* Lionel(){
//     let res =  yield 1
//     yield 2 + res
// }
// let Leo = Lionel()
// console.log(Leo.next().value);
// console.log(Leo.next(5).value);
// ======================generator for looping=========================================
function* getData(){
    yield 1
    yield 2
    yield 3
}
let first = getData()
let second = getData()

// for(vl of first){
    // console.log(vl);
// }
console.log([...first]);
// =========================================]
let cars = [
    {id : 1, brand : 'spark', year : 2010},
    {id : 2, brand : 'Traverse', year : 2021},
    {id : 3, brand : 'Tracker2', year : 2022},
    {id : 4, brand : 'Malibu', year : 2020},
    {id : 5, brand : 'Ferrari', year : 2002},
    {id : 6, brand : 'Lamborghini', year : 2000},
] 
function deleteCar(id){
    let res = cars.filter((value)=>value.id!==id)
    cars = res
}
function addCar(usr){
    cars = [...cars, {id : eval(`${cars.at(-1).id}+1`), name : usr}]
}
addCar('Tahoe')
deleteCar(3)
addCar('ELantra')
addCar('Sonata')
// console.log(cars);
// let b = cars.slice(1)
// let v = b.map((value)=>{
//     return value.id -1    
// })
// console.log(cars.slice(1));
// console.log(v);
// ==============================================================




















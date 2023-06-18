// let a = {
//     name : 'web-brain',
//     title : 'academy', 
//     last : 'IT Center'
// }

// console.log(Object.getOwnPropertyDescriptors(a));
// Object.defineProperty(a, 'name', {writable:false})
// Object.defineProperty(a, 'name', {configurable:false})
// Object.defineProperty(a, 'name', {enumerable:false})
// a.name = 'PDP'
// console.log(a.name);
// ===================================================================
// delete a.name        // it is not supposed to be deleted at all
// console.log(a.name); // it is not supposed to be deleted at all
// ====================================================================
// for(i in a) {           // it can not be looped when flag as  
//     console.log(a[i]);  // enumerable is false, therefore there is no
// }                       // object key like name in node js
// =====================================================================
// console.log(Object.getOwnPropertyDescriptor(a, 'name'));
// let a = {
//     name:'John', 
//     last:'Smith',
//     get getFullName(){
//         console.log(this.name, this.last);
//     },
//     set getFullName (value) {
//         // console.log(value);
//         this.name = value.name
//         this.last = value.last
//     } 
// }
// a.getFullName = {name : "Harry", last:'Kane'}
// a.getFullName
// ============================================================================================
let player = {
    name : 'Leo',
    number : 10,
    nationality : 'Argentina',
    status : 'captain'
}
let a = [1, 2, 3, 4, 5]
a.__proto__.delete = function (...res) {
    // res.map((i)=>{
    //     count =  a.map((value)=>value)
    //     console.log(count);
        
    // })
    let count = a.filter((value)=>{
        //  if(!res.includes(value)){
        //     return value
        // }
        return res !== value
    })
    return console.log(count);
    // for(var i of res){
    //     this.filter((value)=>value !== i)
    // }
    // console.log(i);
    
    
}
a.delete(1, 2, 3)
// console.log(a)
// player.a = 'b'
// Reflect.set(player, 'a', 'b')
// console.log(player.a);
// console.log(Object.getOwnPropertyDescriptor(player, 'name'));
// Object.defineProperty(player, 'name', {writable:false})
// player.name = 'harry'
// console.log(player.name);

// let a = {
//     name : 'web-brain',
//     title : 'academy', 
//     last : 'IT Center'
// }

// // console.log(Object.getOwnPropertyDescriptors(a));
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